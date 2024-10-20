import { Button } from "../components/button";
import RecentCard from "../components/RecentCard";

export default function Recent() {
  return (
    <div>
      <h3 className="text-left text-gray-500">The Companies Work!</h3>
      <h2 className="text-left text-3xl font-semibold">
        Recently Posted <span className="text-purple-500">Works</span>
      </h2>
      <RecentCard />
      <Button variant="primary">Find More</Button>
    </div>
  );
}
