import React from 'react';

const CardSkeleton: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-[30px] shadow-sm w-[301px] h-[393px] relative animate-pulse">
      <div className="flex flex-col items-center gap-4 h-full">
        <div className="w-24 h-24 bg-gray-200 rounded-lg" />
        <div className="text-center w-full">
          <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto mt-1" />
        </div>
        <div className="flex flex-wrap justify-center gap-2 w-full">
          <div className="h-6 bg-gray-200 rounded-full w-16" />
          <div className="h-6 bg-gray-200 rounded-full w-20" />
          <div className="h-6 bg-gray-200 rounded-full w-24" />
        </div>
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
          <div>
            <div className="h-4 bg-gray-200 rounded w-16 mb-1" />
            <div className="h-5 bg-gray-200 rounded w-12" />
          </div>
          <div className="h-10 bg-gray-200 rounded w-24" />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;