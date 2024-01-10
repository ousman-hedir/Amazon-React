import React, { useEffect, useState } from "react";

function YouTube() {
	let [videos, videoChanger] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://youtube.googleapis.com/youtube/v3/search?part=snippet%20&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=%20AIzaSyBDxGvibq-gzvsp--rDQxwYOst6GX16Y6E"
				);
				const result = await response.json();

				videoChanger(result.items);
				console.log(result);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	const truncateText = (text, limit) => {
		const words = text.split(" ");
		if (words.length > limit) {
			return words.slice(0, limit).join(" ") + "...";
		}
		return text;
	};

	return (
		<>
			<h2 className="text-center bolder my-3">Our Latest Videos</h2>
			<div className="row h-100 align-items-center justify-content-center text-center">
				{videos?.map((video, index) => {
					let videoLink = `https://www.youtube.com/watch?v=${video.id.videoId}`;
					const truncatedDescription = truncateText(
						video.snippet.description,
						20
					);

					return (
						<div
							key={index}
							className="youTube-video col-sm-12 col-md-3"
							style={{
								boxSizing: "border-box",
								padding: "1px",
								marginBottom: "20px",
								backgroundColor: "#fff",
								borderRadius: "8px",
								boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
							}}
						>
							<div
								className="video-container"
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
							>
								<a
									href={videoLink}
									target="_blank"
									rel="noopener noreferrer"
									style={{
										display: "inline-block",
										padding: "8px 15px",
									
										
										textDecoration: "none",
										
										transition: "background-color 0.3s",
										
										
									}}
								>
									<img
										src={video.snippet.thumbnails.high.url}
										alt={video.snippet.title}
										className="video-thumbnail"
										style={{
											maxWidth: "100%",
											height: "auto",
											borderRadius: "6px",
										}}
									/>
								</a>
								<h5
									className="my-2 bolder"
									style={{
										margin: "10px 0",
										fontSize: "1.1rem",
										color: "#005CC8",
									}}
								>
									{video.snippet.title}
								</h5>
								<h6
									style={{
										color: "#555",
										fontSize: "14px",
									}}
								>
									{truncatedDescription}
								</h6>

								<p>
									<a
										href={videoLink}
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-block",
											padding: "8px 15px",
											backgroundColor: "#4285f4",
											color: "#fff",
											textDecoration: "none",
											borderRadius: "4px",
											transition: "background-color 0.3s",
											fontSize: "12px",
											hover: "#green",
										}}
									>
										Watch Video
									</a>
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default YouTube;
