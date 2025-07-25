import React, { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode, FormEvent, ChangeEvent, FocusEvent } from "react";
import styles from "./Form.module.css";

// Add context for field name
const FormFieldNameContext = createContext<string | undefined>(undefined);

type FormValues = Record<string, any>;
type FormErrors = Record<string, string>;

type FormContextType = {
  values: FormValues;
  errors: FormErrors;
  touched: Record<string, boolean>;
  setFieldValue: (name: string, value: any) => void;
  setFieldTouched: (name: string, touched: boolean) => void;
  validateField: (name: string) => void;
  validateForm: () => boolean;
  getFieldError: (name: string) => string | undefined;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

type FormProps = {
  initialValues: FormValues;
  validate?: (values: FormValues) => FormErrors;
  onSubmit: (values: FormValues) => void;
  children: ReactNode;
};

export const Form: React.FC<FormProps> & {
  Field: typeof Field;
  Label: typeof Label;
  Input: typeof Input;
  Error: typeof ErrorMessage;
} = ({ initialValues, validate, onSubmit, children }) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateForm = useCallback(() => {
    if (!validate) return true;
    const validationErrors = validate(values);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  }, [validate, values]);

  const validateField = useCallback(
    (name: string) => {
      if (!validate) return;
      const validationErrors = validate(values);
      setErrors((prev) => ({
        ...prev,
        [name]: validationErrors[name],
      }));
    },
    [validate, values]
  );

  const setFieldValue = useCallback((name: string, value: any) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const setFieldTouched = useCallback((name: string, isTouched: boolean) => {
    setTouched((prev) => ({
      ...prev,
      [name]: isTouched,
    }));
  }, []);

  const getFieldError = useCallback(
    (name: string) => {
      return errors[name];
    },
    [errors]
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isValid = validateForm();
    setTouched(
      Object.keys(values).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {} as Record<string, boolean>
      )
    );
    if (isValid) {
      onSubmit(values);
    }
  };

  return (
    <FormContext.Provider
      value={{
        values,
        errors,
        touched,
        setFieldValue,
        setFieldTouched,
        validateField,
        validateForm,
        getFieldError,
      }}
    >
      <form onSubmit={handleSubmit} noValidate>
        {children}
      </form>
    </FormContext.Provider>
  );
};

type FieldProps = {
  name: string;
  children: ReactNode;
};

const Field: React.FC<FieldProps> = ({ name, children }) => (
  <FormFieldNameContext.Provider value={name}>
    <div className={styles["form-field"]}>{children}</div>
  </FormFieldNameContext.Provider>
);

type LabelProps = {
  children: ReactNode;
};

const Label: React.FC<LabelProps> = ({ children }) => {
  const name = useContext(FormFieldNameContext);
  if (!name) throw new Error("Form.Label must be used within Form.Field");
  return (
    <label className={styles["form-label"]} htmlFor={name}>
      {children}
    </label>
  );
};

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name?: string;
};

const Input: React.FC<InputProps> = (props) => {
  const context = useContext(FormContext);
  const fieldName = useContext(FormFieldNameContext);
  const name = props.name ?? fieldName;
  if (!context || !name)
    throw new Error(
      "Form.Input must be used within Form.Field and have a name"
    );
  const { values, setFieldValue, setFieldTouched, validateField, touched } =
    context;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(name, e.target.value);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    console.log(e);
    setFieldTouched(name, true);
    validateField(name);
  };

  return (
    <input
      {...props}
      name={name}
      value={values[name] ?? ""}
      onChange={handleChange}
      onBlur={handleBlur}
      className={`${styles["form-input"]}${
        touched[name] && context.errors[name] ? " " + styles["error"] : ""
      }`}
    />
  );
};

const ErrorMessage: React.FC<{ name?: string }> = ({ name }) => {
  const context = useContext(FormContext);
  const fieldName = useContext(FormFieldNameContext);
  const finalName = name ?? fieldName;
  if (!context || !finalName)
    throw new Error(
      "Form.Error must be used within Form.Field and have a name"
    );
  const { errors, touched } = context;
  if (!touched[finalName] || !errors[finalName]) return null;
  return <div className={styles["form-error"]}>{errors[finalName]}</div>;
};

// Attach compound components
Form.Field = Field;
Form.Label = Label;
Form.Input = Input;
Form.Error = (props: any) => {
  return <ErrorMessage {...props} />;
};
