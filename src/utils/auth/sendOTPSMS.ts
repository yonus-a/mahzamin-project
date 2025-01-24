import kavenegar from "kavenegar";

interface Props {
  receptor: string;
  token: string;
}

export default async function sendOTPSMS(data: Props) {
  var api = kavenegar.KavenegarApi({
    apikey: process.env.KAVENEGAR_KEY as string,
  });

  return await new Promise((resolve, reject) => {
    api.VerifyLookup(
      {
        receptor: data.receptor,
        template: "SMS-OTP",
        token: "partcrm.ir",
        token2: data.token,
      },
      function (response, status) {
        if (status === 200) {
          resolve(true);
        } else {
          return reject("مشکلی در ارسال پیامک پیش آمده !!");
        }
      }
    );
  });
}
