import SelectWrapper from "@components/select-wrapper";
import CreateColor from "@components/create-color";
import ColorMultipleSelect from "@components/color-multiple-select";
import prisma from "@lib/prisma";

export default async function ChooseColor() {
  const colors = await prisma.color.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <SelectWrapper>
      <ColorMultipleSelect items={colors} />
      <CreateColor />
    </SelectWrapper>
  );
}
