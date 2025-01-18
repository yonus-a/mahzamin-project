import DialogContainer from "../general/dialog-container";
import DialogLayer from "../general/dialog-layer";
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

export default function CreateForm({
  handleChange,
  handleClick,
  ariaLabel,
  close,
}: Props) {
  return (
    <div className="create-form">
      <Dialog ariaLabel={ariaLabel} close={close}>
        <DialogCta type="button">
          <Icon name="add" title="add" />
        </DialogCta>
        <DialogLayer>
          <DialogContainer>
            <div className="input-group">
              <input type="text" onChange={handleChange} required autoFocus />
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
