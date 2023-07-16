import "./style.scss";
import Button from "../button";

export default function Search() {
  return (
    <div className="search">
      <Button className="icon-button">
        <svg aria-hidden="true">
          <use href="#search" />
        </svg>
      </Button>
      <div className="input-group">
        <svg aria-hidden="true">
          <use href="#search" />
        </svg>
        <input type="search" />
      </div>
    </div>
  );
}
