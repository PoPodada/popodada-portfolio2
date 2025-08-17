import { getAllBlogPosts } from "@/lib/mdx";
import { Link } from "@/lib/viewTransition/Link";

const Page = async () => {
	const posts = await getAllBlogPosts();
	console.log(posts);
	return (
		<ul>
			{posts.map((post) => (
				<li key={post.slug}>
					<Link className="z-10" href={`/posts/${post.slug}`}>
						{post.metadata.title}
					</Link>
				</li>
			))}
			{/* <li>
				<Link className="z-10" href="/posts/welcome">
					Welcome
				</Link>
			</li> */}
		</ul>
	);
};

export default Page;
