import SuccessAnimation from "../../../../public/animations/success.json";
import ErrorAnimation from "../../../../public/animations/success.json";
import Lottie from "lottie-react";
import "./style.scss";

interface Props {
  msg: string;
  type: string;
}

export default function Alert({ msg, type }: Props) {
  let animation = {};

  switch (type) {
    case "success":
      animation = SuccessAnimation;
      break;
    case "error":
      animation = ErrorAnimation;
      break;
  }

  return (
    <div className={`alert alert__${type}`}>
      <Lottie className={`animation`} animationData={animation} loop={true} />
      <p>{msg}</p>
    </div>
  );
}
