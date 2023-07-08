import prisma from "@/app/libs/prismadb";

const getAllCars = async () => {
  try {
    const cars = await prisma.cars.findMany({
      // take: 8,
      // skip: skip,
      orderBy: {
        max_price: 'desc',
      },
    });
    
    return cars;
} catch (error: any) {
  throw new Error(error);
}
}


export default getAllCars;