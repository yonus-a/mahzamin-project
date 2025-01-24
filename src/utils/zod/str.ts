import { z } from "zod";

export const str = () => z.string().trim();

export const strNum = (msg: string) => str().regex(/^\d+$/, { message: msg });

export const strLen = (len: number, msg: string) =>
  str().length(len, { message: msg });

export const strReq = (msg: string) => str().min(1, { message: msg });

export const optional = () => z.literal("").optional();

export const equalGt = (eq: any, gt: any, msg: string) =>
  str().refine(
    (val) => {
      return val === eq || val.length > gt;
    },
    {
      message: msg,
    }
  );

export const equalLen = (eq: any, len: any, msg: string) =>
  str().refine(
    (val) => {
      return val === eq || val.length === len;
    },
    {
      message: msg,
    }
  );
