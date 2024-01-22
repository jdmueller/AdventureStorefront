import { type ReactNode } from "react";
import { AuthProvider } from "@/ui/components/AuthProvider";

export const metadata = {
	title: "Checkout | Adventure Parts, LLC",
	description:
		"Adventure Parts features high end performance parts for Adventure Motorcycles and Electric Bikes",
};

export default function RootLayout(props: { children: ReactNode }) {
	return (
		<main>
			<AuthProvider>{props.children}</AuthProvider>
		</main>
	);
}
