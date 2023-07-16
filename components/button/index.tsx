import "./style.scss";

export default function Button(props: any) {
  return (
    <button {...props} className={`${props.className} button`}>
      {props.children}
    </button>
  );
}
