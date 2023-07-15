"use client"

import { useState } from 'react';
import CardGrid from './CardGrid';
import useSWRInfinite from 'swr/infinite';
import EmptyState from '../EmptyState';
import { CarFilter } from '@/pages/api/filter';
import Filter from './Filter';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Loader from '../Loader';

interface GridContainerProps {
  speed: string;
  currency: string;
  speed_units: string;
  time_units: string;
  acceleration?: string;
  auction?: string;
}

interface Car {
  id: string;
  title: string;
  car_title: string | null;
  image: string | null;
  max_speed: number | null;
  acceleration: number | null;
  min_price: number | null;
  max_price: number | null;
  is_exclusive: boolean | null;
}

const GridContainer: React.FC<GridContainerProps> = ({ speed, currency, speed_units, time_units, acceleration, auction }) => {
  const [filter, setFilter] = useState<CarFilter>();

  const fetchCars = async (url: string) => {
    try {
      const response = await axios.post(url, filter);
      const data = response.data ? response.data.flat() : [];
      console.log(data)
      return data;
    } catch (error: any) {
      toast.error('Something went wrong.');
      throw new Error(error);
    }
  };

  const { data, error, isLoading, size, setSize } = useSWRInfinite(
    (index) => `/api/cars?page=${index + 1}&pageSize=20&minSpeed=${filter?.minSpeed}&maxAcc=${filter?.maxAcceleration}&minPrice=${filter?.minPrice}&maxPrice=${filter?.maxPrice}`,
    fetchCars
  );

  const handleLoadMore = () => {
    setSize(size + 1);
  };

  const handleFilter = (newFilter: CarFilter) => {
    setFilter(newFilter);
    setSize(1);
  };

  if (error) {
    console.log(error);
    return (
      <>
        <EmptyState showReset />
      </>
    );
  }

  const cars = data ? data.flat() : [];
  const shouldShowLoadMore = cars.length > 0 && cars.length % 20 === 0;

  return (
    <div className="relative w-full px-8">
      <Filter onFilter={handleFilter} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 justify-center">
            {cars.map((car: Car) => (
              <div className="flex items-center" key={car.id}>
                <CardGrid
                  car={car}
                  key={car.id}
                  speed={speed}
                  currency={currency}
                  speed_units={speed_units}
                  time_units={time_units}
                  acceleration={acceleration}
                  auction={auction}
                />
              </div>
            ))}
          </div>
          {shouldShowLoadMore && (
            <div className="flex justify-center mt-4">
              <button className="text-black dark:text-white" onClick={handleLoadMore} disabled={!data}>
                Load more
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
  
};

export default GridContainer;
