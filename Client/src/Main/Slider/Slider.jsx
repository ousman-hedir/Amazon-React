import { useState, useEffect } from "react";
import "./Slider.css";
import {
	MdPause,
	MdPlayArrow,
	MdNavigateBefore,
	MdNavigateNext,
	MdFullscreen,
	MdFullscreenExit,
} from "react-icons/md";

const Slider = () => {
	const images = [
		"https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/2500x1406.jpg",
		"https://is1-ssl.mzstatic.com/image/thumb/tPJwMGtsAr_psAVlyf2Rzg/2500x1406.jpg",
		"https://is1-ssl.mzstatic.com/image/thumb/mZsXfk4apSIl3Q5QZqztiQ/2500x1406.jpg",
		"https://is1-ssl.mzstatic.com/image/thumb/FVXovQ_qyfe9iwKjx4dRxA/2500x1406.jpg",
		"https://is1-ssl.mzstatic.com/image/thumb/-RJ9s2YmRAo0GqNUf3GNlg/2500x1406.jpg",
		"https://is1-ssl.mzstatic.com/image/thumb/q8QlFpnNct0G9kpRmyMyNw/2500x1406.jpg",
		"https://is1-ssl.mzstatic.com/image/thumb/R_l1v_QVLik6NRU2FL9yrw/2500x1406.jpg",
	];

	const duplicatedImages = [...images, ...images, ...images];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [isSliding, setIsSliding] = useState(true);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [autoplaySpeed, setAutoplaySpeed] = useState(3000);
	const [showThumbnails, setShowThumbnails] = useState(true);

	const handlePrev = () => {
		setCurrentIndex(
			(prevIndex) =>
				(prevIndex - 1 + duplicatedImages.length) % duplicatedImages.length
		);
		setIsSliding(false);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % duplicatedImages.length);
		setIsSliding(false);
	};

	const handleStopSliding = () => {
		setIsSliding(!isSliding);
	};

	const handleFullscreen = () => {
		setIsFullscreen(!isFullscreen);

		if (!isFullscreen && document.documentElement.requestFullscreen) {
			document.documentElement.requestFullscreen();
		} else if (document.exitFullscreen) {
			document.exitFullscreen();
		}
	};

	const handleMouseEnter = () => {
		// setIsSliding(false);
	};

	const handleMouseLeave = () => {
		setIsSliding(true);
	};

	const handleKeyPress = (e) => {
		if (e.key === "ArrowLeft") {
			handlePrev();
		} else if (e.key === "ArrowRight") {
			handleNext();
		}
	};

	const handleImageClick = () => {
		handleStopSliding();
	};

	const handleAutoplaySpeedChange = (speed) => {
		setAutoplaySpeed(speed);
	};

	const handleToggleThumbnails = () => {
		setShowThumbnails(!showThumbnails);
	};

	// ... (previous code)

	useEffect(() => {
		let interval;

		if (isSliding) {
			interval = setInterval(() => {
				setCurrentIndex(
					(prevIndex) => (prevIndex + 1)
				);
			}, autoplaySpeed);
		}

		return () => clearInterval(interval);
	}, [isSliding, autoplaySpeed, duplicatedImages.length]);


	useEffect(() => {
		let imageChangeInterval;

		if (isSliding) {
			imageChangeInterval = setInterval(() => {
				setCurrentIndex((prevIndex) => prevIndex + 1);
			}, 800);
		}

		return () => clearInterval(imageChangeInterval);
	}, [isSliding]);

	return (
		<div
			className={`slider-container ${isFullscreen ? "fullscreen" : ""}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			tabIndex="0" // Enable keyboard events
			onKeyDown={handleKeyPress}
		>
			<div className="image-slider-container">
				<div
					className="image-slider"
					style={{
						width: `${duplicatedImages.length * 100}vw`,
						transform: `translateX(-${
							(currentIndex * 100) / duplicatedImages.length
						}vw)`,
						transition: `transform ${isSliding ? "1s ease-in-out" : "0s"}`,
					}}
				>
					{duplicatedImages.map((image, index) => (
						<div
							key={index}
							className="image-wrapper"
							onClick={handleImageClick}
						>
							<img
								src={image}
								alt={`image-${index}`}
								className="image"
								style={{
									width: "100%",
									cursor: "pointer",
								}}
							/>
							<div className="image-caption">Caption {index + 1}</div>
						</div>
					))}
				</div>
			</div>

			{showThumbnails && (
				<div className="thumbnail-container">
					{duplicatedImages.map((image, index) => (
						<div
							key={index}
							className={`thumbnail ${currentIndex === index ? "active" : ""}`}
							onClick={() => setCurrentIndex(index)}
						>
							<img src={image} alt={`thumbnail-${index}`} />
						</div>
					))}
				</div>
			)}

			<div className="controls">
				<div className="control-icon" onClick={handlePrev}>
					<MdNavigateBefore />
				</div>
				<div className="control-icon" onClick={handleStopSliding}>
					{isSliding ? <MdPause /> : <MdPlayArrow />}
				</div>
				<div className="control-icon" onClick={handleFullscreen}>
					{isFullscreen ? <MdFullscreenExit /> : <MdFullscreen />}
				</div>
				<div className="control-icon" onClick={handleNext}>
					<MdNavigateNext />
				</div>
				<div className="autoplay-speed-control">
					Autoplay Speed:{" "}
					<input
						type="range"
						min="1000"
						max="10000"
						step="1000"
						value={autoplaySpeed}
						onChange={(e) => handleAutoplaySpeedChange(e.target.value)}
					/>
				</div>
				<div className="control-icon" onClick={handleToggleThumbnails}>
					{showThumbnails ? <MdPause /> : <MdPlayArrow />}
				</div>
			</div>
		</div>
	);
};

export default Slider;
