import Dialog from "@components/general/dialog";
import DialogContainer from "@components/general/dialog-container";
import DialogLayer from "@components/general/dialog-layer";
import Button from "@components/general/button";
import "./style.scss";

interface Props {
  msg: string;
  onConform: () => void;
  onCancel: () => void;
  show: boolean;
}

export default function Confrom({ msg, onConform, onCancel, show }: Props) {
  return (
    <div className="conform">
      <Dialog ariaLabel="delete product" show={show}>
        <DialogLayer>
          <DialogContainer>
            <p>{msg}</p>
            <div className="flex-wrapper">
              <Button onClick={onConform}>بله</Button>
              <Button onClick={onCancel}>خیر</Button>
            </div>
          </DialogContainer>
        </DialogLayer>
      </Dialog>
    </div>
  );
}
