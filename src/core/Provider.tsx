import React from "react";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

interface IProviderProps {
  children: React.ReactNode;
}

const Provider: React.FC<IProviderProps> = ({ children }) => {
  return (
    <ErrorBoundary>
      <BrowserRouter>{children}</BrowserRouter>
    </ErrorBoundary>
  );
};

export default Provider;
