import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>

		{/* <React.StrictMode> */}
			<App />
		{/* </React.StrictMode> */}
		,
	</BrowserRouter>
);
