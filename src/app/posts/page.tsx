import { Link } from "@/lib/viewTransition/Link";

const Page = () => {
	return (
		<ul className="w-[300px] sm:w-[500px] flex justify-center">
			<li>
				<Link className="z-10" href="/posts/welcome">
					Welcome
				</Link>
			</li>
		</ul>
	);
};

export default Page;
