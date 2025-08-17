import fs from "node:fs";
import matter from "gray-matter";

export async function getAllBlogPosts() {
	const files = await fs.promises.readdir("src/markdown");
	return await Promise.all(
		files.map(async (file) => {
			const raw = await fs.promises.readFile(
				`src/markdown/${file}`,
				"utf-8",
			);
			const { data, content } = matter(raw);
			return {
				metadata: data,
				slug: file.replace(/\.mdx$/, ""),
				rawContent: content,
			};
		}),
	);
}
