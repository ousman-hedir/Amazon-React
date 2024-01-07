import React from "react";
import { Link } from "react-router-dom";
function HeaderLists(props) {
	const { link, imgSrc, text } = props;

	return (
		<li className="nav-item">
			<Link className="nav-link js-scroll-trigger" to={link}>
				{imgSrc && <img src={imgSrc} alt="Icon" />}
				
				{text}
			</Link>
		</li>



	);
}

export default HeaderLists;
