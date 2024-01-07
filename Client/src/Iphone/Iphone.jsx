import "./iphone.css";
import UpperSection from "./UpperSection";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function IPhone() {
	const [data, setData] = useState([]);

	async function fetchData() {
		try {
			const response = await fetch("product.json");
			const data = await response.json();
			setData(data);
			// console.log(data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		// const fetchData = async () => {
		// 	try {
		// 		const response = await fetch("http://localhost:5000/data");
		// 		const data = await response.json();
		// 		setData(data);
		// 		console.log(data);
		// 	} catch (error) {
		// 		console.error(error);
		// 	}
		// };

		fetchData();
	}, []);

	let leftRight = true;

	return (
		<section className="section">
			<UpperSection />
			{/* dynamic start */}
			<>
				{data?.map((item) => {
					let leftSide = 1;
					let rightSide = 2;
					if (leftRight) {
						leftSide = 2;
						rightSide = 1;
						leftRight = !leftRight;
					} else {
						leftRight = !leftRight;
					}

					return (
						<div key={item.product_id} className="map-container">
							<div className={`row map-div mx-5 my-5`}>
								<div className={`col-md-6 order-${leftSide}`}>
									{/* <h1 className="mt-3">Well Come {item.user_name}</h1> */}

									<h1 className="title mb-4">{item.product_name}</h1>
									<h5 className="mb-3 map-description">
										{item.product_brief_description}
									</h5>

									<p className="mb-4 mx-5">{item.product_description}</p>
									<h6 className="mb-3">
										With The price of $ {item.starting_price} at a range of $
										{item.price_range}
									</h6>
									<Link to={`/iphone/${item.product_url}`}>
										<button className="btn btn-primary mb-5">
											Explore More
										</button>
									</Link>

									<Link to={`/iphone/${item.product_url}`}>
										<button className="btn btn-primary mb-5">
											Explore More
										</button>
									</Link>
								</div>
								<div className={`col-md-6 order-${rightSide}`}>
									<div className="image-div">
										<div className="map-images">
											<img
												className="mt-5 mb-5 me-4 ms-5 img-fluid"
												src={item.product_img}
												alt="Product"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</>
		</section>
	);
}

export default IPhone;
