import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";
import { ProductListByCollectionDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { ProductList } from "@/ui/components/ProductList";
import { ProductImageWrapper } from "@/ui/atoms/ProductImageWrapper";

export const metadata = {
	title: "Adventure Parts | Performance Parts For Motorcycles And E-Bikes",
	description:
		"Adventure Parts features high end performance parts for Adventure Motorcycles and Electric Bikes.",
};

export default async function Page({ params }: { params: { channel: string } }) {
	const data = await executeGraphQL(ProductListByCollectionDocument, {
		variables: {
			slug: "featured-products",
			channel: params.channel,
		},
		revalidate: 60,
	});

	if (!data.collection?.products) throw Error("No products found");

	const products = data.collection?.products.edges.map(({ node: product }) => product);

	return (
		<section className="mx-auto max-w-7xl p-8 pb-16">
			<h1 className="text-xl font-bold">Categories</h1>
			<ul
				role="list"
				data-testid="ProductList"
				className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			>
				<li data-testid="ProductElement">
					<LinkWithChannel href={"/categories/adventure-motorcycles"}>
						<div>
							<ProductImageWrapper
								src={
									"https://adventureparts.s3.amazonaws.com/category-backgrounds/Category-Adventure-Motorcycles_ef8b144d.png"
								}
								alt={"test"}
								width={512}
								height={512}
								sizes={"512px"}
							/>
							<div className="mt-2 flex justify-between">
								<div className="mx-auto">
									<h2 className="text-md mt-1 font-semibold text-neutral-900">Adventure Motorcycles</h2>
								</div>
							</div>
						</div>
					</LinkWithChannel>
				</li>

				<li data-testid="ProductElement">
					<div>
						<ProductImageWrapper
							src={
								"https://adventureparts.s3.amazonaws.com/category-backgrounds/Category-Harley-Davidson-Sportster-S_923b6c29.webp"
							}
							alt={"test"}
							width={512}
							height={512}
							sizes={"512px"}
						/>
						<div className="mt-2 flex justify-between">
							<div className="mx-auto">
								<h2 className="text-md mt-1 font-semibold text-neutral-900">Street Motorcycles</h2>
							</div>
						</div>
					</div>
				</li>

				<li data-testid="ProductElement">
					<div>
						<ProductImageWrapper
							src={
								"https://adventureparts.s3.amazonaws.com/category-backgrounds/Category-Street-KTM-RC-390_238ab132.png"
							}
							alt={"test"}
							width={512}
							height={512}
							sizes={"512px"}
						/>
						<div className="mt-2 flex justify-between">
							<div className="mx-auto">
								<h2 className="text-md mt-1 font-semibold text-neutral-900">Sport Motorcycles</h2>
							</div>
						</div>
					</div>
				</li>

				<li data-testid="ProductElement">
					<div>
						<ProductImageWrapper
							src={
								"https://adventureparts.s3.amazonaws.com/category-backgrounds/Subcategory-Yamaha-YZ450F_e772a58d.webp"
							}
							alt={"test"}
							width={512}
							height={512}
							sizes={"512px"}
						/>
						<div className="mt-2 flex justify-between text-center">
							<div className="mx-auto">
								<h2 className="text-md mt-1 font-semibold text-neutral-900">Motocross Motorcycles</h2>
							</div>
						</div>
					</div>
				</li>

				<li data-testid="ProductElement">
					<div>
						<ProductImageWrapper
							src={
								"https://adventureparts.s3.amazonaws.com/category-backgrounds/orv-ssv-my24-maverickr-xrs-sas-1000t-carbon-black-0007a_c5916037.avif"
							}
							alt={"test"}
							width={512}
							height={512}
							sizes={"512px"}
						/>
						<div className="mt-2 flex justify-between">
							<div className="mx-auto">
								<h2 className="text-md mt-1 font-semibold text-neutral-900">Side x Side UTVs</h2>
							</div>
						</div>
					</div>
				</li>

				<li data-testid="ProductElement">
					<div>
						<ProductImageWrapper
							src={
								"https://adventureparts.s3.amazonaws.com/category-backgrounds/Category-Surron-SuperBee.jpg_451c3537.webp"
							}
							alt={"test"}
							width={512}
							height={512}
							sizes={"512px"}
						/>
						<div className="mt-2 flex justify-between">
							<div className="mx-auto">
								<h2 className="text-md mt-1 font-semibold text-neutral-900">Electric Vehicles</h2>
							</div>
						</div>
					</div>
				</li>

				<li data-testid="ProductElement">
					<div>
						<ProductImageWrapper
							src={
								"https://adventureparts.s3.amazonaws.com/category-backgrounds/Category-Bicycles-Specialized-S-Works-Epic_2d163ed6.webp"
							}
							alt={"test"}
							width={512}
							height={512}
							sizes={"512px"}
						/>
						<div className="mt-2 flex justify-between">
							<div className="mx-auto">
								<h2 className="text-md mt-1 font-semibold text-neutral-900">Bicycles</h2>
							</div>
						</div>
					</div>
				</li>

				<li data-testid="ProductElement">
					<div>
						<ProductImageWrapper
							src={
								"https://adventureparts.s3.amazonaws.com/category-backgrounds/Category-Apparel-Alpinestars-Jacket_3bed6ff3.png"
							}
							alt={"test"}
							width={512}
							height={512}
							sizes={"512px"}
						/>
						<div className="mt-2 flex justify-between">
							<div className="mx-auto">
								<h2 className="text-md mt-1 font-semibold text-neutral-900">Motorcycle Apparel</h2>
							</div>
						</div>
					</div>
				</li>
			</ul>

			<h1 className="mt-10 text-xl font-bold">Featured Brands</h1>
			<ul
				role="list"
				data-testid="ProductList"
				className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
			>
				<li data-testid="ProductElement">
					<div>
						<ProductImageWrapper
							src={"/Logo-Vortex-Racing.png"}
							alt={"Vortex Racing Logo"}
							width={250}
							height={250}
							sizes={"256px"}
						/>
					</div>
				</li>
				<li data-testid="ProductElement">
					<div>
						<ProductImageWrapper
							src={"/Logo-Galfer-USA.png"}
							alt={"Galfer Racing USA Logo"}
							width={256}
							height={256}
							sizes={"256px"}
						/>
					</div>
				</li>
				<li data-testid="ProductElement">
					<div>
						<ProductImageWrapper
							src={"/Logo-Puig-Hi-Tech-Parts.png"}
							alt={"Puig Hi Tech Parts Logo"}
							width={250}
							height={250}
							sizes={"256px"}
						/>
					</div>
				</li>
				<li data-testid="ProductElement">
					<div>
						<ProductImageWrapper
							src={"/Logo-DNA-Filters.png"}
							alt={"DNA High Flow Air Filters Logo"}
							width={250}
							height={250}
							sizes={"256px"}
						/>
					</div>
				</li>
				<li data-testid="ProductElement">
					<div>
						<ProductImageWrapper
							src={"/Logo-Hotbodies-Racing.png"}
							alt={"Hotbodies Racing Logo"}
							width={250}
							height={250}
							sizes={"256px"}
						/>
					</div>
				</li>
			</ul>

			<h1 className="mt-10 text-xl font-bold">Featured Products</h1>
			<ProductList products={products} />
		</section>
	);
}
