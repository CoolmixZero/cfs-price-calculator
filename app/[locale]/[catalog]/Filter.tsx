"use client";

import { ChangeEvent, useState } from "react";
import Heading from "../Heading";
import { IoMdRefresh, IoMdCheckmark } from "react-icons/io";
import { CarFilter } from "@/pages/api/cars";
import FilterDropMenu from "./FilterDropMenu";
import SearchBar from "./SearchBar";

interface FilterProps {
  filter_title: string;
  title_dynamics: string;
  title_price: string;
  only_exclusives: string;
  min_speed: string;
  max_acceleration: string;
  min_price: string;
  max_price: string;
  apply: string;
  filter_by: string;
  filter_by_title: string;
  filter_by_speed: string;
  filter_by_acceleration: string;
  filter_by_min_price: string;
  filter_by_max_price: string;
  onFilter: (filter: CarFilter) => void;
}

const Filter: React.FC<FilterProps> = ({
  filter_title,
  title_dynamics,
  title_price,
  only_exclusives,
  min_speed,
  max_acceleration,
  min_price,
  max_price,
  apply,
  filter_by, filter_by_title, filter_by_speed, filter_by_acceleration, filter_by_min_price, filter_by_max_price,
  onFilter,
}) => {
  const [isExclusive, setIsExclusive] = useState(0);
  const [minSpeed, setMinSpeed] = useState("");
  const [maxAcceleration, setMaxAcceleration] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchField, setSearchField] = useState("");

  const [selectedOption, setSelectedOption] = useState("title");
  const [orderBy, setOrderBy] = useState("asc");

  let filter: CarFilter = {
    minSpeed: parseInt(minSpeed),
    maxAcceleration: parseFloat(maxAcceleration),
    minPrice: parseInt(minPrice),
    maxPrice: parseInt(maxPrice),
    isExclusive: isExclusive,
    sortVia: selectedOption,
    orderBy: orderBy,
    searchQuery: searchField
  };

  const handleFilter = () => {
    onFilter(filter);
  };

  const handleReset = () => {
    setMinSpeed("");
    setMaxAcceleration("");
    setMinPrice("");
    setMaxPrice("");
    setIsExclusive(0);
    setSelectedOption("title");
    setOrderBy("asc");
    setSearchField("");
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>, setter: any, valueToSet: number, limit: number, accept_float?: boolean) => {
    const inputValue = event.target.value;
    
    if (parseInt(inputValue) > limit) {
      setter(valueToSet);
    } else if (accept_float) {
      setter(parseFloat(inputValue));
    } else {
      setter(parseInt(inputValue));
    }
  };

  return (
    <div className="relative flex w-full h-fit justify-center items-center pb-10">
      <div className="relative flex flex-col pt-2 w-full sm:w-8/12 md:w-6/12 lg:w-4/12 bg-neutral-900 dark:bg-neutral-900/40 rounded-3xl justify-center items-center">
        <button
          className="
            p-1
            border-0 
            hover:opacity-70
            transition
            absolute
            left-4
            top-3
            text-neutral-300
          "
          title="Reset"
          onClick={handleReset}
        >
          <IoMdRefresh size={24} />
        </button>
        <FilterDropMenu 
          selectedOption={selectedOption} 
          setSelectedOption={setSelectedOption} 
          orderBy={orderBy}  
          setOrderBy={setOrderBy}
          filter_by={filter_by}
          filter_by_title={filter_by_title}
          filter_by_speed={filter_by_speed}
          filter_by_acceleration={filter_by_acceleration}
          filter_by_min_price={filter_by_min_price}
          filter_by_max_price={filter_by_max_price}
        />
        <Heading title={filter_title} center dark />
        <div className="flex flex-col w-full gap-2 rounded-xl justify-center items-center">
          <SearchBar inputField={searchField} setInputField={setSearchField} onEnter={handleFilter} />
          <div className="relative flex justify-center items-start text-center w-fit h-fit">
            <input
              className={`
                appearance-none 
                bg-neutral-500/10 
                m-0 
                font-inherit 
                text-current 
                w-6 
                h-6 
                rounded 
                transform ease-in-out duration-200 
                outline
                cursor-pointer
                ${
                  !isExclusive
                    ? "outline-neutral-900/70"
                    : "outline-neutral-300"
                }
              `}
              type="checkbox"
              checked={Boolean(isExclusive)}
              onChange={(e) => setIsExclusive(e.target.checked ? 1 : 0)}
            />
            <IoMdCheckmark
              onClick={() => setIsExclusive(isExclusive ? 0 : 1)}
              className={`
                absolute top-1 left-1 text-white cursor-pointer
                transform ease-in-out duration-200 
                ${isExclusive === 1 ? "scale-100" : "scale-0"}
              `}
            />
            <label className="ml-2 text-sm font-medium text-center text-white">
            {only_exclusives}
            </label>
          </div>
        </div>
        <div className="flex flex-row gap-6 p-5 text-xs md:text-sm lg:text-md xl:text-lg text-black justify-center items-center">
          <div className="flex flex-col bg-neutral-500/10 rounded-xl p-2 gap-3 text-center">
            <div className="text-xl font-semibold text-white">
              {title_dynamics}
            </div>
            <div className="w-full relative">
              <label
                className="
                  absolute 
                  text-xs
                  text-white
                  duration-150 
                  transform 
                  -translate-y-6
                  scale-75
                  top-6
                  select-none
                  origin-[0]
                  left-2  
                "
              >
                {min_speed}
              </label>
              <input
                className={`w-full p-2 pt-3 font-light bg-transparent border-none outline rounded-md
                ${
                  !minSpeed
                    ? "text-white outline-transparent"
                    : parseInt(minSpeed) < 120
                    ? "text-red-400 outline-red-400"
                    : parseInt(minSpeed) <= 220
                    ? "text-yellow-400 outline-yellow-400"
                    : parseInt(minSpeed) <= 300
                    ? "text-cyan-400 outline-cyan-400"
                    : "text-purple-500 outline-purple-500"
                } 
                `}
                type="number"
                inputMode="numeric"
                max={400}
                value={minSpeed}
                placeholder="0"
                onChange={(e) => handleOnChange(e, setMinSpeed, 400, 400)}
              />
            </div>
            <div className="w-full relative">
              <label
                className="
                  absolute 
                  text-xs
                  text-white
                  duration-150 
                  transform 
                  -translate-y-6
                  scale-75
                  top-6 
                  select-none
                  origin-[0]
                  left-2  
                "
              >
                {max_acceleration}
              </label>
              <input
                className={`w-full p-2 pt-3 font-light bg-transparent border-none outline rounded-md
                ${
                  !maxAcceleration
                    ? "text-white outline-transparent"
                    : parseFloat(maxAcceleration) > 12.0
                    ? "text-red-400 outline-red-400"
                    : parseFloat(maxAcceleration) >= 8.0
                    ? "text-yellow-400 outline-yellow-400"
                    : parseFloat(maxAcceleration) >= 6.0
                    ? "text-cyan-400 outline-cyan-400"
                    : "text-purple-500 outline-purple-500"
                } 
                `}
                type="number"
                inputMode="numeric"
                maxLength={4}
                step={0.1}
                value={maxAcceleration}
                placeholder="0.0"
                onChange={(e) => handleOnChange(e, setMaxAcceleration, 60, 60, true)}
              />
            </div>
          </div>
          <div className="flex flex-col bg-neutral-500/10 rounded-xl p-2 gap-3 text-center">
            <div className="text-xl font-semibold text-white">
              {title_price}
            </div>
            <div className="w-full relative">
              <label
                className="
                    absolute 
                    text-xs
                    text-white
                    duration-150 
                    transform 
                    -translate-y-6
                    scale-75
                    top-6 
                    select-none
                    origin-[0]
                    left-2  
                  "
              >
                {min_price}
              </label>
              <input
                className={`w-full p-2 pt-3 font-light text-white bg-transparent border-none outline rounded-md
                    ${!minPrice ? "outline-transparent" : "outline-green-400"}
                  `}
                type="number"
                inputMode="numeric"
                maxLength={10}
                value={minPrice}
                placeholder="0"
                onChange={(e) => handleOnChange(e, setMinPrice, 1000000, 1000000)}
              />
            </div>
            <div className="w-full relative">
              <label
                className="
                    absolute 
                    text-xs
                    text-white
                    duration-150 
                    transform 
                    -translate-y-6
                    scale-75
                    top-6 
                    select-none
                    origin-[0]
                    left-2  
                  "
              >
                {max_price}
              </label>
              <input
                className={`w-full p-2 pt-3 font-light text-white bg-transparent border-none outline rounded-md
                  ${!maxPrice ? "outline-transparent" : "outline-green-400"}
                `}
                type="number"
                inputMode="numeric"
                maxLength={10}
                value={maxPrice}
                placeholder="0"
                onChange={(e) => handleOnChange(e, setMaxPrice, 100000000, 100000000)}
              />
            </div>
          </div>
        </div>
        <button
          className="cursor-pointer text-white w-5/12 outline rounded-2xl p-2 mb-4  "
          onClick={handleFilter}
        >
          {apply}
        </button>
      </div>
    </div>
  );
};

export default Filter;
