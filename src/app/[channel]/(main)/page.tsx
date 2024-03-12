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
			<h1>Categories</h1>
			<ul
				role="list"
				data-testid="ProductList"
				className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
			>
				<li data-testid="ProductElement">
					<div>
						<ProductImageWrapper
							src={
								"https://adventureparts.s3.amazonaws.com/category-backgrounds/PHO_BIKE_90_REVO_MY24-KTM-390-Adventure-BLACK-90-Front-_44ede99d.png"
							}
							alt={"test"}
							width={512}
							height={512}
							sizes={"512px"}
						/>
						<div className="mt-2 flex justify-between">
							<div>
								<h2 className="mt-1 text-center text-sm font-semibold text-neutral-900">Motorcycles</h2>
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
							<div>
								<h2 className="mt-1 text-center text-sm font-semibold text-neutral-900">Side x Side UTVs</h2>
							</div>
						</div>
					</div>
				</li>

				<li data-testid="ProductElement">
					<div>
						<ProductImageWrapper
							src={
								"https://adventureparts.s3.amazonaws.com/category-backgrounds/20220428-Sur-RonStormBee45RIGHT.jpg_79079160.webp"
							}
							alt={"test"}
							width={512}
							height={512}
							sizes={"512px"}
						/>
						<div className="mt-2 flex justify-between">
							<div>
								<h2 className="mt-1 text-center text-sm font-semibold text-neutral-900">E-Bikes</h2>
							</div>
						</div>
					</div>
				</li>
			</ul>
			<h1>Featured Products</h1>
			<ProductList products={products} />
		</section>
	);
}
