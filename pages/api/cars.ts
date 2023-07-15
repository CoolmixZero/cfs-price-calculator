// pages/api/cars.ts
import prisma from '@/app/libs/prismadb';

const getAllCars = async (page: number, pageSize: number, minSpeed: number, maxAcceleration: number, minPrice: number, maxPrice: number) => {
  try {

    let query: any = {};

    if (minSpeed) {
      query.max_speed = {gt: minSpeed};
    }

    if (maxAcceleration) {
      query.acceleration = {lt: maxAcceleration};
    }

    if (minPrice) {
      query.min_price = {gte: minPrice};
    }

    if (maxPrice) {
      query.max_price = {lte: maxPrice};
    }

    const cars = await prisma.cars.findMany({
      take: pageSize,
      skip: (page - 1) * pageSize,
      where: query,
      orderBy: {
        title: 'asc',
      },
    });

    return cars;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default async function handler(req: any, res: any) {
  const { page = 1, pageSize = 20, minSpeed = null, maxAcceleration = null, minPrice = null, maxPrice = null} = req.query;
  // const filter: CarFilter = req.body;

  try {
    const filteredCars = await getAllCars(Number(page), Number(pageSize), Number(minSpeed), Number(maxAcceleration), Number(minPrice), Number(maxPrice));
    res.status(200).json(filteredCars);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while filtering the cars.' });
  }
}