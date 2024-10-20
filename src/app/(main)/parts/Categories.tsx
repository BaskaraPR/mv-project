import Image from "next/image";
import Link from "next/link";

import logo from "@/../public/logo/image.png";

interface Category {
  id: string;
  name: string;
  image: string;
  slug: string;
}

interface CategoryCardProps {
  category: Category;
}

function CategoryCard({ category }: CategoryCardProps) {
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
}

// interface CategoryGridProps {
//   categories: Category[];
// }

// export default function Category({ categories }: CategoryGridProps) {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold text-center mb-8">
//         Choose Different <span className="text-purple-600">Category</span>
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {categories.map((category) => (
//           <CategoryCard key={category.id} category={category} />
//         ))}
//       </div>
//     </div>
//   );
// }

// import React from 'react';

const categories = [
  {
    name: "Graphics Design",
    image: "@/../public/image.png", // Add your image paths here
  },
  {
    name: "Cartoon Animation",
    image: "@/../public/image.png",
  },
  {
    name: "Illustration",
    image: "@/../public/image.png",
  },
  {
    name: "Flyers & Vouchers",
    image: "@/../public/image.png",
  },
  {
    name: "Logo Design",
    image: "@/../public/image.png",
  },
  {
    name: "Social Graphics",
    image: "@/../public/image.png",
  },
  {
    name: "Article Writing",
    image: "@/../public/image.png",
  },
  {
    name: "Video Editing",
    image: "@/../public/image.png",
  },
];

const CategoryGrid = () => {
  return (
    <div className="px-6 py-10">
      <h2 className="text-center text-3xl font-semibold">
        Choose Different <span className="text-purple-500">Category</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {categories.map((category, index) => (
          <div key={index} className="relative group">
            <Image
              src={logo}
              alt={category.name}
              width={40}
              height={40}
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold z-10">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
