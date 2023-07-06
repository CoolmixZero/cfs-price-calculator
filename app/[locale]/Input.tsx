"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar, BiRuble } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  required?: boolean;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  onEnter?: () => void;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  value,
  setValue,
  placeholder = " ",
  register,
  required,
  errors,
  onEnter,
}) => {

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && onEnter) {
      onEnter();
    }
  };

  return (
    <div className="w-full relative">
      {formatPrice && label !== "Price that the npc called" ? (
        <BiRuble
          size={20}
          className="
            text-neutral-700
            absolute
            top-6
            left-2
          "
        />
      ) : (
        <BiDollar
          size={20}
          className="
            text-neutral-700
            absolute
            top-6
            left-2
          "
        />
      )}
      <input
        id={id}
        disabled={disabled}
        pattern="\d*" 
        maxLength={17}
        {...register(id, { required })}
        placeholder={placeholder}
        onChange={(e) =>  setValue(Number(e.target.value))}
        type={type}
        onKeyDown={handleKeyPress}
        className={`
          peer
          w-full
          p-4
          pt-6 
          font-light 
          text-black
          bg-white 
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${formatPrice ? "pl-9" : "pl-4"}
          ${errors[id] ? "border-blue-400" : "border-neutral-300"}
          ${errors[id] ? "focus:border-blue-400" : "focus:border-black"}
        `}
      />
      <label
        className={`
          absolute 
          text-md
          duration-150 
          transform 
          -translate-y-4
          scale-75
          top-5 
          select-none
          origin-[0] 
          ${formatPrice ? "left-9" : "left-4"}
          
          ${errors[id] ? "text-blue-400" : "text-zinc-400"}
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;