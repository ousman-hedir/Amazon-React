import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import BuyWatchLink from "../../Double_part/Buy-watch-links/Buy_watch_link";
import Video from "./.eslintrc.cjs";
import "./FirstSection.css";
import Logo from "./logo.png";

function FirstSection() {
	const videoRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(true);

	const togglePlayPause = () => {
		const video = videoRef.current;
		if (video) {
			if (isPlaying) {
				video.pause();
			} else {
				video.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	return (
		<section className="first-highlight-wrapper">
			{/* Video Background */}
			<div className="video-background">
				<video ref={videoRef} autoPlay="autoplay" muted loop>
					<source src={Video} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<div className="video-overlay" onClick={togglePlayPause}>
					{/* Play/Pause icon */}
					<FontAwesomeIcon
						icon={isPlaying ? faPause : faPlay}
						className="play-pause-icon"
					/>
				</div>
			</div>

			{/* Content Overlay */}
			<div className="content-overlay ">
				<div className="text-container">
					<img className="white-img" src={Logo} alt="" />

					<h4 className="video-text">
						Double Tap. A Magical New Way To Use Apple Watch
					</h4>

					<div className="links-wrapper">
						<button className="me-5 white-button">Learn More</button>
						<button className="white-button">Buy</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FirstSection;
