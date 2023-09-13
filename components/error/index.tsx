import "./style.scss";

interface Props {
  msg: string;
}

export default function Error({ msg }: Props) {
  return (
    <div className="error">
      <svg>
        <title>Error</title>
        <use href="#error" />
      </svg>
      {msg}
    </div>
  );
}
