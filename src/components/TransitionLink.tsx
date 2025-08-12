"use client";
import Link from "next/link";
import { type FC, useCallback } from "react";
import { useTransitionRouterPush } from "@/hooks/useTransitionRouterPush";

type Props = {
	href: string;
	children: React.ReactNode;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const TransitionLink: FC<Props> = ({ href, children, onClick }) => {
	const { routerPushWithTransition } = useTransitionRouterPush();

	const handleClick = useCallback(
		(e: React.MouseEvent<HTMLAnchorElement>) => {
			e.preventDefault();
			if (onClick) {
				onClick(e);
			}

			const to = e.currentTarget.href;
			routerPushWithTransition(to);
		},
		[routerPushWithTransition, onClick],
	);

	return (
		<Link href={href} onClick={handleClick}>
			{children}
		</Link>
	);
};
