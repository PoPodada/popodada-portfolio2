import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import githubLogo from "./logos/github-mark-white.svg";
import xLogo from "./logos/x-mark-white.svg";

type SnsType = "github" | "x";

type Props = {
	type: SnsType;
	href: string;
};

const SNS_CONFIG = {
	github: {
		image: githubLogo,
		alt: "github",
		width: 20,
		height: 20,
	},
	x: {
		image: xLogo,
		alt: "x",
		width: 20,
		height: 20,
	},
};

export const LinkButton = ({ type, href }: Props) => {
	const config = SNS_CONFIG[type];
	return (
		<Button
			className="ml-1 bg-[#171717]"
			variant="outline"
			size="icon"
			asChild
		>
			<Link href={href}>
				<Image
					src={config.image}
					alt={config.alt}
					width={config.width}
					height={config.height}
				/>
			</Link>
		</Button>
	);
};
