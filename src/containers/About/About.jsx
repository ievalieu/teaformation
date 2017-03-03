import React from "react";
import "./About.css";

class About extends React.Component {
	render() {
		return (
			<div className="row container">
				<div className="col l12">
					<div className="about-card horizontal z-depth-3">
					<div className="img-eva"></div>
						<div className="card-stacked">
							<div className="card-content">
								<h4>ABOUT</h4>
								<p>I am a recent UCLA graduate with a degree in English and a minor in Labor and Workplace Studies. Currently, I am enrolled in the Coding Boot Camp at UCLA Extension for Full-Stack Web Development.</p>
								<br/>
								<p>I’m enamored with the art of storytelling using data, tech, and good ol’ fashioned words. I aim for constant growth and I seek a company interested in creating applications that can spread knowledge in an entertaining and innovative way. Passions include: labor rights, books, tech, travel, and tea.</p>
							</div>
							<div className="card-action">
								<a href="#">This is a link</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default About;