import { readFile } from "node:fs/promises";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { getAllBlogPosts } from "@/lib/mdx";

const Page = async ({ params }: { params: Promise<{ postName: string }> }) => {
	const { postName } = await params;
	// const { default: Post } = await import(`@/markdown/${postName}.mdx`);
	// const mdxSource = await readFile(filePath, "utf-8");
	const mdxSource = await readFile(`src/markdown/${postName}.mdx`);

	return (
		<div>
			<MDXRemote
				source={mdxSource}
				components={{
					// カスタムコンポーネントをここで定義
					h1: (props) => (
						<h1 className="text-4xl font-bold mb-4" {...props} />
					),
					p: (props) => (
						<p className="mb-4 leading-relaxed" {...props} />
					),
				}}
				options={{
					parseFrontmatter: true,
				}}
			/>
		</div>
	);
};

export const generateStaticParams = async () => {
	const posts = await getAllBlogPosts();
	return posts.map((post) => {
		return { postName: post.slug };
	});
};

export const dynamicParams = false;

export default Page;
