import Image from "next/image";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  highestBid: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  highestBid,
}) => {
  return (
    <div
      className="w-[341px] h-[400px] p-[20px] bg-white rounded-tl-[30px] 
      shadow-lg gap-[22px] flex flex-col rounded-sm border border-gray-200"
    >
      <Image src={icon} alt={title} width={48} height={48} />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <div>
          <span className="text-sm text-gray-500">Highest bid</span>
          <p className="font-semibold">${highestBid}</p>
        </div>
        <a href="#" className="text-purple-600 hover:underline">
          Request now
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
