import InfoInputsCreator from "@components/info-inputs-creator";
import prisma from "@lib/prisma";

export default async function InfoForm() {
  const logos = await prisma.logo.findMany();

  return <InfoInputsCreator logos={logos} />;
}
