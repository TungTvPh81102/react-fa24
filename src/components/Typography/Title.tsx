const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <h1 className={`text-xl font-bold ${className}`}>{children}</h1>;
};

export default Title;
