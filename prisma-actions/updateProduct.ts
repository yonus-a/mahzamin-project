import prisma from "@lib/prisma";

export default async function updateProduct(data: any) {
  const removeImages = data.removeImages?.map(Number) || [];
  const removeInfo = data.removeInfo?.map(Number) || [];
  const removeDetails = data.removeDetails?.map(Number) || [];

  const updateColor = data.colors.map((colorId: string) => {
    const slut = data.ProductColor?.shift();

    const connectColor = {
      Color: {
        connect: {
          id: +colorId,
        },
      },
    };

    return {
      where: {
        id: slut?.id || 6844815498747548,
      },
      update: connectColor,
      create: connectColor,
    };
  });

  const updateImages = data.images?.map(({ id, name }: any) => {
    const updateName = {
      name: name,
    };

    return {
      where: {
        id: +id,
      },
      create: updateName,
      update: updateName,
    };
  });

  const updateInfo = data.info?.map((val: any) => {
    const createInfo = {
      title: val.title,
      subTitle: val.subTitle,
      Logo: {
        connect: {
          id: +val.logo,
        },
      },
    };

    return {
      where: {
        id: +val.id,
      },
      create: createInfo,
      update: createInfo,
    };
  });

  const updateDetails = data.details?.map((val: any) => {
    const createInfo = {
      term: val.term,
      definition: val.definition,
    };

    return {
      where: {
        id: +val.id,
      },
      create: createInfo,
      update: createInfo,
    };
  });

  return await prisma.product.update({
    where: {
      id: data.productId,
    },
    data: {
      name: data.name,
      price: +data.price,
      quantity: +data.quantity,
      image: data?.mainImage?.name,
      description: data.description,
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
        deleteMany: {
          id: {
            in: data.ProductColor.map(({ id }: any) => +id),
          },
        },
        upsert: updateColor,
      },
      Image: {
        deleteMany: {
          id: {
            in: removeImages,
          },
        },
        upsert: updateImages,
      },
      Info: {
        deleteMany: {
          id: {
            in: removeInfo,
          },
        },
        upsert: updateInfo,
      },
      Detail: {
        deleteMany: {
          id: {
            in: removeDetails,
          },
        },
        upsert: updateDetails,
      },
    },
  });
}
