"use client"

import { Dispatch, SetStateAction } from "react";
import { IoMdSearch } from "react-icons/io"

interface SearchBarProps {
  inputField: string;
  setInputField: Dispatch<SetStateAction<string>>;
  onEnter?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  inputField, 
  setInputField,
  onEnter
}) => {

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && onEnter) {
      onEnter();
    }
  };

  return (
    <div className="w-8/12 relative my-2">
      <label className="flex justify-center text-white">
        <IoMdSearch className={`absolute top-4 right-4 text-neutral-500 ${inputField ? "hidden" : ""}`} />
        <input
          className={`w-full p-2 pt-3 font-light text-white bg-transparent border-none outline outline-neutral-500 focus:outline-neutral-600 rounded-md
            `}
          type="text"
          inputMode="search"
          maxLength={30}
          onKeyDown={handleKeyPress}
          value={inputField}
          placeholder={"Search car"}
          onChange={(e) => setInputField(e.target.value)}
        />
      </label>
    </div>
  );
}

export default SearchBar;