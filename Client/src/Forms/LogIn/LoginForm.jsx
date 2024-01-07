import React, { useState } from "react";
import axios from "axios";
import "../sign-login.css";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		user_name: "",
		password: "",
	});

	const [errorMessage, setErrorMessage] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				"http://localhost:5000/login",
				formData
			);

			console.log("Login successful", response.data);

			setErrorMessage("");

			navigate("/DataSummit");
		} catch (error) {
			console.error("Error logging in", error);

			if (error.response && error.response.status === 401) {
				setErrorMessage("Invalid username or password");
			} else {
				setErrorMessage("Error logging in. Please try again.");
			}
		}
	};

	return (
		<section className="form-section">
			<div className="flex-items">
				<div>
					<h4 className="my-3 ms-5 pt-5 sign-up-tab">Don't Have Account</h4>
				</div>
				<div>
					<Link to="/signUp">
						<h4 className="my-3 ms-5 pt-5 sign-up-tab">
							<span className="">Sign Up</span>
						</h4>
					</Link>
				</div>
			</div>

			<div className="form-wraper">
				{errorMessage && <p className="error-message">{errorMessage}</p>}
				<form onSubmit={handleLogin}>
					<h2 className="ms-2">Login</h2>

					<div className="ms-5 mb-3">
						<input
							type="text"
							id="user_name"
							name="user_name"
							placeholder="Username"
							value={formData.user_name}
							onChange={handleChange}
							required
						/>
					</div>

					<div className="ms-5 mb-3">
						<input
							type="password"
							id="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							placeholder="Password"
							required
						/>
					</div>

					<div className="ms-5 pb-4 mb">
						<button type="submit">Login</button>
					</div>

						
						<div className="my-3 pb-5 ms-5 pt-5 ">
							<Link to="/signUp">
								<h4 >
									<span className="">Forget the Password ?</span>
								</h4>
							</Link>
						</div>
					
				</form>
			</div>
		</section>
	);
};

export default LoginForm;
