"use client";

import Button from "../button";
import "./style.scss";

interface Props {
  colorId: any;
  setColorId: () => void;
}

export default function ChooseColor({ color, setColor, colors }: any) {
  if (!colors.length) return null;

  const handleClick = (color: any) => {
    setColor(color);
  };

  return (
    <div className="choose-color">
      رنک:
      <ul>
        {colors.map(({ id, code, name }: any) => (
          <li key={id}>
            <Button
              onClick={handleClick.bind(null, { id, name, code })}
              style={{ backgroundColor: code }}
              className="radio-btn"
              type="button"
            >
              {id === color.id ? (
                <svg>
                  <use href="#done" />
                </svg>
              ) : (
                ""
              )}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
