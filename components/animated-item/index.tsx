export default function AnimatedItem(props: {
  animation: string,
  className?: string, 
  children?: React.ReactNode,
  delay?: number
}) {
  var { animation, className = "", children, delay = 0 } = props;
  var classnames = `wow animate__animated ${animation} ${className}`;
  return (
    <li {...props} className={classnames} data-wow-delay={`${delay}ms`}>
      {children}
    </li>
  );
}
