import React from "react";
import Watch from "./watch.png"
import BuyWatchLink from "../Buy-watch-links/Buy_watch_link";
function FourthSection() {
	return (
		<section className="DFirst-heghlight-wrapper mt-2">
			<div className="container-fluid">
				<div className="row">
					<div className="left-side-wrapper col-sm-12 col-md-6">
						<div className="left-side-container">
							<div className="logo-wrapper">
								<img src={Watch} alt="right side img" />
							</div>

							<div className="description-wraper py-2">
								<h5>First Level Adventure</h5>
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
					{/* right side */}
					<div className="right-side-wrapper col-sm-12 col-md-6">
						<div class="right-side-container">
							<div className="title-wraper weight-bolder">MacBook Pro</div>

							<div className="description-wraper t py-2">
								<p>Mind Blowing. Head Turning</p>
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
