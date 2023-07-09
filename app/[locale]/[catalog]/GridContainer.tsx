import CardGrid from "./CardGrid";
import getAllCars from "@/app/actions/getAllCars";


interface GridContainerProps {
  speed: string;
  currency: string;
  speed_units: string;
  time_units: string;
  acceleration?: string;
}

const GridContainer: React.FC<GridContainerProps> = async ({speed, currency, speed_units, time_units, acceleration}) => {
  const cars = await getAllCars();

  return (
    <div className="relative w-full px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 justify-center">
          {cars.map((car: any) => (
            <div className="flex items-center" key={car.id}>
              <CardGrid 
                car={car}
                key={car.id}
                speed={speed} 
                currency={currency} 
                speed_units={speed_units} 
                time_units={time_units}
                acceleration={acceleration}
              />
            </div>
            ))}
        </div>
      </div>
  );
}

export default GridContainer;
