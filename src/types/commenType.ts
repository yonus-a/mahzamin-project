import { strReq } from "@utils/zod/str";
import z from "zod";

export const CommenSchema = z.object({
  name: strReq("نام نمیتواند خالی باشد"),
});

export type CommenType = z.infer<typeof CommenSchema>;
