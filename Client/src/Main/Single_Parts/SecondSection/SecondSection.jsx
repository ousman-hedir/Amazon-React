import React from "react";

import BuyWatchLink from "../../Double_part/Buy-watch-links/Buy_watch_link";

function SecondSection() {
	return (
		<section className="second-hightlight-wrapper">
			<h3 className="py-4 bold title-wraper">iPhone Pro 15</h3>
			<h5 className="video-play new-alert">
				Titanium. So strong. So light. So Pro.
			</h5>
			
			<div class="links-wrapper">
				<ul>
					<BuyWatchLink links="#" watch="Watch More" buy="Buy" buy_link="#"/>
				</ul>
			</div>
		</section>
	);
}

export default SecondSection;
