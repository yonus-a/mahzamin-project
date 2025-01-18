import createProductAction from "@server-actions/product/createProductAction";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useCreateProduct() {
  const [alert, setAlert] = useState<any>(null);
  const router = useRouter();

  const closeAlert = () => {
    setAlert(null);
  };

  const onSubmit = async (data: any) => {
    const formData = new FormData();

    data.images.forEach((imgList: any) => {
      formData.append("images", imgList[0]);
    });

    console.log(data);

    const result = await createProductAction(data, formData);

    if (result.id) {
      setAlert({
        msg: "محصول با موفقیت ساخته شد !",
        type: "success",
      });

      setTimeout(() => {
        closeAlert();
        router.push("/admin/products");
      }, 1500);
    } else {
      let msg = "مشکلی در هنگام ایجاد محصول به وجود آمده است‌ ‌!!";
      let type = "error";

      if (result.code === "P2002") {
        msg = "نام محصول تکراری است !!";
      }

      setAlert({ msg, type });
      setTimeout(closeAlert, 2000);
    }
  };

  return { alert, onSubmit };
}
