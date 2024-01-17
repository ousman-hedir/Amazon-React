import React, { useEffect } from "react";
import usaImg from "./16.png";
import $ from "jquery";

function Footer() {
	useEffect(() => {
		$(document).ready(function () {
			// Check if the window width is at least 768px
			if ($(window).width() >= 768) {
				// Add a click event listener to all h3 elements within the footer
				$(".footer-links-wrapper h3").click(function () {
					// Toggle the visibility of the next ul element
					$(this).next("ul").slideToggle();
				});
			}
		});

		// Resize event listener to handle changes in window width
		$(window).resize(function () {
			// Check if the window width is at least 768px
			if ($(window).width() >= 768) {
				// Show all ul elements
				$(".footer-links-wrapper ul").show();
			} else {
				// Hide all ul elements
				$(".footer-links-wrapper ul").hide();
			}
		});
	});

	let shopAndLearnLinks = [
		{ name: "Mac", url: "#" },
		{ name: "iPad", url: "#" },
		{ name: "iPhone", url: "#" },
		{ name: "Watch", url: "#" },
		{ name: "TV", url: "#" },
		{ name: "Music", url: "#" },
		{ name: "Airpod", url: "#" },
		{ name: "Home", url: "#" },
		{ name: "ipod touch", url: "#" },
		{ name: "Accessories", url: "#" },
		{ name: "Gift Cards", url: "#" },
	];
	let Services_list = [
		{ name: "Apple Music", url: "#" },
		{ name: "Apple News+ ", url: "#" },
		{ name: "Apple TV+", url: "#" },
		{ name: " Apple Arcade", url: "#" },
		{ name: "Apple Card", url: "#" },
		{ name: "iCloud", url: "#" },
	];
	let account_list = [
		{ name: "Manage Your Apple ID", url: "#" },
		{ name: "Apple Store Account", url: "#" },
		{ name: "iCloud.com", url: "#" },
	];
	let store_list = [
		{ name: "Find a Store", url: "#" },
		{ name: "Genius Bar", url: "#" },
		{ name: "Today at Apple", url: "#" },
		{ name: "Apple Camp", url: "#" },
		{ name: "Field Trip", url: "#" },
		{ name: "Apple Store App", url: "#" },
		{ name: "Refurbished and Clearance", url: "#" },
		{ name: "Financing", url: "#" },
		{ name: "Apple Trade In", url: "#" },
		{ name: "Order Status", url: "#" },
		{ name: "Shopping Help", url: "#" },
	];

	let business_list = [
		{ name: "Apple and Business", url: "#" },

		{ name: "Shop for Business", url: "#" },
	];

	let education_list = [
		{ name: "Apple and Education", url: "#" },

		{ name: "for College", url: "#" },
	];
	let health_list = [
		{ name: "Manage Your Apple ID", url: "#" },
		{ name: "Apple Store Account", url: "#" },
		{ name: "iCloud.com", url: "#" },
	];
	let government_list = [
		{ name: "Apple and Education", url: "#" },
		{ name: "Shop for College", url: "#" },
	];
	let value_list = [
		{ name: "Find a Store", url: "#" },
		{ name: "Genius Bar", url: "#" },
		{ name: "Today at Apple", url: "#" },
		{ name: "Apple Camp", url: "#" },
		{ name: "Field Trip", url: "#" },
		{ name: "Apple Store App", url: "#" },
	];
	let fAbout_list = [
		{ name: "Find a Store", url: "#" },
		{ name: "Genius Bar", url: "#" },
		{ name: "Today at Apple", url: "#" },
		{ name: "Apple Camp", url: "#" },
		{ name: "Field Trip", url: "#" },
		{ name: "Apple Store App", url: "#" },
	];

	return (
		<footer className="footer-wrapper">
			<div className="container">
				<div className="upper-text-container">
					<p>
						1. Offer valid on qualifying purchases of Eligible Products from
						November 24, 2023, to November 27, 2023, at a Qualifying Location.
						Offer subject to availability. While supplies last.{" "}
						<a
							href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
							target="_blank"
							rel="noreferrer"
						>
							Customer Agreement
						</a>{" "}
						or by calling 1-800-MY-APPLE, and is subject to credit approval and
						credit limit. See support.apple.com/kb/HT211204 for more information
						about eligible products. APR ranges may vary based on when you
						accepted an Apple Card. Cardholders who accept an Apple Card on
						and/or after August 10,
						<a
							href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
							target="_blank"
							rel="noreferrer"
						>
							Customer Agreement
						</a>{" "}
						Existing cardholders: See your Customer Agreement for applicable
						rates and fee.{" "}
						<a
							href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
							target="_blank"
							rel="noreferrer"
						>
							Customer Agreement
						</a>{" "}
						<a
							href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
							target="_blank"
							rel="noreferrer"
						>
							Customer Agreement
						</a>{" "}
						please call Goldman Sachs at 877-255-5923 with questions about
						accessing this offer or applying for Apple Card. Except for ACMI,
						this offer cannot be combined with other Apple promotions or
						financing offers that are directed to individual end-user customers
						in the Qualifying Location. This offer also cannot be combined with
						the Apple Employee Purchase Plan or business loyalty pricing. Some
						methods of payment are not accepted under this offer.{" "}
						<a
							href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
							target="_blank"
							rel="noreferrer"
						>
							Customer Agreement
						</a>{" "}
						See checkout for details. Additional restrictions apply. View full
						terms and conditions of offer here.
					</p>
					<p>
						2. Apple TV+ is $4.99/month after free trial. One subscription per
						Family Sharing group. Offer good for 3 months after eligible device
						activation. Plan automatically renews until cancelled.{" "}
						<a
							href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
							target="_blank"
							rel="noreferrer"
						>
							Customer Agreement
						</a>{" "}
						or added to an Apple Gift Card. Actual value awarded is based on
						receipt of a qualifying device matching the description provided
						when estimate was made. Sales tax may be assessed on full value of a
						new device purchase.
						<a
							href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
							target="_blank"
							rel="noreferrer"
						>
							Customer Agreement
						</a>{" "}
						In-store trade-in requires presentation of a valid photo ID (local
						law may require saving this information).{" "}
						<a
							href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
							target="_blank"
							rel="noreferrer"
						>
							Customer Agreement
						</a>{" "}
						Offer may not be available in all stores,{" "}
						<a
							href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
							target="_blank"
							rel="noreferrer"
						>
							Customer Agreement
						</a>{" "}
						and may vary between in-store and online trade-in. Some stores may
						have additional requirements. Apple or its trade-in partners reserve
						the right to refuse or limit quantity of any trade-in transaction
						for any reason. More details are available from Apple’s trade-in
						partner for trade-in and recycling of eligible devices. Restrictions
						and limitations may apply.{" "}
						<a href="https://www.apple.com/promo/">terms </a> apply.
					</p>
				</div>
				<div className="footer-links-wrapper row">
					<div className="links-wrapper-1 col-sm-12 col-md">
						<h3>Shop and Learn</h3>
						<ul>
							{shopAndLearnLinks.map((link, index) => (
								<li key={index}>
									<a href={link.url}>{link.name}</a>
								</li>
							))}
						</ul>
					</div>
					<div className="links-wrapper-2 col-sm-12 col-md">
						<h3>Services</h3>
						<ul>
							{Services_list.map((link, index) => (
								<li key={index}>
									<a href={link.url}>{link.name}</a>
								</li>
							))}
						</ul>
						<h3>Account</h3>
						<ul>
							{account_list.map((link, index) => (
								<li key={index}>
									<a href={link.url}>{link.name}</a>
								</li>
							))}
						</ul>
					</div>
					<div className="links-wrapper-3 col-sm-12 col-md">
						<h3>Apple Store</h3>
						<ul>
							{store_list.map((link, index) => (
								<li key={index}>
									<a href={link.url}>{link.name}</a>
								</li>
							))}
						</ul>
					</div>
					<div className="links-wrapper-4 col-sm-12 col-md">
						<h3>For Business</h3>
						<ul>
							{business_list.map((link, index) => (
								<li key={index}>
									<a href={link.url}>{link.name}</a>
								</li>
							))}
						</ul>
						<h3>For Education</h3>
						<ul>
							{education_list.map((link, index) => (
								<li key={index}>
									<a href={link.url}>{link.name}</a>
								</li>
							))}
						</ul>
						<h3>For Healthcare</h3>
						<ul>
							{health_list.map((link, index) => (
								<li key={index}>
									<a href={link.url}>{link.name}</a>
								</li>
							))}
						</ul>
						<h3>For Government</h3>
						<ul>
							{government_list.map((link, index) => (
								<li key={index}>
									<a href={link.url}>{link.name}</a>
								</li>
							))}
						</ul>
					</div>
					<div className="links-wrapper-5 col-sm-12 col-md">
						<h3>Apple Values</h3>
						<ul>
							{value_list.map((link, index) => (
								<li key={index}>
									<a href={link.url}>{link.name}</a>
								</li>
							))}
						</ul>
						<h3>About Apple</h3>
						<ul>
							{fAbout_list.map((link, index) => (
								<li key={index}>
									<a href={link.url}>{link.name}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="my-apple-wrapper">
					More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
					<a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
				</div>
				<div className="copyright-wrapper row">
					<div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
						Copyright &copy; 2020 Apple Inc. All rights reserved.
					</div>
					<div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
						<ul>
							<li>
								<a href="#">Privacy Policy</a>
							</li>
							<li>
								<a href="#">Terms of Use</a>
							</li>
							<li>
								<a href="#">Sales and Refunds</a>
							</li>
							<li>
								<a href="#">Legal</a>
							</li>
							<li>
								<a href="#">Site Map</a>
							</li>
						</ul>
					</div>
					<div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
						<div className="flag-wrapper">
							<img src={usaImg} alt="img" />
						</div>{" "}
						<div className="footer-country-name">United States</div>
					</div>
				</div>
			</div>
			<div className="footer-my-link">
				<h6 className="ms-5">
					Dev by
					<strong className="ps-2">
						<a href="https://ousman24.netlify.app/">Ousman Hedir</a>
					</strong>
				</h6>
			</div>
		</footer>
	);
}

export default Footer;
