const CompanyDetailsSkeleton = () => (
    <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
      <div className="flex justify-between items-start mb-8">
        <div>
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
          <div className="flex items-center gap-4">
            <div className="h-4 bg-gray-200 rounded w-16" />
            <div className="h-4 bg-gray-200 rounded w-24" />
          </div>
        </div>
        <div className="text-right">
          <div className="h-4 bg-gray-200 rounded w-32 mb-2" />
          <div className="h-4 bg-gray-200 rounded w-24" />
        </div>
      </div>
  
      <div className="mb-8">
        <div className="h-6 bg-gray-200 rounded w-1/4 mb-4" />
        <div className="grid grid-cols-2 gap-3">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="h-4 bg-gray-200 rounded w-3/4" />
          ))}
        </div>
      </div>
  
      <div className="flex justify-between items-center mb-8">
        <div>
          <div className="h-4 bg-gray-200 rounded w-16 mb-1" />
          <div className="h-8 bg-gray-200 rounded w-24" />
        </div>
        <div className="h-10 bg-gray-200 rounded w-32" />
      </div>
  
      <div className="mb-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200" />
              <div>
                <div className="h-4 bg-gray-200 rounded w-24 mb-1" />
                <div className="h-4 bg-gray-200 rounded w-32" />
              </div>
            </div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
        </div>
      </div>
  
      <div>
        <div className="h-6 bg-gray-200 rounded w-1/4 mb-4" />
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 bg-gray-200 rounded-lg" />
          <div>
            <div className="h-4 bg-gray-200 rounded w-32 mb-1" />
            <div className="h-4 bg-gray-200 rounded w-48" />
          </div>
        </div>
        <div className="flex gap-4 mb-4">
          <div className="h-8 bg-gray-200 rounded w-32" />
          <div className="h-8 bg-gray-200 rounded w-24" />
        </div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
      </div>
    </div>
  );
  
  export default CompanyDetailsSkeleton;