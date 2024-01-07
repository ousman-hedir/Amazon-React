import React from "react";

function ForAllDouble(props) {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="left-side-wrapper col-sm-12 col-md-6">
					<div className="left-side-container">
						<div class="title-wraper pt-5">{props.h1}</div>
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								{props.img1 && <img src={props.img1} alt="forprops" />}
							</div>
						</div>
						<div className="description-wraper white">{props.h2}</div>
						<div className="links-wrapper">
							<ul>
								{props.links && (
									<li>
										<a className="mx-4 text-decoration-none" href={props.links}>
											{props.watch}
											
										</a>
									</li>
								)}

								{props.buy && (
									<li>
										<a
											className="pro-buy text-decoration-none"
											href={props.buy_link}
										>
											{props.buy}{" "}
											
										</a>
									</li>
								)}
							</ul>
						</div>
					</div>
				</div>

				{/* right side start */}
				<div className="right-side-wrapper col-sm-12 col-md-6">
					<div className="right-side-container">
						<div class="top-logo-wrapper">
							<div class="logo-wrapper">
								{props.rimg1 && <img src={props.rimg1} alt="right side" />}
							</div>
						</div>
						<div className="title-wraper">{props.h3}</div>
						<div className="description-wraper">{props.h3}</div>
						<div className="links-wrapper">
							<ul>
								{props.links && (
									<li>
										<a className="mx-4 text-decoration-none" href={props.links}>
											{props.watch}
											
										</a>
									</li>
								)}

								{props.buy && (
									<li>
										<a
											className="pro-buy text-decoration-none"
											href={props.buy_link}
										>
											{props.buy}{" "}
											
										</a>
									</li>
								)}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ForAllDouble;
