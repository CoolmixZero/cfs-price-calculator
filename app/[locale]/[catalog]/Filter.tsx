"use client"

import { useState } from 'react';

interface FilterProps {
  onFilter: (filter: CarFilter) => void;
}

interface CarFilter {
  minSpeed: number;
  maxAcceleration: number;
  minPrice: number;
  maxPrice: number;
}

const Filter: React.FC<FilterProps> = ({ onFilter }) => {
  const [minSpeed, setMinSpeed] = useState('');
  const [maxAcceleration, setMaxAcceleration] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  let filter: CarFilter = {
    minSpeed: parseInt(minSpeed),
    maxAcceleration: parseFloat(maxAcceleration),
    minPrice: parseInt(minPrice),
    maxPrice: parseInt(maxPrice),
  };

  const handleFilter = async () => {
    await onFilter(filter);
  };

  return (
    <div className='relative flex flex-col w-full h-fit justify-center items-center'>
      <div className='flex flex-row w-7/12 gap-2 bg-pink-300 text-black justify-center items-center'>
        <div>
          <label>Min Speed:</label>
          <input
            className='w-full p-4 pt-6 font-light text-2xl text-black bg-white border-2 rounded-md outline-none'
            type='text'
            value={minSpeed}
            onChange={(e) => setMinSpeed(e.target.value)}
          />
          <label>Max Acceleration:</label>
          <input
            className='w-full p-4 pt-6 font-light text-2xl text-black bg-white border-2 rounded-md outline-none'
            type='text'
            value={maxAcceleration}
            onChange={(e) => setMaxAcceleration(e.target.value)}
          />
        </div>
        <div>
          <label>Min Price:</label>
          <input
            className='w-full p-4 pt-6 font-light text-2xl text-black bg-white border-2 rounded-md outline-none'
            type='text'
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <label>Max Price:</label>
          <input
            className='w-full p-4 pt-6 font-light text-2xl text-black bg-white border-2 rounded-md outline-none'
            type='text'
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>
      <button className='cursor-pointer bg-blue-500 rounded-2xl p-3' onClick={handleFilter}>
        Apply Filter
      </button>
    </div>
  );
};

export default Filter;