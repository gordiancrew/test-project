import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import "./components/styles/global.css";
import Header from "./components/main/header";
import Picture from "./components/main/picture";
import Content from "./components/main/content";
import Home from "./components/main/Home";
import Registration from "./components/main/registration";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/registration" element={<Registration />} />
			</Routes>
		</div>
	);
}

export default App;
