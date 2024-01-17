"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { LinkWithChannel } from "../atoms/LinkWithChannel";

const companyName = "ADVENTURE PARTS";

export const Logo = () => {
	const pathname = usePathname();

	if (pathname === "/") {
		return (
			<h1 className="flex items-center font-bold" aria-label="homepage">
				{companyName}
			</h1>
		);
	}
	return (
		<div className="flex items-center font-bold">
			<LinkWithChannel aria-label="homepage" href="/">
				<Image alt={companyName} height={78} width={78} src={"/Adventure-Parts.svg"} />
			</LinkWithChannel>
		</div>
	);
};
