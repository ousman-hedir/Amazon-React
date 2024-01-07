import React from "react";

function Buy_Watch_Link(props) {
	return (
		<>
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
						{props.buy} 
					</a>
				</li>
			)}
		</>
	);
}

export default Buy_Watch_Link;
