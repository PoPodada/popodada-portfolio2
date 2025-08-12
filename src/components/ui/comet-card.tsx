"use client";
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
	useTransform,
} from "motion/react";
import type React from "react";
import { useEffect, useRef } from "react";
import { useIsWideScreen } from "@/hooks/useIsWideScreeen";
import { cn } from "@/lib/utils";

export const CometCard = ({
	rotateDepth = 17.5,
	translateDepth = 20,
	className,
	children,
}: {
	rotateDepth?: number;
	translateDepth?: number;
	className?: string;
	children: React.ReactNode;
}) => {
	const isWide = useIsWideScreen();
	const ref = useRef<HTMLDivElement>(null);

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const mouseXSpring = useSpring(x);
	const mouseYSpring = useSpring(y);

	const rotateX = useTransform(
		mouseYSpring,
		[-0.5, 0.5],
		[`-${rotateDepth}deg`, `${rotateDepth}deg`],
	);
	const rotateY = useTransform(
		mouseXSpring,
		[-0.5, 0.5],
		[`${rotateDepth}deg`, `-${rotateDepth}deg`],
	);

	const translateX = useTransform(
		mouseXSpring,
		[-0.5, 0.5],
		[`-${translateDepth}px`, `${translateDepth}px`],
	);
	const translateY = useTransform(
		mouseYSpring,
		[-0.5, 0.5],
		[`${translateDepth}px`, `-${translateDepth}px`],
	);

	const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
	const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);

	const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.9) 10%, rgba(255, 255, 255, 0.75) 20%, rgba(255, 255, 255, 0) 80%)`;

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!isWide) return; // Skip if not wide screen
		if (!ref.current) return;

		const rect = ref.current.getBoundingClientRect();

		const width = rect.width;
		const height = rect.height;

		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;

		const xPct = mouseX / width - 0.5;
		const yPct = mouseY / height - 0.5;

		x.set(xPct);
		y.set(yPct);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	useEffect(() => {
		if (isWide) return; // PC時は何もしない

		const handleOrientation = (event: DeviceOrientationEvent) => {
			// gamma: 左右(-90~90), beta: 前後(-180~180)
			const gamma = event.gamma ?? 0; // y軸
			const beta = event.beta ?? 0; // x軸

			// gamma: -45~45, beta: 0~90 くらいを想定して正規化
			const xNorm = Math.max(-45, Math.min(45, gamma)) / 45; // -1 ~ 1
			const yNorm = Math.max(-45, Math.min(45, beta - 45)) / 45; // -1 ~ 1

			x.set(xNorm / 2); // -0.5 ~ 0.5
			y.set(yNorm / 2); // -0.5 ~ 0.5
		};

		window.addEventListener("deviceorientation", handleOrientation, true);
		return () => {
			window.removeEventListener(
				"deviceorientation",
				handleOrientation,
				true,
			);
		};
	}, [isWide, x, y]);
	// --- ここまで追加 ---

	return (
		<div className={cn("perspective-distant transform-3d", className)}>
			<motion.div
				ref={ref}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				style={{
					rotateX,
					rotateY,
					translateX,
					translateY,
					// boxShadow:
					// 	"rgba(0, 0, 0, 0.01) 0px 520px 146px 0px, rgba(0, 0, 0, 0.04) 0px 333px 133px 0px, rgba(0, 0, 0, 0.26) 0px 83px 83px 0px, rgba(0, 0, 0, 0.29) 0px 21px 46px 0px",
				}}
				initial={{ scale: 1, z: 0 }}
				whileHover={{
					scale: 1.05,
					z: 50,
					transition: { duration: 0.2 },
				}}
				className="relative rounded-2xl"
			>
				{children}
				<motion.div
					className="pointer-events-none absolute inset-0 z-50 h-full w-full rounded-[16px] mix-blend-overlay"
					style={{
						background: glareBackground,
						opacity: 0.6,
					}}
					transition={{ duration: 0.2 }}
				/>
			</motion.div>
		</div>
	);
};
