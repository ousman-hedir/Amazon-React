import React from "react";
import Watch from "./watch.png"
import BuyWatchLink from "../Buy-watch-links/Buy_watch_link";
function FourthSection() {
	return (
		<section className="fourth-heghlight-wrapper">
			<div className="container-fluid">
				<div className="row">
					<div className="left-side-wrapper col-sm-12 col-md-6">
						<div className="left-side-container">
							<div className="title-wraper weight-bold">iPhone 15</div>
							<div className="description-wraper py-2">
								<h5>New Camera. New Design. NewPhoria</h5>
							</div>

							<div className="links-wrapper">
								<ul>
									<BuyWatchLink
										links="#"
										watch="Watch More"
										buy="Buy"
										buy_link="#"
									/>
								</ul>
							</div>
						</div>
					</div>
					<div class="right-side-wrapper col-sm-12 col-md-6">
						<div class="right-side-container">
							<div class="top-logo-wrapper">
								<div class="logo-wrapper">
									<img src={Watch} alt="right side img" />
								</div>
							</div>
							<div class="description-wraper text-white py-2">
								<h4>Smarter. Brighter. Mightier</h4>
							</div>
							<div class="links-wrapper">
								<ul>
									<BuyWatchLink
										links="#"
										watch="Watch More"
										buy="Buy"
										buy_link="#"
									/>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FourthSection;
