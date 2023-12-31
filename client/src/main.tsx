import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "primeflex/primeflex.css";
import "primereact/resources/themes/tailwind-light/theme.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
