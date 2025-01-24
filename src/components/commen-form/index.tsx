import DialogContainer from "../general/dialog-container";
import DialogLayer from "../general/dialog-layer";
import DialogCta from "../general/dialog-cta";
import Dialog from "../general/dialog";
import Button from "../general/button";
import Icon from "../general/icon";
import "./style.scss";

interface Props {
  handleClick: ({ target }: any) => void;
  ariaLabel: string;
  setValue: any;
}

export default function CreateForm({
  handleClick,
  ariaLabel,
  setValue,
}: Props) {
  const handleChange = ({ target: { value } }: any) => {
    setValue(value);
  };

  return (
    <div className="create-form">
      <Dialog ariaLabel={ariaLabel}>
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
