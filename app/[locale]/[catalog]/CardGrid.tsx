"use client"

import { Card, Grid } from "@nextui-org/react";
import { Cars } from "@prisma/client";
;

interface CardGridProps {
  car: Cars;
  speed: string;
  currency: string;
  speed_units: string;
  time_units: string;
  acceleration?: string;
}

const CardGrid: React.FC<CardGridProps> = ({car, speed, currency, speed_units, time_units, acceleration}) => {

  return (
    <Card isPressable>
      <Card.Header className="absolute z-10 bg-neutral-100/30 dark:bg-neutral-900/30">
        <div className="flex flex-row justify-between text-white w-full items-center">
          <div className="items-center px-2">
            <div className="text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
            {car.title}
            </div>
          </div>
          <div className="flex flex-row justify-between text-md bg-neutral-100/40 dark:bg-neutral-900/40 rounded-full px-1 text-green-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            <div className="">
              {car.min_price?.toLocaleString("en-US")}
            </div>  
            {" - "}
            <div className="">
              {car.max_price?.toLocaleString("en-US")}{currency}
            </div>
          </div>
        </div>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={(car.image ? car.image : "https://res.cloudinary.com/dpjksfksr/image/upload/v1688835764/no-image_nczrnr.png")}
          objectFit="cover"
          width="100%"
          height={300}
          alt={car.title}
        />
      </Card.Body>
      <Card.Footer className="bg-neutral-100 dark:bg-neutral-900">
        <div className="flex flex-row px-2 justify-between items-center w-full text-lg text-black dark:text-white">
          <div>
            {speed}
            <p className={`
              text-start 
              ${!car.max_speed ? "text-neutral-500" : 
                car.max_speed < 120 ? "text-red-500" : 
                car.max_speed <= 220 ? "text-yellow-500" : 
                car.max_speed <= 300 ? "text-cyan-500" : 
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
              ${!car.acceleration ? "text-neutral-500" : 
                car.acceleration > 12.0  ? "text-red-500" : 
                car.acceleration >= 8.0 ? "text-yellow-500" : 
                car.acceleration >= 6.0 ? "text-cyan-500" : 
                "text-purple-500" } 
              font-bold 
              text-xl
            `}
          >
            {(car.acceleration ? car.acceleration : "?")}{time_units}
          </p>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default CardGrid;