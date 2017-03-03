import React from "react";
import "./Navbar.css";
import {Link} from "react-router";

export default () => {
	return (
		<nav role="navigation">
			<div>
				<ul>
					<li><Link to="/about">ABOUT</Link></li>
				</ul>
				<ul>
					<li><Link to="/blog">BLOG</Link></li>
				</ul>
				<ul>
					<li><Link to="/contact">CONTACT</Link></li>
				</ul>
			</div>
		</nav>
	);
}