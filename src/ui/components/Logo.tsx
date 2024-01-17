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
				<Image
					alt="pySolution Python Logo"
					height={20}
					width={20}
					icon-spin-reverse
					src={"/Adventure-Parts.svg"}
				/>
			</LinkWithChannel>
		</div>
	);
};
