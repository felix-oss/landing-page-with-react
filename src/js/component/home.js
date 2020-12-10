import React from "react";

import { Nav } from "./navbar.js";

import { Jumbo } from "./jumbo.js";

import { Cards } from "./cards.js";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Nav />
			<Jumbo />
			<Cards />
			<Cards />
			<Cards />
			<Cards />
		</div>
	);
}
