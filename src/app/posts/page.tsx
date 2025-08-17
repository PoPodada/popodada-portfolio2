import { getAllBlogPosts } from "@/lib/mdx";
import { Link } from "@/lib/viewTransition/Link";

const Page = async () => {
	const posts = await getAllBlogPosts();
	return (
		<ul>
			{posts.map((post) => (
				<li key={post.slug}>
					<Link className="z-10" href={`/posts/${post.slug}`}>
						{post.metadata.title}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Page;
