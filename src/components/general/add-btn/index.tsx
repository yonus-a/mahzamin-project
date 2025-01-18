import Button from "@components/general/button";
import "./style.scss";

export default function AddBtn(props: any) {
  return (
    <Button {...props} className="add-btn" type="button">
      <svg>
        <title>add</title>
        <use href="#add" />
      </svg>
    </Button>
  );
}
