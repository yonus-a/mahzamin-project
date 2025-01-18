interface Props {
  animation: string;
  className?: string;
  children?: React.ReactNode;
  delay?: number;
}

export default function AnimatedItem(props: Props) {
  var { animation, className = "", children, delay = 0 } = props;
  var classnames = `wow animate__animated ${animation} ${className}`;

  return (
    <li className={classnames} data-wow-delay={`${delay}ms`}>
      {children}
    </li>
  );
}
