import { notFound } from "next/navigation";
import { type ResolvingMetadata, type Metadata } from "next";
import { ProductListByCategoryDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
/* import { ProductList } from "@/ui/components/ProductList"; */
import { ProductImageWrapper } from "@/ui/atoms/ProductImageWrapper";

export const generateMetadata = async (
	{ params }: { params: { slug: string; channel: string } },
	parent: ResolvingMetadata,
): Promise<Metadata> => {
	const { category } = await executeGraphQL(ProductListByCategoryDocument, {
		variables: { slug: params.slug, channel: params.channel },
		revalidate: 60,
	});

	return {
		title: `${category?.name || "Categroy"} | ${category?.seoTitle || (await parent).title?.absolute}`,
		description: category?.seoDescription || category?.description || category?.seoTitle || category?.name,
	};
};

export default async function Page({ params }: { params: { slug: string; channel: string } }) {
	const { category } = await executeGraphQL(ProductListByCategoryDocument, {
		variables: { slug: params.slug, channel: params.channel },
		revalidate: 60,
	});

	if (!category || !category.products) {
		notFound();
	}

	const { name } = category;

	console.log(params.slug);

	if (params.slug === "adventure-motorcycles") {
		return (
			<div className="mx-auto max-w-7xl p-8 pb-16">
				<h1 className="text-xl font-semibold">{name}</h1>
				<ul
					role="list"
					data-testid="ProductList"
					className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-4"
				>
					<li data-testid="ProductElement">
						<div>
							<ProductImageWrapper
								src={
									"https://adventureparts.s3.amazonaws.com/category-backgrounds/Subcategory-BMW-R-1250-GS_763667dd.png"
								}
								alt={"test"}
								width={512}
								height={512}
								sizes={"512px"}
							/>
							<div className="mt-2 flex justify-between">
								<div className="mx-auto">
									<h2 className="text-md mt-1 font-semibold text-neutral-900">BMW R 1250 GS</h2>
								</div>
							</div>
						</div>
					</li>

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
									<h2 className="text-md mt-1 font-semibold text-neutral-900">KTM 250/390 Adventure</h2>
								</div>
							</div>
						</div>
					</li>

					<li data-testid="ProductElement">
						<div>
							<ProductImageWrapper
								src={
									"https://adventureparts.s3.amazonaws.com/category-backgrounds/Subcategory-KTM-890-Advneture_ee01eedd.png"
								}
								alt={"test"}
								width={512}
								height={512}
								sizes={"512px"}
							/>
							<div className="mt-2 flex justify-between">
								<div className="mx-auto">
									<h2 className="text-md mt-1 font-semibold text-neutral-900">KTM 790/890 Adventure</h2>
								</div>
							</div>
						</div>
					</li>

					<li data-testid="ProductElement">
						<div>
							<ProductImageWrapper
								src={
									"https://adventureparts.s3.amazonaws.com/category-backgrounds/Subcategory-Royal-Enfield-Himalayan2_ca6898a2.png"
								}
								alt={"test"}
								width={512}
								height={512}
								sizes={"512px"}
							/>
							<div className="mt-2 flex justify-between">
								<div className="mx-auto">
									<h2 className="text-md mt-1 font-semibold text-neutral-900">Royal Enfield Himalayan</h2>
								</div>
							</div>
						</div>
					</li>

					<li data-testid="ProductElement">
						<div>
							<ProductImageWrapper
								src={
									"https://adventureparts.s3.amazonaws.com/category-backgrounds/Subcategory-Royal-Enfield-Scram-411.png_3c35a040.webp"
								}
								alt={"test"}
								width={512}
								height={512}
								sizes={"512px"}
							/>
							<div className="mt-2 flex justify-between text-center">
								<div className="mx-auto">
									<h2 className="text-md mt-1 font-semibold text-neutral-900">Royal Enfield Scram</h2>
								</div>
							</div>
						</div>
					</li>

					<li data-testid="ProductElement">
						<div>
							<ProductImageWrapper
								src={
									"https://adventureparts.s3.amazonaws.com/category-backgrounds/Subcategory-Honda-Africa-Twin_00ac56bd.png"
								}
								alt={"test"}
								width={512}
								height={512}
								sizes={"512px"}
							/>
							<div className="mt-2 flex justify-between text-center">
								<div className="mx-auto">
									<h2 className="text-md mt-1 font-semibold text-neutral-900">Honda Africa Twin</h2>
								</div>
							</div>
						</div>
					</li>

					<li data-testid="ProductElement">
						<div>
							<ProductImageWrapper
								src={
									"https://adventureparts.s3.amazonaws.com/category-backgrounds/Subcategory-Kawasaki-KLR-650_17f3a2ee.png"
								}
								alt={"test"}
								width={512}
								height={512}
								sizes={"512px"}
							/>
							<div className="mt-2 flex justify-between text-center">
								<div className="mx-auto">
									<h2 className="text-md mt-1 font-semibold text-neutral-900">Kawasaki KLR 650</h2>
								</div>
							</div>
						</div>
					</li>

					<li data-testid="ProductElement">
						<div>
							<ProductImageWrapper
								src={
									"https://adventureparts.s3.amazonaws.com/category-backgrounds/Subcategory-Loncin-Rally-300_c309d1b6.webp"
								}
								alt={"test"}
								width={512}
								height={512}
								sizes={"512px"}
							/>
							<div className="mt-2 flex justify-between text-center">
								<div className="mx-auto">
									<h2 className="text-md mt-1 font-semibold text-neutral-900">Loncin Rally 250/300</h2>
								</div>
							</div>
						</div>
					</li>
				</ul>
				{/* <h1 className="pb-8 pt-12 text-xl font-semibold">{name}</h1>
				<ProductList products={products.edges.map((e) => e.node)} /> */}
			</div>
		);
	}

	if (params.slug === "motocross-motorcycles") {
		return (
			<div className="mx-auto max-w-7xl p-8 pb-16">
				<h1 className="text-xl font-semibold">{name}</h1>
				<ul
					role="list"
					data-testid="ProductList"
					className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-4"
				>
					<li data-testid="ProductElement">
						<div>
							<ProductImageWrapper
								src={
									"https://adventureparts.s3.amazonaws.com/category-backgrounds/Subcategory-KTM-450-SX-F_3977d361.png"
								}
								alt={"test"}
								width={512}
								height={512}
								sizes={"512px"}
							/>
							<div className="mt-2 flex justify-between">
								<div className="mx-auto">
									<h2 className="text-md mt-1 font-semibold text-neutral-900">KTM 450 SX-F</h2>
								</div>
							</div>
						</div>
					</li>

					<li data-testid="ProductElement">
						<div>
							<ProductImageWrapper
								src={
									"https://adventureparts.s3.amazonaws.com/category-backgrounds/Subcategory-KTM-300-SX_69824e76.png"
								}
								alt={"test"}
								width={512}
								height={512}
								sizes={"512px"}
							/>
							<div className="mt-2 flex justify-between">
								<div className="mx-auto">
									<h2 className="text-md mt-1 font-semibold text-neutral-900">KTM 300 SX</h2>
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
							<div className="mt-2 flex justify-between">
								<div className="mx-auto">
									<h2 className="text-md mt-1 font-semibold text-neutral-900">Yamaha YZ450F</h2>
								</div>
							</div>
						</div>
					</li>

					<li data-testid="ProductElement">
						<div>
							<ProductImageWrapper
								src={
									"https://adventureparts.s3.amazonaws.com/category-backgrounds/Subcategory-Yamaha-YZ125_176ddcbb.webp"
								}
								alt={"test"}
								width={512}
								height={512}
								sizes={"512px"}
							/>
							<div className="mt-2 flex justify-between">
								<div className="mx-auto">
									<h2 className="text-md mt-1 font-semibold text-neutral-900">Yamaha YZ125</h2>
								</div>
							</div>
						</div>
					</li>

					<li data-testid="ProductElement">
						<div>
							<ProductImageWrapper
								src={
									"https://adventureparts.s3.amazonaws.com/category-backgrounds/Subcategory-Honda-CRF450R_45737559.png"
								}
								alt={"test"}
								width={512}
								height={512}
								sizes={"512px"}
							/>
							<div className="mt-2 flex justify-between">
								<div className="mx-auto">
									<h2 className="text-md mt-1 font-semibold text-neutral-900">Honda CRF450R</h2>
								</div>
							</div>
						</div>
					</li>

					<li data-testid="ProductElement">
						<div>
							<ProductImageWrapper
								src={
									"https://adventureparts.s3.amazonaws.com/category-backgrounds/Subcategory-Honda-CRF250F_fef5e3d7.png"
								}
								alt={"test"}
								width={512}
								height={512}
								sizes={"512px"}
							/>
							<div className="mt-2 flex justify-between">
								<div className="mx-auto">
									<h2 className="text-md mt-1 font-semibold text-neutral-900">Honda CRF250F</h2>
								</div>
							</div>
						</div>
					</li>

					<li data-testid="ProductElement">
						<div>
							<ProductImageWrapper
								src={
									"https://adventureparts.s3.amazonaws.com/category-backgrounds/Subcategory-Kawasaki-KX250_f5c0aa8f.png"
								}
								alt={"test"}
								width={512}
								height={512}
								sizes={"512px"}
							/>
							<div className="mt-2 flex justify-between">
								<div className="mx-auto">
									<h2 className="text-md mt-1 font-semibold text-neutral-900">Kawasaki KX250</h2>
								</div>
							</div>
						</div>
					</li>

					<li data-testid="ProductElement">
						<div>
							<ProductImageWrapper
								src={
									"https://adventureparts.s3.amazonaws.com/category-backgrounds/Subcategory-Suzuki-RM-Z450_0187b7dc.png"
								}
								alt={"test"}
								width={512}
								height={512}
								sizes={"512px"}
							/>
							<div className="mt-2 flex justify-between">
								<div className="mx-auto">
									<h2 className="text-md mt-1 font-semibold text-neutral-900">Suzuki RM-Z450</h2>
								</div>
							</div>
						</div>
					</li>
				</ul>
				{/* <h1 className="pb-8 pt-12 text-xl font-semibold">{name}</h1>
				<ProductList products={products.edges.map((e) => e.node)} /> */}
			</div>
		);
	}

	if (params.slug === "side-x-side-utvs") {
		return (
			<div className="mx-auto max-w-7xl p-8 pb-16">
				<h1 className="text-xl font-semibold">{name}</h1>
				<ul
					role="list"
					data-testid="ProductList"
					className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-4"
				>
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
									<h2 className="text-md mt-1 font-semibold text-neutral-900">Can-Am Maverick</h2>
								</div>
							</div>
						</div>
					</li>

					<li data-testid="ProductElement">
						<div>
							<ProductImageWrapper
								src={
									"https://adventureparts.s3.amazonaws.com/category-backgrounds/Subcategory-CanAm-Commander_7909e4ff.webp"
								}
								alt={"test"}
								width={512}
								height={512}
								sizes={"512px"}
							/>
							<div className="mt-2 flex justify-between">
								<div className="mx-auto">
									<h2 className="text-md mt-1 font-semibold text-neutral-900">Can-Am Commander</h2>
								</div>
							</div>
						</div>
					</li>

					<li data-testid="ProductElement">
						<div>
							<ProductImageWrapper
								src={
									"https://adventureparts.s3.amazonaws.com/category-backgrounds/Subcategory-Kawasaki-Teryx-KRX_88a1e1b8.png"
								}
								alt={"test"}
								width={512}
								height={512}
								sizes={"512px"}
							/>
							<div className="mt-2 flex justify-between">
								<div className="mx-auto">
									<h2 className="text-md mt-1 font-semibold text-neutral-900">Kawasaki Teryx KRX</h2>
								</div>
							</div>
						</div>
					</li>

					<li data-testid="ProductElement">
						<div>
							<ProductImageWrapper
								src={
									"https://adventureparts.s3.amazonaws.com/category-backgrounds/Subcategory-Kawasaki_Ridge_36535cbb.webp"
								}
								alt={"test"}
								width={512}
								height={512}
								sizes={"512px"}
							/>
							<div className="mt-2 flex justify-between">
								<div className="mx-auto">
									<h2 className="text-md mt-1 font-semibold text-neutral-900">Kawasaki Ridge</h2>
								</div>
							</div>
						</div>
					</li>

					<li data-testid="ProductElement">
						<div>
							<ProductImageWrapper
								src={
									"https://adventureparts.s3.amazonaws.com/category-backgrounds/Subcategory-Polaris-RZR-XP_61fd84e0.webp"
								}
								alt={"test"}
								width={512}
								height={512}
								sizes={"512px"}
							/>
							<div className="mt-2 flex justify-between">
								<div className="mx-auto">
									<h2 className="text-md mt-1 font-semibold text-neutral-900">Polaris RZR</h2>
								</div>
							</div>
						</div>
					</li>

					<li data-testid="ProductElement">
						<div>
							<ProductImageWrapper
								src={
									"https://adventureparts.s3.amazonaws.com/category-backgrounds/Subcategory-Yamaha-YXZ1000R_688362c3.webp"
								}
								alt={"test"}
								width={512}
								height={512}
								sizes={"512px"}
							/>
							<div className="mt-2 flex justify-between">
								<div className="mx-auto">
									<h2 className="text-md mt-1 font-semibold text-neutral-900">Yamaha YXZ1000R</h2>
								</div>
							</div>
						</div>
					</li>

					<li data-testid="ProductElement">
						<div>
							<ProductImageWrapper
								src={
									"https://adventureparts.s3.amazonaws.com/category-backgrounds/Subcategory-Yamaha-Wolverine_82603a78.webp"
								}
								alt={"test"}
								width={512}
								height={512}
								sizes={"512px"}
							/>
							<div className="mt-2 flex justify-between">
								<div className="mx-auto">
									<h2 className="text-md mt-1 font-semibold text-neutral-900">Yamaha Wolverine</h2>
								</div>
							</div>
						</div>
					</li>

					<li data-testid="ProductElement">
						<div>
							<ProductImageWrapper
								src={
									"https://adventureparts.s3.amazonaws.com/category-backgrounds/Subcategory-Honda-Pioneer_980652cf.jpg"
								}
								alt={"test"}
								width={512}
								height={512}
								sizes={"512px"}
							/>
							<div className="mt-2 flex justify-between">
								<div className="mx-auto">
									<h2 className="text-md mt-1 font-semibold text-neutral-900">Honda Pioneer</h2>
								</div>
							</div>
						</div>
					</li>
				</ul>
				{/* <h1 className="pb-8 pt-12 text-xl font-semibold">{name}</h1>
				<ProductList products={products.edges.map((e) => e.node)} /> */}
			</div>
		);
	}
}
