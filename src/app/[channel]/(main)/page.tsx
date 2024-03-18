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
				className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
			>
				<li data-testid="ProductElement">
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
				</li>

				<li data-testid="ProductElement">
					<div>
						<ProductImageWrapper
							src={
								"https://adventureparts.s3.amazonaws.com/category-backgrounds/Category-E-Bikes.jpg_c756db65.webp"
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
			</ul>
			<h1 className="mt-10 text-xl font-bold">Featured Products</h1>
			<ProductList products={products} />
		</section>
	);
}
