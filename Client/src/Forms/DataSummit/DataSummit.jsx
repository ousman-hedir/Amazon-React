import React, { useState } from "react";
import axios from "axios";

const DataSummit = () => {
	const [formData, setFormData] = useState({
		product_name: "",
		product_url: "",
		product_brief_description: "",
		product_description: "",
		product_img: "",
		product_link: "",
		starting_price: "",
		price_range: "",
		user_name: "",
		user_password: "",
		formBasicCheckbox: false,
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// 			const response = await axios.post("http://localhost:5000/form", formData);
			// 			console.log("Form submitted successfully", response.data);
			// 			headers: {
			//     'Content-Type': 'application/json',
			//   },

			const response = await axios.post(
				"http://localhost:5000/form",
				formData,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			console.log("Form submitted successfully", response.data);

			// Handle success (e.g., show a success message to the user)
		} catch (error) {
			console.error("Error submitting form", error);
		}
	};

	return (
		<section className="form-section">
			<div className="form-wraper">
				<form className="mt-5" onSubmit={handleSubmit}>
					<h4 className="ms-5 bold pt-5">Product Table</h4>

					{/* Product Name */}
					<div className="ms-5 my-3">
						<input
							name="product_name"
							type="text"
							placeholder="Enter Product Name"
							value={formData.product_name}
							onChange={handleChange}
							required
						/>
					</div>

					{/* Product URL */}
					<div className="ms-5 my-3">
						<input
							name="product_url"
							type="text"
							placeholder="Enter Product URL"
							value={formData.product_url}
							onChange={handleChange}
							required
						/>
					</div>

					<h4 className="ms-5 bold">Product Description</h4>

					{/* Brief Description */}
					<div className="ms-5 mb-3">
						<input
							name="product_brief_description"
							type="text"
							placeholder="Product Brief Description"
							value={formData.product_brief_description}
							onChange={handleChange}
							required
						/>
					</div>

					{/* Full Description */}
					<div className="ms-5 mb-3">
						<input
							name="product_description"
							type="text"
							placeholder="Product Full Description"
							value={formData.product_description}
							onChange={handleChange}
							required
						/>
					</div>

					{/* Product Image */}
					<div className="ms-5 mb-3">
						<input
							name="product_img"
							type="url"
							placeholder="Product Image"
							value={formData.product_img}
							onChange={handleChange}
							required
						/>
					</div>

					{/* Product Link */}
					<div className="ms-5 mb-3">
						<input
							name="product_link"
							type="url"
							placeholder="Product Link"
							value={formData.product_link}
							onChange={handleChange}
							required
						/>
					</div>

					<h4 className="ms-5 bold">Product Price</h4>

					{/* Starting Price */}
					<div className="ms-5 mb-3">
						<input
							name="starting_price"
							type="number"
							placeholder="Starting Price"
							value={formData.starting_price}
							onChange={handleChange}
							required
						/>
					</div>

					{/* Price Range */}
					<div className="ms-5 mb-3">
						<input
							name="price_range"
							type="number"
							placeholder="Price Range"
							value={formData.price_range}
							onChange={handleChange}
							required
						/>
					</div>

					<h4 className="ms-5 bold">User</h4>

					{/* User Name */}
					<div className="ms-5 mb-3">
						<input
							name="user_name"
							type="text"
							placeholder="User Name"
							value={formData.user_name}
							onChange={handleChange}
							required
						/>
					</div>

					{/* User Password */}
					<div className="ms-5 mb-3">
						<input
							name="user_password"
							type="password"
							placeholder="User Password"
							value={formData.user_password}
							onChange={handleChange}
							required
						/>
					</div>

					{/* Checkbox */}
					<div className=" ">
						<input
							className="checkBUtton  mb-3"
							type="checkbox"
							id="formBasicCheckbox"
							name="formBasicCheckbox"
							checked={formData.formBasicCheckbox}
							onChange={handleChange}
							required
						/>
						<label htmlFor="formBasicCheckbox">Check me out</label>
					</div>

					<button className="ms mb-5" type="submit">
						Submit
					</button>
				</form>
			</div>
		</section>
	);
};

export default DataSummit;
