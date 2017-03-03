import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./App/App";
import Home from "./Home/Home";
import About from "./About/About";
// import Blog from "./Blog/Blog";
// import Contact from "./Contact/Contact";

export default () => {
	return (
		<Route path="/" component={App}>
			<IndexRoute component={Home} />

			<Route path="/" component={Home} />
			<Route path="/about" component={About} />
		{/*
			<Route path="/blog" component={Blog} />
			<Route path="/contact" component={Contact} />
		*/}
		</Route>
	);
}