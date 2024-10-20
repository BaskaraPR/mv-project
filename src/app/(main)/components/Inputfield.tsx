import { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export default function InputField({
  placeholder,
  className = "",
  ...props
}: InputFieldProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
      {...props}
    />
  );
}
