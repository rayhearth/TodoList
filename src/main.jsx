import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/sass/main.scss";
import App from "./App.jsx";

import { Provider } from "react-redux";
import store from "./app/store";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const pages = import.meta.glob("./pages/**/*.jsx", { eager: true });

// import routes from '~react-pages'
// console.log(routes);
const routes = [];

for (const path of Object.keys(pages)) {
	const fileName = path.match(/\.\/pages\/(.*)\.jsx$/)?.[1];
	if (!fileName) {
		continue;
	} 

	const normalizedPath = fileName.includes("$")
		? fileName.replace("$", ":")
		: fileName.replace(/\/index/, "");

	routes.push({
		path: fileName === "Index" ? "/" : `${normalizedPath.toLocaleLowerCase()}`,
		Element: pages[path].default,
		loader: pages[path]?.loader,
		action: pages[path]?.action,
		ErrorBoundary: pages[path]?.ErrorBoundary,
	});
}


const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: routes.map(({ Element, ErrorBoundary, ...rest }) => ({
			...rest,
			element: <Element />,
			...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
		})),
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
    <RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
