/* eslint-disable react/display-name */
"use client"

import React from "react";
import { Card, StyledCardHeader, StyledCardBody, StyledCardFooter} from "@nextui-org/react";
import { Cars } from "@prisma/client";

interface CardGridProps {
  car: Cars;
  speed: string;
  currency: string;
  speed_units: string;
  time_units: string;
  acceleration?: string;
  auction?: string;
}

const CardGrid: React.FC<CardGridProps> = React.memo(({ car, speed, currency, speed_units, time_units, acceleration , auction}) => {

  return (
    <Card isPressable>
      <StyledCardHeader className="absolute z-10 bg-gradient-to-b from-neutral-900/80 to-transparent">
        <div className="flex flex-row justify-between text-white w-full items-center">
          <div className="items-center px-2">
            <div className="text-xs italic uppercase font-semibold text-white/80 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              {car.car_title}
            </div>
            <div className="text-lg font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
            {car.title}
            </div>
          </div>
          <div>
            {car.is_exclusive && (
              <div className="
                text-xs text-center italic font-extrabold uppercase 
                text-transparent bg-gradient-to-l bg-clip-text from-yellow-400 to-orange-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
                "
              >
                {auction}
              </div>
            )}  
            <div className="flex flex-row justify-between gap-1 text-sm bg-neutral-900/40 rounded-full px-2 text-green-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              <div className="">
                {car.min_price?.toLocaleString("en-US")}
              </div>  
              {" - "}
              <div className="">
                {car.max_price?.toLocaleString("en-US")}{currency}
              </div>
            </div>
          </div>
        </div>
      </StyledCardHeader>
      <StyledCardBody css={{ p: 0 }}>
        <Card.Image
          src={(car.image ? car.image : "https://res.cloudinary.com/dpjksfksr/image/upload/v1688835764/no-image_nczrnr.png")}
          objectFit="cover"
          width="100%"
          height={300}
          alt={car.title}
        />
      </StyledCardBody>
      <StyledCardFooter className="absolute bottom-0 bg-gradient-to-t from-neutral-900 dark:to-transparent">
        <div className="flex flex-row px-2 justify-between items-center w-full text-lg text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
          <div>
            {speed}
            <p className={`
              text-start 
              ${!car.max_speed ? "text-neutral-400" : 
                car.max_speed < 120 ? "text-red-400" : 
                car.max_speed <= 220 ? "text-yellow-400" : 
                car.max_speed <= 300 ? "text-cyan-400" : 
                "text-purple-500" } 
              font-bold 
              text-xl
            `}
          >
            {(car.max_speed ? car.max_speed : "?")}{speed_units}
          </p>
          </div>
          <div>
            0-100{speed_units}:
            <p className={`
              text-end 
              ${!car.acceleration ? "text-neutral-400" : 
                car.acceleration > 12.0  ? "text-red-400" : 
                car.acceleration >= 8.0 ? "text-yellow-400" : 
                car.acceleration >= 6.0 ? "text-cyan-400" : 
                "text-purple-500" } 
              font-bold 
              text-xl
            `}
          >
            {(car.acceleration ? car.acceleration : "?")}{time_units}
          </p>
          </div>
        </div>
      </StyledCardFooter>
    </Card>
  );
});

export default CardGrid;