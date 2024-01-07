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

function App() {
	return (
		<>
		<Header/>
			<Routes>
				
				<Route path="/" element={<Main />} />
				<Route path="/iphone" element={<Iphone />} />
				<Route path="/iphone/:productLink" element={<SinglePage />} />
				<Route path="/mac" element={<Mac />} />
				<Route path="/log-i" element={<LoginForm />} />
				<Route path="/signU" element={<SignupForm />} />
				<Route path="/DataSummit" element={<DataSummit />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/music" element={<Music />} />
				<Route path="/tv" element={<Tv />} />
				<Route path="/support" element={<Support />} />
				<Route path="/watch" element={<Watch />} />
				<Route path="/ipad" element={<Ipad />} />

				<Route path="/signUp/:DataSummit" element={<DataSummit />} />

				<Route path="*" element={<NotFound />} />
		
			</Routes>
			<Footer/>
		</>
	);
}

export default App;
