import Button from "../button";
import Icon from "../icon";
import "./style.scss";

interface Props {
  onIncrement: () => void;
  onDecrement: () => void;
  onDelete?: () => void;
  showDelete?: boolean;
  count: number;
}

export default function Counter({
  onIncrement,
  onDelete,
  onDecrement,
  showDelete = false,
  count,
}: Props) {
  return (
    <div className="counter">
      <Button type="button" onClick={onIncrement}>
        +
      </Button>
      {count}
      {!showDelete ? (
        <Button type="button" onClick={onDecrement}>
          -
        </Button>
      ) : (
        <Button type="button" className="delete" onClick={onDelete}>
          <Icon name="delete" title="delete item" />
        </Button>
      )}
    </div>
  );
}
