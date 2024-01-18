import { ProductElement } from "./ProductElement";
import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductList = ({ products }: { products: readonly ProductListItemFragment[] }) => {
	return (
		<ul role="list" data-testid="ProductList" className="lg:grid-cols4 grid grid-cols-1 gap-8 sm:grid-cols-2">
			{products.map((product, index) => (
				<ProductElement
					key={product.id}
					product={product}
					priority={index < 2}
					loading={index < 3 ? "eager" : "lazy"}
				/>
			))}
		</ul>
	);
};
