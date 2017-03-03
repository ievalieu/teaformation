import React from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
class Home extends React.Component {
	render() {
		return (
			<main>
				<Hero />
				<div className="container">
					<h2>Title</h2>
				</div>
    		</main>
		);
	}
}
export default Home;