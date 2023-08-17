"use client";

import { useState } from "react";
import Button from "../button";
import "./style.scss";

interface Props {
  colors: any;
}

export default function ChooseColor({ colors }: Props) {
  var [colorId, setColorId] = useState(colors[0].id);

  if (!colors.length) return null;

  const handleClick = (id: number) => {
    setColorId(id);
  };

  return (
    <div className="choose-color">
      رنک:
      <ul>
        {colors.map(({ id, code }: any) => (
          <li key={id}>
            <Button
              onClick={handleClick.bind(null, id)}
              style={{ backgroundColor: code }}
              className="radio-btn"
              type="button"
            >
              {id === colorId ? (
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
      <input type="hidden" value={colorId} name="color" />
    </div>
  );
}
