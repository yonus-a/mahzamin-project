import InputWrapper from "@components/input-wrapper";
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
    <InputWrapper>
      <ColorMultipleSelect items={colors} />
      <CreateColor />
    </InputWrapper>
  );
}
