
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
        className={`min-w-[30%] min-h-44 flex flex-col justify-between py-4 px-3 items-start rounded-lg border-2 ${
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