function CompanyCounter() {
  return (
    <div className="font-semibold rounded-md shadow-md">
      <h1 className="text-purple-500 ">500+</h1>
      <h2 className="text-gray-400 ">Companies</h2>
    </div>
  );
}

function WorkCounter() {
  return (
    <div className="font-semibold rounded-md shadow-md">
      <h1 className="text-purple-500 ">300+</h1>
      <h2 className="text-gray-400">Company Work Posted</h2>
    </div>
  );
}

export { CompanyCounter, WorkCounter };
