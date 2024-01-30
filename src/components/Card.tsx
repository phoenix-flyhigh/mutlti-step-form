
import React from "react";
import Image from "next/image";

interface CardProps {
    title: string;
    subscription: string;
    iconUrl: string;
    selected?: boolean;
  }
  
  export const Card: React.FC<CardProps> = ({
    title,
    subscription,
    iconUrl,
    selected = false,
  }: CardProps) => {
    return (
      <div
        className={`w-full gap-4 p-2 items-center justify-start md:min-w-[30%] md:min-h-44 flex md:flex-col md:justify-between md:py-4 md:px-3 md:items-start rounded-lg border-2 ${
          selected ? "bg-gray-100 border-purplish-blue" : "border-cool-gray"
        } hover:border-purplish-blue cursor-pointer`}
      >
        <Image src={iconUrl} alt={`${title}-image`} width={40} height={40} />
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-marine-blue ">{title}</h3>
          <p className="text-lg text-cool-gray">{subscription}</p>
        </div>
      </div>
    );
  };