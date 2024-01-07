import React from "react";
import Movie from "./monister-logo.png";

import Apple from "./apple-logo.png";

function ThirdSection() {
	return (
		<section class="third-hightlight-wrapper">
			<div>
				<img className="apple-logo" src={Apple} alt="apple-logo" />
			</div>

			<div>
				<img className="movie-logo" src={Movie} alt="logo" />
			</div>
			<h3 className="py-3">Some Secrets can not be Contained </h3>
			<h5 className="video-play">
				Stream The New Series <i class="fa-solid fa-circle-play"></i>
			</h5>
		</section>
	);
}

export default ThirdSection;
