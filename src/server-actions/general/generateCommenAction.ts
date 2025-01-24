import { ServerActionReturnType } from "@/types/serverActionReturn";
import { CommenSchema, CommenType } from "@/types/commenType";
import safePars from "@/utils/validation/safePars";
import getUserId from "../auth/getUserId";

export default function generateCommenAction(serverAction: any) {
  return async function (data: CommenType): Promise<ServerActionReturnType> {
    try {
      const userId = await getUserId();

      const error = safePars(CommenSchema, data);
      if (error) return { ok: false, error };

      const res = await serverAction.create({
        data: {
          insertedId: userId,
          name: data.name,
        },
      });

      if (res.id) return { ok: true };
      return { ok: false, error: "لینک ایجاد نشده است !!" };
    } catch (e) {
      console.log(e);
      throw new Error("مشکلی در سرور پیش آمده لطفا مجددا تلاش نمایید !");
    }
  };
}
