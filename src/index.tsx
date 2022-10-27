import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyle } from "./global-style";
import { App } from "./app";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<App />
		<GlobalStyle />
	</React.StrictMode>
);
