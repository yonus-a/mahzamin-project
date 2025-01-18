import DialogContainer from "../general/dialog-container";
import DialogLayer from "../general/dialog-layer";
import ColorInput from "../general/color-input";
import DialogCta from "../general/dialog-cta";
import Dialog from "../general/dialog";
import Button from "../general/button";
import Icon from "../general/icon";
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
          <Icon name="add" title="add" />
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
