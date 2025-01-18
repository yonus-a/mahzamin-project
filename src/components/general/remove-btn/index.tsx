import Button from "@components/general/button";
import "./style.scss";

export default function RemoveBtn(props: any) {
  return (
    <Button {...props} className="remove-btn" type="button">
      <svg>
        <title>remove</title>
        <use href="#delete" />
      </svg>
    </Button>
  );
}
