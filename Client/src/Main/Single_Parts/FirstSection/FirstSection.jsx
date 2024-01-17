import React from "react";

import BuyWatchLink from "../../Double_part/Buy-watch-links/Buy_watch_link";


function FirstSection() {


  return (
		<section className="first-hightlight-wrapper">
			<h3 className="black py-4 bold title-wraper">
				The Apple Store Shopping Event
			</h3>
			<h5 className="video-play black new-alert">
				Get an Apple Gift Card up to $200 <br /> with your eligible purchase
			</h5>
			<h6 className="black MyAdd">Offer starts 11.24</h6>
			<div className="links-wrapper">
				<ul>
					<BuyWatchLink links="#" watch="Get An Early Look" />
				</ul>
			</div>
		</section>
	);
}

export default FirstSection;
