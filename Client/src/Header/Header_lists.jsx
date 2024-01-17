// HeaderLists.js

import React from "react";
import { Link } from "react-router-dom";

function HeaderLists({ link, text, imgSrc }) {
  return (
		<li className="nav-item">
			<Link className="nav-link js-scroll-trigger" to={link}>
				{imgSrc && <img src={imgSrc} alt="Icon" />}
				{text}
				{text && ( // Display the span only if text is present
					<span className="hover-text">
						<div className="sub_group">
							<div className="sub-top">
								<div className="title">Shop</div>
								<ul>
									<li>
										<a href="">Shop the Latest</a>
									</li>
									<li>
										<a href="">Mac</a>
									</li>
									<li>
										<a href="">iPad</a>
									</li>
									<li>
										<a href="">iPhone</a>
									</li>
									<li>
										<a href="">Apple Watch</a>
									</li>
									<li>
										<a href="">Accessories</a>
									</li>
								</ul>
							</div>
							<div className="sub-top">
								<div className="title">Quick Links</div>
								<ul>
									<li>
										<a href="">Shop Holiday Gifts</a>
									</li>
									<li>
										<a href="">Find Store</a>
									</li>
									<li>
										<a href="">Order Status</a>
									</li>
									<li>
										<a href="">Apple Trading</a>
									</li>
									<li>
										<a href="">Financing</a>
									</li>
								</ul>
							</div>
							<div className="sub-top">
								<div className="title">Shop Special Stores</div>
								<ul>
									<li>
										<a href="">Certified Refurbished</a>
									</li>
									<li>
										<a href="">Education</a>
									</li>
									<li>
										<a href="">Business</a>
									</li>
									<li>
										<a href="">Veterans and Military</a>
									</li>
									<li>
										<a href="">Government</a>
									</li>
								</ul>
							</div>
						</div>
					</span>
				)}
			</Link>
		</li>
	);
}

export default HeaderLists;
