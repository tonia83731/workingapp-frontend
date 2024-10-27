/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, ReactNode } from "react";

type DefaultInputProps = {
  id: string;
  label: string;
  name: string;
  type?: string;
  isDisabled?: boolean;
  isError?: boolean;
  inputValue: string;
  inputCount?: number;
  maxCount?: number;
  includeCount?: boolean;
  ref?: any;
  children?: ReactNode;
  onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const DefaultInput = (props: DefaultInputProps) => {
  const {
    id,
    label,
    name,
    type = "text",
    isError = false,
    inputValue,
    inputCount,
    maxCount,
    includeCount = false,
    ref,
    children,
    onInputChange = () => {},
    isDisabled = false,
  } = props;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        name={name}
        type={type}
        className={`border ${
          isError
            ? "border-error text-error"
            : "border-blue-light text-blue-dark"
        } rounded-lg disabled:bg-blue-light-40 disabled:text-blue-light px-4 py-2 placeholder:text-sm placeholder:text-blue-light-60`}
        value={inputValue}
        onChange={(e) => onInputChange(e)}
        disabled={isDisabled}
      />
      {includeCount && (
        <div
          className={`w-full flex justify-end ${
            isError ? "text-error" : "text-blue-light"
          }`}
        >
          <p className="text-xs">
            {inputCount}/{maxCount}
          </p>
        </div>
      )}
      {children}
    </div>
  );
};

export default DefaultInput;
