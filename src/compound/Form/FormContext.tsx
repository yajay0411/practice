import React from "react";

type FormContextProps = {
  values: Record<string, any>;
  errors: Record<string, string | undefined>;
  touched: Record<string, boolean>;
  setFieldValue: (name: string, value: any) => void;
  setFieldTouched: (name: string, touched: boolean) => void;
};

export const FormContext = React.createContext<FormContextProps | undefined>(
  undefined
);
