"use client";

import { usePathname } from "next/navigation";
import TheServerComponent from "../Server/TheServerComponent";
export default function GetTheMFPath() {
	const pathname = usePathname();
	return (
		<>
			<p className="border-2 p-4">Current pathname: {pathname}</p>
			the server component, getting initial props from the client component
			<TheServerComponent pathname={pathname} />
		</>
	);
}
