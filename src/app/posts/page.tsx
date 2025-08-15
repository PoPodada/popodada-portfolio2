import { Link } from "@/lib/viewTransition/Link";

const Page = () => {
	return (
		<ul>
			<li>
				<Link className="z-10" href="/posts/welcome">
					Welcome
				</Link>
			</li>
		</ul>
	);
};

export default Page;
