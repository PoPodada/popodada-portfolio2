import { useEffect, useState } from "react";

export function useIsWideScreen(breakpoint = 640) {
	const [isWide, setIsWide] = useState(true);
	useEffect(() => {
		const check = () => setIsWide(window.innerWidth >= breakpoint);
		check();
		window.addEventListener("resize", check);
		return () => window.removeEventListener("resize", check);
	}, [breakpoint]);
	return isWide;
}
