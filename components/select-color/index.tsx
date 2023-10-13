"use client";

import Button from "../button";
import Icon from "../icon";
import "./style.scss";

interface Props {
  selectedColor: any;
  onColorChange: any;
  colors: any;
}

export default function SelectColor({
  selectedColor,
  onColorChange,
  colors,
}: Props) {
  if (!colors.length) return null;

  return (
    <div className="choose-color">
      رنک:
      <ul>
        {colors.map(({ id, code, name }: any) => (
          <li key={id}>
            <Button
              onClick={() => onColorChange({ id, name, code })}
              style={{ backgroundColor: code }}
              className="radio-btn"
              type="button"
            >
              {id === selectedColor.id && <Icon name="done" />}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
