import { Control, FieldErrors } from "react-hook-form";
import { ReactNode } from "react";

export interface TextFieldProps {
  name: string;
  label?: string;
  errors?: FieldErrors<any>;
  placeholder?: string;
  icon?: ReactNode;
  type?: string;
  className?: string;
  [key: string]: any;
}

export interface TextAreaFieldProps {
  name: string;
  label?: string;
  errors?: FieldErrors<any>;
  placeholder?: string;
  rows?: number;
  className?: string;
  [key: string]: any;
}