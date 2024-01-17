import React from "react";
import Main from "./Main/Main";
// import SharedPages from "./SharedPages";
import Iphone from "./Iphone/Iphone";
import LoginForm from "./Forms/LogIn/LoginForm";
import DataSummit from "./Forms/DataSummit/DataSummit";
import Header from "./Header/Header";
import NotFound from "./NotFound/NotFound";
import { Route, Routes } from "react-router-dom";
import SinglePage from "./Iphone/SinglePage";
import Mac from "./OtherPages/Mac";
import SignupForm from "./Forms/SignUpForm/SignUpForm";
import Watch from "./OtherPages/Watch";
import Support from "./OtherPages/Support";
import Cart from "./OtherPages/Cart";
import Tv from "./OtherPages/Tv";
import Music from "./OtherPages/Music";
import Ipad from "./OtherPages/Ipad";
import Footer from "./Footer/Footer";
import IPhone from "./Iphone/Iphone";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/iphone" element={<Iphone />} />

				<Route path="/iphone/:productLink" element={<SinglePage />} />
				<Route path="/mac" element={<IPhone />} />
				<Route path="/log-i" element={<LoginForm />} />
				<Route path="/signU" element={<SignupForm />} />
				<Route path="/DataSummit" element={<DataSummit />} />
				<Route path="/cart" element={<IPhone />} />
				<Route path="/music" element={<IPhone />} />
				<Route path="/tv" element={<IPhone />} />
				<Route path="/support" element={<IPhone />} />
				<Route path="/watch" element={<IPhone />} />
				<Route path="/ipad" element={<IPhone />} />

				<Route path="/signUp/:DataSummit" element={<DataSummit />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
