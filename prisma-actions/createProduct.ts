import prisma from "@lib/prisma";

export default async function createProduct(data: any) {
  const args: any = {
    data: {
      name: data.name,
      image: data.images[0].name,
      price: +data.price,
      description: data.description,
      quantity: +data.quantity,
      publish: data.publish,
      Brand: {
        connect: {
          id: +data.brand,
        },
      },
      Category: {
        connect: {
          id: +data.category,
        },
      },
      ProductColor: {
        create: data.colors.map((colorId: any) => ({
          Color: {
            connect: {
              id: +colorId,
            },
          },
        })),
      },
    },
  };

  if (data.info && data.info.length > 0) {
    args.data.Info = {
      create: data.info.map(({ title, subTitle, logo }: any) => ({
        title,
        subTitle,
        Logo: {
          connect: {
            id: +logo,
          },
        },
      })),
    };
  }

  if (data.details && data.details.length > 0) {
    args.data.Detail = {
      create: data.details,
    };
  }

  if (data.images.length > 1) {
    args.data.Image = {
      create: data.images.map(({ name }: any) => ({
        name,
      })),
    };
  }

  try {
    return await prisma.product.create(args);
  } catch (error) {
    return error;
  }
}
