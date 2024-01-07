import React from 'react'
import Card from "./card-logo.png"
import Trade from "./trade-logo.png"
import BuyWatchLink from "../Buy-watch-links/Buy_watch_link";

function Sixsection() {
  return (
		<section className="sixth-heghlight-wrapper">
			<div className="container-fluid">
				<div className="row">
					<div className="left-side-wrapper col-sm-12 col-md-6">
						<div className="left-side-container">
							<div className="top-logo-wrapper">
								<div className="logo-wrapper">
									<img src={Trade} alt="img" />
								</div>
							</div>
							<div className="description-wraper ">
								<h6>
									Get $200–$650 in credit when  you trade in iPhone 11 or
									higher.
								</h6>
							</div>
							<div className="links-wrapper">
								<ul>
									<BuyWatchLink
										links="#"
										watch="See What Your Device is Worth"
									/>
								</ul>
							</div>
						</div>
					</div>
					<div class="right-side-wrapper col-sm-12 col-md-6">
						<div class="right-side-container">
							<div class="top-logo-wrapper">
								<div class="logo-wrapper">
									<img src={Card} alt="img" />
								</div>
							</div>
							<div class="description-wraper">
								Get up to 3% Daily Cash Back <br /> With Every Purchase.
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

export default Sixsection