"use client"

import { useEffect, useState } from 'react';
import CardGrid from './CardGrid';
import useSWRInfinite from 'swr/infinite';
import EmptyState from '../EmptyState';
import Filter from './Filter';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Loader from '../Loader';
import { CarFilter } from '@/pages/api/cars';

interface GridContainerProps {
  filter_title: string;
  title_dynamics: string;
  title_price: string;
  only_exclusives: string;
  min_speed: string;
  max_acceleration: string;
  min_price: string;
  max_price: string;
  apply: string;
  search_placeholder: string;

  filter_by: string;
  filter_by_title: string;
  filter_by_speed: string;
  filter_by_acceleration: string;
  filter_by_min_price: string;
  filter_by_max_price: string;

  speed: string;
  currency: string;
  speed_units: string;
  time_units: string;
  acceleration?: string;
  auction?: string;
  load_more: string;

  empty_title: string;
  empty_subtitle: string;
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
  is_exclusive: true | false;
}

const GridContainer: React.FC<GridContainerProps> = ({ 
  filter_title, title_dynamics, title_price, only_exclusives, min_speed, max_acceleration, min_price, max_price, apply, search_placeholder,
  filter_by, filter_by_title, filter_by_speed, filter_by_acceleration, filter_by_min_price, filter_by_max_price,

  speed, currency, speed_units, time_units, acceleration, auction, load_more,
  empty_title, empty_subtitle
}) => {
  const [filter, setFilter] = useState<CarFilter>();

  const fetchCars = async (url: string) => {
    try {
      const response = await axios.post(url, filter);
      const data = response.data ? response.data.flat() : [];
      return data;
    } catch (error: any) {
      toast.error('Something went wrong.');
      throw new Error(error);
    }
  };

  const { data, error, isLoading, size, setSize } = useSWRInfinite(
    (index) => {
      const queryParams = new URLSearchParams({
        page: String(index + 1),
        pageSize: '20',
        minSpeed: String(filter?.minSpeed),
        maxAcceleration: String(filter?.maxAcceleration),
        minPrice: String(filter?.minPrice),
        maxPrice: String(filter?.maxPrice),
        isExclusive: String(filter?.isExclusive),
        orderBy: filter?.orderBy ? filter?.orderBy.replace(/\s/g, "") : "",
        sortVia: filter?.sortVia ? filter?.sortVia.replace(/\s/g, "") : "",
        searchQuery: filter?.searchQuery ? String(filter?.searchQuery) : "",
      });
  
      return `/api/cars?${queryParams.toString()}`;
    },
    fetchCars,
    {
      dedupingInterval: 0,
      refreshInterval: 0,
      refreshWhenHidden: false,
      refreshWhenOffline: false,
      shouldRetryOnError: false
    }
  );

  useEffect(() => {
    setSize(1);
  }, [filter, setSize]);

  const cars = data ? data.flat() : [];
  const shouldShowLoadMore = cars.length > 0 && cars.length % 20 === 0;

  const handleLoadMore = () => {
    setSize(size + 1);
  };

  const handleFilter = (newFilter: CarFilter) => {
    setFilter(newFilter);
  };

  if (error) {
    return (
      <>
        <div className="relative w-full px-8">
          <Filter 
            filter_title={filter_title} 
            title_dynamics={title_dynamics}
            title_price={title_price}
            only_exclusives={only_exclusives}
            min_speed={min_speed}
            max_acceleration={max_acceleration}
            min_price={min_price}
            max_price={max_price}
            apply={apply}
            search_placeholder={search_placeholder}

            filter_by={filter_by}
            filter_by_title={filter_by_title}
            filter_by_speed={filter_by_speed}
            filter_by_acceleration={filter_by_acceleration}
            filter_by_min_price={filter_by_min_price}
            filter_by_max_price={filter_by_max_price}
            onFilter={handleFilter} 
          />
          <EmptyState title={empty_title} subtitle={empty_subtitle}/>
        </div>
      </>
    );
  }

  return (
    <div className="relative w-full px-8">
      <Filter 
        filter_title={filter_title} 
        title_dynamics={title_dynamics}
        title_price={title_price}
        only_exclusives={only_exclusives}
        min_speed={min_speed}
        max_acceleration={max_acceleration}
        min_price={min_price}
        max_price={max_price}
        apply={apply}
        search_placeholder={search_placeholder}

        filter_by={filter_by}
        filter_by_title={filter_by_title}
        filter_by_speed={filter_by_speed}
        filter_by_acceleration={filter_by_acceleration}
        filter_by_min_price={filter_by_min_price}
        filter_by_max_price={filter_by_max_price}
        onFilter={handleFilter} 
      />
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
                {load_more}
              </button>
            </div>
          )}

        </>
      )}
      {cars.length === 0 && !isLoading && (
        <>
        <div className="relative w-full px-8">
          <EmptyState title={empty_title} subtitle={empty_subtitle}/>
        </div>
      </>
      )}
    </div>
  );
  
};

export default GridContainer;
