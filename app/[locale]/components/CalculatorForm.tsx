"use client"

import { useState } from "react";
import Input from "../Input";
import { FieldValues, useForm } from "react-hook-form";
import Heading from "../Heading";
import FormModal from "./FormModal";
import { BiDollar, BiRuble } from "react-icons/bi";
import HeadingMode from "../HeadingMode";

interface CalculatorFormProps {
  title: string,
  subtitle: string;
  client_price_field: string;
  sell: string;
  buy: string;
  mode1: string;
  mode2: string;
  mode3: string;
}

const master_sell = 17;
const master_buy = 20;
const apprentice_sell = 12;
const apprentice_buy = 10;
const amateur_sell = 7;
const amateur_buy = 5;

const CalculatorForm: React.FC<CalculatorFormProps> = ({
  title,
  subtitle,
  client_price_field,
  sell,
  buy,
  mode1,
  mode2,
  mode3
}) => {
  let result_sell = 0; 
  let result_buy = 0;

  const [currentTab, setTab] = useState<number>(1);
  const [client_value, setClientValue] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      price: "",
      client_price: "",
    },
  });

  if (currentTab === 1) {
    result_sell = client_value / 100 * master_sell;
    result_buy = client_value / 100 * master_buy;
    subtitle = subtitle + sell + " - " + master_sell + "%, " + buy + " - " + master_buy + "%";
  } 
  else if (currentTab === 2) {
    result_sell = client_value / 100 * apprentice_sell;
    result_buy = client_value / 100 * apprentice_buy;
    subtitle = subtitle + sell + " - " + apprentice_sell + "%, " + buy + " - " + apprentice_buy + "%";
  }
  else {
    result_sell = client_value / 100 * amateur_sell;
    result_buy = client_value / 100 * amateur_buy;
    subtitle = subtitle + sell + " - " + amateur_sell + "%, " + buy + " - " + amateur_buy + "%";
  }
  

  const buy_price = Math.floor(result_sell + client_value);
  const sell_price = Math.ceil((client_value - result_buy));

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <HeadingMode 
        mode1={mode1} 
        mode2={mode2} 
        mode3={mode3} 
        subtitle={subtitle} 
        currentTab={currentTab}
        setTab={setTab}
        center
      />
      <Input 
        id="client_price"
        label={client_price_field}
        disabled={isLoading}
        value={client_value}
        setValue={setClientValue}
        register={register}
        errors={errors}
        formatPrice
        required
      /> 
    </div>
  );

  const footerContent = (
    <div
      className="
        flex
        flex-col
        md:flex-row
        justify-center
        items-center
        gap-12
      "
    >
      <div
        className="
          px-8
        " 
      >
        <Heading title={sell} />
        <p className="
          flex
          flex-row
          items-center
          justify-center
          text-xl 
          text-center 
          sm:text-white
          md:bg-clip-text 
          md:text-transparent 
          md:bg-gradient-to-r 
          md:from-blue-500 
          md:to-teal-400
        "
      >
        {!buy_price ? 0 : buy_price.toLocaleString("en-US")}
        {title !== "Calculator" ? (
        <BiRuble
          size={20}
          className="
            text-neutral-700
            relative
            
          "
        />
      ) : (
        <BiDollar
          size={20}
          className="
            text-neutral-700
            relative
          "
        />
      )}
      </p>
      </div>
      <div
        className="
          px-8
        " 
      >
        <Heading title={buy} />
        <p className="
          flex
          flex-row
          items-center
          justify-center
          text-xl 
          text-center 
          sm:text-white
          md:bg-clip-text 
          md:text-transparent 
          md:bg-gradient-to-r 
        md:from-blue-500 
          md:to-teal-400
        "
      >
        {!sell_price ? 0 : sell_price.toLocaleString("en-US")}
        {title !== "Calculator" ? (
        <BiRuble
          size={20}
          className="
            text-neutral-700
            relative
            
          "
        />
      ) : (
        <BiDollar
          size={20}
          className="
            text-neutral-700
            relative
          "
        />
      )}
      </p>
      </div>
    </div>
  );
  return (
    <FormModal 
      title={title}
      body={bodyContent}
      footer={footerContent} 
    />
  );
}

export default CalculatorForm;