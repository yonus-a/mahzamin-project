export default function safePars(schema: any, data: any) {
  const { error } = schema.safeParse(data);
  if (error) return error.errors[0].message;
}
