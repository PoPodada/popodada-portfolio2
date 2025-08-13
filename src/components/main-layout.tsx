import { Boxes } from "@/components/ui/background-boxes";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/viewTransition/Link";

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<div className="relative font-sans  justify-items-center min-h-screen">
			<div className="h-screen relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
				<Boxes />
				<div className="absolute top-20 z-20">
					<Link href="/">
						{/* className="text-white" */}
						<Button
							className="mr-2 ml-2 w-16 bg-[#171717]"
							variant="outline"
						>
							top
						</Button>
					</Link>

					<Link href="/posts">
						<Button
							className="mr-2 ml-2 w-16 bg-[#171717]"
							variant="outline"
						>
							posts
						</Button>
					</Link>

					{/* <Button
						className="mr-2 ml-2 w-16 bg-[#171717]"
						variant="outline"
					>
						<Link className="text-white" href="/works">
							works
						</Link>
					</Button> */}
				</div>
				{children}
			</div>
		</div>
	);
};

export default MainLayout;
