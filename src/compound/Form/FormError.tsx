import React, { useContext } from "react";
import { FormContext } from "./FormContext";
import { FormFieldNameContext } from "./FormField";

export const FormError: React.FC = () => {
  const name = useContext(FormFieldNameContext);
  const context = useContext(FormContext);
  if (!name || !context)
    throw new Error("FormError must be used within Form.Field and Form");
  if (!context.touched[name]) return null;
  return context.errors[name] ? (
    <div id={`${name}-error`} className="form-error" role="alert">
      {context.errors[name]}
    </div>
  ) : null;
};
