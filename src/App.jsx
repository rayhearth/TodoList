import { useState } from "react";


import { Outlet } from "react-router";
import DATA from "./api/data";





function App() {
	return (
		<>
		<Outlet tasks={DATA}/>
		</>
	);
}

export default App;
