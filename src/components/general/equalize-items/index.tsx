import "./style.scss";

export default function EqualizeItems(props: any) {
  const classnames = "equalize-items " + (props.className || "");

  return (
    <div {...props} className={classnames}>
      {props.children}
    </div>
  );
}
