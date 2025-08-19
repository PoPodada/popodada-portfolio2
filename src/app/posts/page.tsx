import { getAllBlogPosts } from "@/lib/mdx";
import { Link } from "@/lib/viewTransition/Link";

const Page = async () => {
	const posts = await getAllBlogPosts();
	return (
		<ul>
			{posts.map((post) => (
				<li key={post.slug} className="flex mb-1">
					<p className=" w-[100px] whitespace-nowrap">
						{post.metadata.date} :
					</p>
					<Link
						className="z-10 px-2 underline-offset-4 hover:underline hover:bg-white/10 transition-colors wrap-break-word"
						href={`/posts/${post.slug}`}
					>
						{post.metadata.title}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Page;
