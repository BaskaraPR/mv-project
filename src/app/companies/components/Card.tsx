import Image from "next/image";
import React from "react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
  highestBid: number;
  borderStyle?: "left" | "full" | "right";
  customStyle?: string; // For specific custom styles like the width/height/border-radius
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  highestBid,
  borderStyle,
  customStyle,
}) => {
  const getBorderStyle = () => {
    switch (borderStyle) {
      case "left":
        return "border-l border-t border-b";
      case "full":
        return "border";
      case "right":
        return "border-r border-t border-b";
      default:
        return "";
    }
  };

  return (
    <div className={`bg-white p-6 ${getBorderStyle()} border-gray-200 ${customStyle}`}>
      <Image src={icon} alt={title} width={48} height={48} className="mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-sm text-gray-500">Highest bid</span>
          <p className="font-semibold">${highestBid}</p>
        </div>
        <a href="#" className="text-purple-600 hover:underline">Request now</a>
      </div>
    </div>
  );
};

export default Card;
