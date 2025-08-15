export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div
			className="mx-4 mb-4 p-2 mt-[200px] w-full bg-input/30 border-input z-10 shadow-xs dark:bg-background dark:border flex justify-center"
			style={{
				height: "calc(100vh - 50px)",
				width: "calc(100vw - 32px)",
			}}
		>
			<div className="w-[300px] sm:w-[500px]">{children}</div>
		</div>
	);
}
