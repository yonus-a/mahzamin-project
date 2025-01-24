import get30SecondsLater from "@/utils/date/get30SecondsLater";
import sendOTP from "@/server-actions/auth/sendOtp";
import { useFormContext } from "react-hook-form";
import { useTimer } from "react-timer-hook";
import { toast } from "react-hot-toast";
import "./styles.scss";

export default function SendOtpButton() {
  const { watch, setError, clearErrors, setFocus } = useFormContext();
  const { restart, seconds, isRunning } = useTimer({
    expiryTimestamp: get30SecondsLater(),
    autoStart: false,
  });

  const handleClick = async () => {
    try {
      const username = watch("username");
      const res: any = await sendOTP(username);

      if (res?.error) {
        setError("username", {
          message: res.error,
          type: "custom",
        });
      } else {
        clearErrors("username");
        setFocus("otp");

        if (!isRunning) {
          restart(get30SecondsLater());
        }
      }
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  return (
    <button
      className="send-otp-btn btn"
      onClick={handleClick}
      disabled={isRunning}
      type="button"
    >
      {isRunning ? seconds : "ارسال"}
    </button>
  );
}
