const Page = async ({ params }: { params: Promise<{ postName: string }> }) => {
	const { postName } = await params;
	const { default: Post } = await import(`@/markdown/${postName}.mdx`);

	return <Post />;
};

export const generateStaticParams = () => {
	return [{ postName: "welcome" }];
};

export const dynamicParams = false;

export default Page;
