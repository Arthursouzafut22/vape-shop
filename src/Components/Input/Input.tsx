import { forwardRef } from "react";

type InputProps = React.ComponentProps<"input"> & {
  label?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, name, placeholder, ...rest }, ref) => {
    return (
      <div>
        {label && <label htmlFor={name}>{label}</label>}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
