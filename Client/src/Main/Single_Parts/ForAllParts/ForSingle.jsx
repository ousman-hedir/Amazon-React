import React from "react";

let ForAllParts = (props) => {
	return (
		<div class="container">
      
			{props.h1 && <div class="title-wraper &{props.h1style} bold black pt-5">{props.h1} </div>}

			{props.h2 && <div class="new-alert">{props.h2}</div>}
			{props.h22 && <div class="new-alert">{props.h22}</div>}
			{props.h4 && <div className="MyAdd">{props.h4}</div>}

			{/* bu and watch start */}
			<div class="links-wrapper">
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
							<a className="pro-buy text-decoration-none" href={props.buyLink}>
								{props.buy}
							</a>
						</li>
					)}
				</ul>
			</div>

			{/* buy and watch links end  */}

			<div class="ipod-caption row">
				{props.note && (
					<div class="col-sm-12 col-md-6 text-md-right">{props.note}</div>
				)}

				{props.description && (
					<div class="col-sm-12 col-md-6 text-md-left">{props.description}</div>
				)}
			</div>
		</div>
	);
};

export default ForAllParts;
