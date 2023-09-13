import CreateBrand from "@components/create-brand";
import CusomSelect from "@components/custom-select";
import prisma from "@lib/prisma";
import "./style.scss";

export default async function ChooseBrand() {
  const brands = await prisma.brand.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <div className="choose-brand">
      <CusomSelect items={brands} label="برند" />
      <CreateBrand />
    </div>
  );
}
