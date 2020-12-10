import React from "react";

import { Nav } from "./navbar.js";

import { Jumbo } from "./jumbo.js";

import { Cards } from "./cards.js";

//create your first component
export function Home() {
	return (
		<div className="text-center">
			<Nav />
			<Jumbo />
			<div className="d-flex d-inline">
				<Cards />
				<Cards />
				<Cards />
				<Cards />
			</div>
		</div>
	);
}
