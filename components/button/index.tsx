import "./style.scss";

export default function Button(props: 
  {className: string, children: React.ReactNode}
  ) {
  return (
    <button {...props} className={`${props.className} button`}>
      {props.children}
    </button>
  );
}
