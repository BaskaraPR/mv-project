// components/CategoryCard.tsx

import Image from "next/image";
import Link from "next/link";

interface Category {
  id: string;
  name: string;
  image: string;
  slug: string;
}

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="relative group overflow-hidden rounded-lg"
    >
      <Image
        src={category.image}
        alt={category.name}
        width={300}
        height={200}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h3 className="text-white text-lg font-semibold">{category.name}</h3>
      </div>
    </Link>
  );
};
