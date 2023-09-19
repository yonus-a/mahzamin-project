"use client";

import Dialog from "@components/dialog";
import DialogContainer from "@components/dialog-container";
import DialogCta from "@components/dialog-cta";
import DialogLayer from "@components/dialog-layer";
import InputWrapper from "@components/input-wrapper";
import { useState } from "react";
import { Chip } from "@mui/material";
import "./style.scss";

export default function ImageInput() {
  const [imageNames, setImageNames] = useState<any>([]);

  const handleChange = ({ target }: any) => {
    var name = target.value.split("\\").pop();
    setImageNames([...imageNames, name]);
  };

  return (
    <div className="image-input">
      <Dialog ariaLabel="create image input">
        <InputWrapper>
          <DialogCta type="button">
            تصاویر
            <svg>
              <title>add</title>
              <use href="#add" />
            </svg>
          </DialogCta>
        </InputWrapper>
        <DialogLayer>
          <DialogContainer>
            <div className="input-group">
              <label>
                انتخاب تصویر
                <input
                  type="file"
                  name="image1"
                  accept="image/*"
                  multiple
                  onChange={handleChange}
                />
              </label>
            </div>
            <ul className="show-selected-images">
              {imageNames.length > 0 ? (
                <>
                  {imageNames.map((name: any) => (
                    <li key={name}>
                      <Chip label={name} />
                    </li>
                  ))}
                </>
              ) : (
                <p className="msg">تصویری انتخاب نشده است !</p>
              )}
            </ul>
          </DialogContainer>
        </DialogLayer>
      </Dialog>
    </div>
  );
}
