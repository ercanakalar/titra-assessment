const Button = (props: { className: string; children: JSX.Element }) => {
  const { children, className } = props;

  return <button className={className}>{children}</button>;
};

export default Button;
