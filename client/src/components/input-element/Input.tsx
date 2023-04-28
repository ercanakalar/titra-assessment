const Input = (props: {
  type: string;
  placeholder: string;
  required: boolean;
  className: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { type, placeholder, required, className, onChange } = props;
  return (
    <input
      className={className}
      required={required}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
