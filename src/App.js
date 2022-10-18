import { Box } from "@mui/material";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import ScrollToTop from "./Components/ScrollToTop";
import Footerin from "./Components/Footerin";
import Categories from "./Pages/Categories";
import Dashboard from "./Pages/Dashboard";
import Contact from "./Pages/Contact";

function App() {
	return (
		<Box className="App">
			<BrowserRouter>
				<ScrollToTop />
				{/* <SmoothScrollbar> */}
				<Routes>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/categories" element={<Categories />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/" element={<Dashboard />} />
				</Routes>
				{/* <Footer /> */}
				<Footerin />
				{/* </SmoothScrollbar> */}
			</BrowserRouter>
		</Box>
	);
}

export default App;
