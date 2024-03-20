"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { LinkWithChannel } from "../atoms/LinkWithChannel";

const companyName = "ADVENTURE PARTS LLC";

export const LogoMobile = () => {
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
				<Image alt={companyName} height={88} width={88} src={"/Adventure-Parts.svg"} />
			</LinkWithChannel>
		</div>
	);
};
