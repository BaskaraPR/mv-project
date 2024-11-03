import Newsletter from "../(main)/parts/NewsSub";
import HistoryCard from "./components/historyCard";
import { nextGetServerSession } from "@/lib/next-auth";

export default async function Home() {
  const session = await nextGetServerSession();
  const currentUserId = session?.user?.id;
  return (
    
    <div className="mx-auto">
      <div className="mx-auto max-w-[1169px] px-5">
        <HistoryCard id={currentUserId||""} />
        <Newsletter />
      </div>
    </div>
  );
}
