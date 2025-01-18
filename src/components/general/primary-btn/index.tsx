import Button from "@components/general/button";
import "./style.scss";

export default function PrimaryBtn(props: any) {
  const classnames = "primary-btn " + (props.className || "");

  return (
    <Button {...props} className={classnames}>
      {props.children}
    </Button>
  );
}
