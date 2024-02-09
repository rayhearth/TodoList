import { useState } from "react";

import { Outlet } from "react-router-dom";
import Header from "./Components/layout/Header";
import Footer from "./Components/layout/Footer";

function App() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
