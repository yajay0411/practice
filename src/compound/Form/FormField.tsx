import React, { createContext } from "react";

export const FormFieldNameContext = createContext<string | undefined>(
  undefined
);

type FormFieldProps = {
  name: string;
  children: React.ReactNode;
};

export const FormField: React.FC<FormFieldProps> = ({ name, children }) => (
  <FormFieldNameContext.Provider value={name}>
    <div className="form-field">{children}</div>
  </FormFieldNameContext.Provider>
);
