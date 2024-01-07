import React from "react";

import Logo from "./logo-sm.png";
import Search from "./search-icon-sm.png";
import Cart from "./cart-sm.png";
import HeaderLists from "./Header_lists";

import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="nav-wrapper fixed-top">
			<div className="container">
				<nav className="navbar navbar-toggleable-sm navbar-expand-md">
					<button
						className="navbar-toggler navbar-toggler-right"
						type="button"
						data-toggle="collapse"
						data-target=".navbar-collapse"
					>
						☰
					</button>
					<Link className="navbar-brand mx-auto" to="/">
						<img src={Logo} alt="Logo" />
					</Link>

					<div className="navbar-collapse collapse">
						<ul className="navbar-nav nav-justified w-100 nav-fill white">
							<HeaderLists link="/iphone" text="iphone" />
							<HeaderLists link="/mac" text="Mac" />

							<HeaderLists link="ipad" text="ipad" />
							<HeaderLists link="watch" text="watch" />
							<HeaderLists link="tv" text="tv" />
							<HeaderLists link="music" text="Music" />
							<HeaderLists link="support" text="Support" />
							<HeaderLists link="#" imgSrc={Search} />
							<HeaderLists link="cart" imgSrc={Cart} />
							<Link className="me-2 mx-auto log-in text-white" to="log-in">
								Login
							</Link>
							
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Header;
