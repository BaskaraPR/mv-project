import CategoriesList from "./parts/Categories";
import Companies from "./parts/Companies";
import Hero from "./parts/Hero";
import Services from "./parts/Services";
export default function Home({
	searchParams,
}: {
	searchParams: { keyword: string };
}) {
	return (
		<div className="mx-auto">
			<div className="mx-auto max-w-[1169px] px-5">
				<Hero />
				<Companies search={searchParams.keyword} />
				<Services />
				<CategoriesList />
			</div>
		</div>
	);
}
