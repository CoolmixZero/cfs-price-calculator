"use client";

import { MdOutlineFilterAlt, MdOutlineFilterAltOff } from "react-icons/md";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

interface FilterDropMenuProps {
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
  orderBy: string;
  setOrderBy: Dispatch<SetStateAction<string>>;
  filter_by: string;
  filter_by_title: string;
  filter_by_speed: string;
  filter_by_acceleration: string;
  filter_by_min_price: string;
  filter_by_max_price: string;
}

const FilterDropMenu: React.FC<FilterDropMenuProps> = ({
  selectedOption,
  setSelectedOption,
  orderBy,
  setOrderBy,
  filter_by,
  filter_by_title,
  filter_by_speed,
  filter_by_acceleration,
  filter_by_min_price,
  filter_by_max_price,
}) => {
  const pathname = usePathname();

  const locale = pathname?.slice(0, 3);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
  };

  const handleOrder = (option: any) => {
    setOrderBy(option);
  };

  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!isMenuOpen) return;
    function handleClick(event: any) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [isMenuOpen]);

  return (
    <>
      <button
        className="p-1 border-0 hover:opacity-70 transition absolute right-4 top-3 text-neutral-300"
        onClick={handleToggleMenu} // Add onClick event to toggle the menu
      >
        {isMenuOpen ? (
          <MdOutlineFilterAltOff size={24} />
        ) : (
          <MdOutlineFilterAlt size={24} />
        )}
      </button>
      <div className="z-20">
        {isMenuOpen && ( // Update the condition to check if the menu is open
          <div className="absolute text-sm select-none right-0 top-10 w-40 bg-white rounded-lg shadow-lg">
            <div className="relative text-xs w-full flex justify-between px-4 py-2">
              {filter_by}
              <button
                onClick={() => handleOrder(orderBy === "asc" ? "desc" : "asc")}
                title="Ascending ▲ | Descending ▼ - Возрастание ▲ | Убывание ▼"
                className="underline flex text-md text-end font-bold cursor-pointer"
              >
                {selectedOption === "title" ? filter_by_title
                    : selectedOption === "max_speed" ? filter_by_speed  
                    : selectedOption === "acceleration" ? filter_by_acceleration 
                    : selectedOption === "min_price" ? filter_by_min_price
                    : selectedOption === "max_price" ? filter_by_max_price 
                    : ""
                }
                {orderBy === "asc" ? (
                  <IoMdArrowDropup size={18}/>
                ) : (
                  <IoMdArrowDropdown size={18}/>
                )}
              </button>
            </div>
            <div className="py-1">
              <button
                className={`${
                  selectedOption === "title" ? "bg-gray-200" : ""
                } hover:bg-gray-200 w-full px-4 py-2 text-left`}
                onClick={() => handleOptionSelect("title")}
              >
                {filter_by_title}
              </button>
              <button
                className={`${
                  selectedOption === "max_speed" ? "bg-gray-200" : ""
                } hover:bg-gray-200 w-full px-4 py-2 text-left`}
                onClick={() => handleOptionSelect("max_speed")}
              >
                {filter_by_speed}
              </button>
              <button
                className={`${
                  selectedOption === "acceleration" ? "bg-gray-200" : ""
                } hover:bg-gray-200 w-full px-4 py-2 text-left`}
                onClick={() => handleOptionSelect("acceleration")}
              >
                {filter_by_acceleration}
              </button>
              <button
                className={`${
                  selectedOption === "min_price" ? "bg-gray-200" : ""
                } hover:bg-gray-200 w-full px-4 py-2 text-left`}
                onClick={() => handleOptionSelect("min_price")}
              >
                {filter_by_min_price}
              </button>
              <button
                className={`${
                  selectedOption === "max_price" ? "bg-gray-200" : ""
                } hover:bg-gray-200 w-full px-4 py-2 text-left`}
                onClick={() => handleOptionSelect("max_price")}
              >
                {filter_by_max_price}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FilterDropMenu;
