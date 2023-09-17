import Dialog from "@components/dialog";
import DialogCta from "@components/dialog-cta";
import DialogContainer from "@components/dialog-container";
import DialogLayer from "@components/dialog-layer";
import Button from "@components/button";
import ColorInput from "@components/color-input";
import "./style.scss";

interface Props {
  handleChange: ({ target }: any) => void;
  handleClick: ({ target }: any) => void;
  ariaLabel: string;
  close: boolean;
}

export default function CreateColorForm({
  handleChange,
  handleClick,
  ariaLabel,
  close,
}: Props) {
  return (
    <div className="create-color-form">
      <Dialog ariaLabel={ariaLabel} close={close}>
        <DialogCta type="button">
          <svg>
            <title>add</title>
            <use href="#add" />
          </svg>
        </DialogCta>
        <DialogLayer>
          <DialogContainer>
            <div className="box">
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  required
                  autoFocus
                />
                <ColorInput onChange={handleChange} required name="code" />
              </div>
              <Button type="button" onClick={handleClick}>
                اضافه کردن
              </Button>
            </div>
          </DialogContainer>
        </DialogLayer>
      </Dialog>
    </div>
  );
}
