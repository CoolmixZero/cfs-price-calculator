// pages/api/cars.ts
import prisma from '@/app/libs/prismadb';

export interface CarFilter {
  minSpeed: number;
  maxAcceleration: number;
  minPrice: number;
  maxPrice: number;
  isExclusive: number;
  orderBy: string,
  sortVia: string
  searchQuery: string;
}

const getAllCars = async (
  page: number, 
  pageSize: number, 
  minSpeed: number, 
  maxAcceleration: number, 
  minPrice: number, 
  maxPrice: number,
  isExclusive: number,
  orderBy: string,
  sortVia: string,
  searchQuery: string
) => {
  try {
    let query: any = {};
    const orderByQuery: any = {
      [!sortVia 
        ? "title" 
        : sortVia
      ]: !orderBy
        ? "asc" 
        : orderBy.replace(/\s/g, "")
    };

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

    if (isExclusive === 1) {
      query.is_exclusive = true;
    };

    console.log(searchQuery);
    if (searchQuery) {
      query.OR = [
        { title: { contains: searchQuery, mode: 'insensitive' } },
        { car_title: { contains: searchQuery, mode: 'insensitive' } },
      ];
    }

    // console.log("where:", query, "orderBy:", orderByQuery)
    const cars = await prisma.cars.findMany({
      take: pageSize,
      skip: (page - 1) * pageSize,
      where: query,
      orderBy: orderByQuery
    });

    return cars;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default async function handler(req: any, res: any) {
  const { 
    page = '1', 
    pageSize = '20',
    minSpeed = null, 
    maxAcceleration = null, 
    minPrice = null, 
    maxPrice = null, 
    isExclusive = '0',
    orderBy = null,
    sortVia = null,
    searchQuery = null
  } = req.query;
  
  try {
    const filteredCars = await getAllCars(
      Number(page), 
      Number(pageSize), 
      Number(minSpeed),
      Number(maxAcceleration),
      Number(minPrice),
      Number(maxPrice),
      Number(isExclusive),
      orderBy,
      sortVia,
      searchQuery
    );
    res.status(200).json(filteredCars);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while filtering the cars.' });
  }
}