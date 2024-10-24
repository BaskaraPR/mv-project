// components/CategoryGrid.tsx

import { categories } from "@/lib/data"; // Import categories from lib/data
import { CategoryCard } from "../../(main)/components/CategoryCard"; // Import the CategoryCard component

const CategoryGrid = () => {
  return (
    <div className="px-6 py-10">
      <h2 className="text-center text-3xl font-semibold">
        Choose Different <span className="text-purple-500">Category</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
