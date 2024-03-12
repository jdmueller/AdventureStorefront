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
			<h2 className="sr-only">Product list</h2>
			<h2>Test</h2>

			<ul
				role="list"
				data-testid="ProductList"
				className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-4"
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
								<h3 className="mt-1 text-sm font-semibold text-neutral-900">product name</h3>
							</div>
						</div>
					</div>
				</li>
			</ul>

			<ProductList products={products} />
		</section>
	);
}
