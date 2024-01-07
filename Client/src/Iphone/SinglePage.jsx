import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

function SinglePage() {
	const [iphones, setIphones] = useState([]);
	const { productLink } = useParams();

	async function asyncFun() {
		try {
			const datas = await fetch("product.json");
			const data = await datas.json();
			let eachIphone = data.filter(
				(iphone) => iphone.product_url === productLink
			);
			console.log(iphones);
			setIphones(eachIphone);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		asyncFun();
	});

	if (iphones.length > 0) {
		return (
			<>
				{iphones?.map((item) => (
					<div key={item.product_id}>
						<div className={" map-div-single mx-5 mb-5"}>
							<div className="">
								<h1 className="title mb-4">{item.product_name}</h1>
								<h5 className="mb-3 map-description">
									{item.product_brief_description}
								</h5>
								<p className="mb-4 mx-5">{item.product_description}</p>
								<h6 className="mb-3">
									With The price of $ {item.starting_price} at a range of $
									{item.price_range}
								</h6>
							</div>
							<div className="">
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
				))}
			</>
		);
	} else {
		return <NotFound />;
	}
}

export default SinglePage;
