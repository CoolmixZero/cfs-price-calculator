// pages/api/filter.ts
import prisma from '@/app/libs/prismadb';

export interface CarFilter {
  minSpeed: number;
  maxAcceleration: number;
  minPrice: number;
  maxPrice: number;
}

const getCarsByFilter = async (filter: CarFilter) => {
  try {
    let query: any = {};

    if (filter.minSpeed) {
      query.max_speed = {gt: filter.minSpeed};
    }

    if (filter.maxAcceleration) {
      query.acceleration = {lt: filter.maxAcceleration};
    }

    if (filter.minPrice) {
      query.min_price = {gte: filter.minPrice};
    }

    if (filter.maxPrice) {
      query.max_price = {lte: filter.maxPrice};
    }

    const cars = await prisma.cars.findMany({
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
  const filter: CarFilter = req.body;

  try {
    const filteredCars = await getCarsByFilter(filter);
    res.status(200).json(filteredCars);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while filtering the cars.' });
  }
}
