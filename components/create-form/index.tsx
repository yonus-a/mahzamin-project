import Dialog from "@components/dialog";
import DialogCta from "@components/dialog-cta";
import DialogContainer from "@components/dialog-container";
import DialogLayer from "@components/dialog-layer";
import Button from "@components/button";
import Error from "@components/error";
import "./style.scss";

interface Props {
  handleChange: ({ target }: any) => void;
  handleClick: ({ target }: any) => void;
  ariaLabel: string;
  close: boolean;
  errMsg: string;
}

export default function CreateForm({
  handleChange,
  handleClick,
  ariaLabel,
  close,
  errMsg,
}: Props) {
  return (
    <div className="create-form">
      <Dialog ariaLabel={ariaLabel} close={close}>
        <DialogCta type="button">
          <svg>
            <title>add</title>
            <use href="#add" />
          </svg>
        </DialogCta>
        <DialogLayer>
          <DialogContainer>
            {errMsg ? <Error msg={errMsg} /> : ""}
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
