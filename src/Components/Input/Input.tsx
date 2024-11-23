type InputProps = React.ComponentProps<"input"> & {
  label?: string;
};

const Input = ({ type, name, value, placeholder, ...rest }: InputProps) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Input;
