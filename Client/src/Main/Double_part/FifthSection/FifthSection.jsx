import React from 'react'
import BuyWatchLink from "../Buy-watch-links/Buy_watch_link";
import Vision from "./vision.png"

function FifthSection() {
  return (
		<section class="fifth-heghlight-wrapper">
			<div class="container-fluid">
				<div class="row">
					<div class="left-side-wrapper col-sm-12 col-md-6">
						<div class="left-side-container">
							<div class="tvshow-logo-wraper">
								<img src={Vision} alt="img" />
							</div>

							<div class="watch-more-wrapper">
								<h4 className='vision-h4'>Well Come to the era Special Computing</h4>
								<h5 className="vision-color">
									Available Early Next Year In the USA
								</h5>
							</div>
							<div class="links-wrapper">
								<ul>
									<BuyWatchLink links="#" watch="Watch More" />
								</ul>
							</div>
						</div>
					</div>
					<div class="right-side-wrapper col-sm-12 col-md-6">
						<div class="right-side-container">
							<div class="title-wraper">ipad</div>
							<div class="description-wraper">
								<h4>Lovable. Drawable. Magical</h4>
							</div>
							<div class="links-wrapper">
								<ul>
									<BuyWatchLink links="#" watch="Watch More"buy="Buy" buy_link="#" />
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FifthSection