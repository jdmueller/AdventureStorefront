import Image from "next/image";
import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { ChannelSelect } from "./ChannelSelect";
import { ChannelsListDocument, MenuGetBySlugDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";

export async function Footer({ channel }: { channel: string }) {
	const footerLinks = await executeGraphQL(MenuGetBySlugDocument, {
		variables: { slug: "footer", channel },
		revalidate: 60,
	});
	const channels = process.env.SALEOR_APP_TOKEN
		? await executeGraphQL(ChannelsListDocument, {
				withAuth: false, // disable cookie-based auth for this call
				headers: {
					// and use app token instead
					Authorization: `Bearer ${process.env.SALEOR_APP_TOKEN}`,
				},
			})
		: null;
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-orange-600 bg-orange-400">
			<div className="mx-auto max-w-7xl px-4 lg:px-8">
				<div className="grid grid-cols-4 gap-8 pt-16">
					{footerLinks.menu?.items?.map((item) => {
						return (
							<div key={item.id}>
								<LinkWithChannel aria-label="homepage" href="/">
									<Image
										alt={"Adventure Parts, LLC"}
										height={80}
										width={150}
										src={"/Adventure-Parts-Text.svg"}
									/>
								</LinkWithChannel>
								<h3 className="text-sm font-semibold text-neutral-900">{item.name}</h3>
								<ul className="mt-4 space-y-4 [&>li]:text-neutral-800">
									{item.children?.map((child) => {
										if (child.category) {
											return (
												<li key={child.id} className="text-sm">
													<LinkWithChannel href={`/categories/${child.category.slug}`}>
														{child.category.name}
													</LinkWithChannel>
												</li>
											);
										}
										if (child.collection) {
											return (
												<li key={child.id} className="text-sm">
													<LinkWithChannel href={`/collections/${child.collection.slug}`}>
														{child.collection.name}
													</LinkWithChannel>
												</li>
											);
										}
										if (child.page) {
											return (
												<li key={child.id} className="text-sm">
													<LinkWithChannel href={`/pages/${child.page.slug}`}>
														{child.page.title}
													</LinkWithChannel>
												</li>
											);
										}
										if (child.url) {
											return (
												<li key={child.id} className="text-sm">
													<LinkWithChannel href={child.url}>{child.name}</LinkWithChannel>
												</li>
											);
										}
										return null;
									})}
								</ul>
							</div>
						);
					})}
				</div>

				{channels?.channels && (
					<div className="mb-4 text-neutral-800">
						<label>
							<span className="text-sm">Change currency:</span> <ChannelSelect channels={channels.channels} />
						</label>
					</div>
				)}

				<div className="flex flex-col justify-between border-t border-orange-600 pb-4 pt-10 sm:flex-row">
					<p className="text-sm text-neutral-800">
						Copyright &copy; {currentYear} | Adventure Parts, LLC. All Rights Reserved.
					</p>
					<Image alt="Credit Card Logos" height={40} width={250} src={"/Credit-Card-Logos.png"} />
				</div>

				<div className="mx-auto flex flex-col justify-center pb-10 sm:flex-row">
					<div className={"pr-10 pt-5 align-middle"}>
						<Image alt="Stripe Verified Merchant" height={175} width={175} src={"/stripe-secure-logo.webp"} />
					</div>
					<div className={"pt-1 align-middle"}>
						<Image alt="Trust Pilot Trusted Website" height={125} width={125} src={"/trustpilot-logo.png"} />
					</div>
				</div>
			</div>
		</footer>
	);
}
