import React from "react";
import "./Header.css";
import {Link} from "react-router";
import Navbar from "../Navbar/Navbar";
//import logo from "./logo.png";

export default () => {
	const brandStyle = {
		fontFamily: "Lato"
	};
	return (
		<header>
			<div>
				<Link to="/" style={brandStyle}>
					{/*<img src="{logo}" alt="logo" className="App-logo"/>*/}
					<span id="tea">TEA</span>
					<span id="formation">FORMATION</span>
				</Link>
			</div>		
			<Navbar />	
		</header>
	);
}