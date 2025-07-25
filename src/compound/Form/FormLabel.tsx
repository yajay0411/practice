import React, { useContext } from "react";
import { FormFieldNameContext } from "./FormField";

type FormLabelProps = { children: React.ReactNode };
export const FormLabel: React.FC<FormLabelProps> = ({ children }) => {
  const name = useContext(FormFieldNameContext);
  if (!name) throw new Error("FormLabel must be used within Form.Field");
  return <label htmlFor={name}>{children}</label>;
};
