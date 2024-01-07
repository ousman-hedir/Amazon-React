import React from "react";
import "./iphone.css";
// import Fimg from "./bg-image.jpg";
import { Link } from "react-router-dom";

function UpperSection() {
	return (
		<>
			<div className="upper-section">
				<h1 className="well-come pt-5">Welcome to iPhone Page</h1>
				<div className="flex-part">
					<h5 className="ms-5  bold">The Apple Store Shopping Event</h5>
					<div>
						<button>Add to Calander</button>
					</div>
				</div>

				<hr />
				<h1 className="header-text ">
					A sneak peek <br /> at what’s in store.
				</h1>
				<h4 className="description">
					Starting November 24, buy an eligible product and get an <br /> Apple
					Gift Card up to $200 to use on a later purchase.* Only at Apple.
				</h4>
				<Link className="a" to="#">
					<h4 className="link center my-5 ">
						Add To Calander <i class="fa-regular fa-circle-down"></i>
					</h4>
				</Link>
				<div className="fimage"></div>
				{/* <img clasName="fimage" src={Fimg} alt="img" /> */}
			</div>
		</>
	);
}

export default UpperSection;
