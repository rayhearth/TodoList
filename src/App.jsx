import { useState } from "react";


import { Outlet } from "react-router";
import DATA from "./api/data";
import Todo from "./Components/Todo";


function App() {
	
		return (
		<>
		<Outlet context={{ tasks: DATA}}/>
		</>
	);
	
}

export default App;
