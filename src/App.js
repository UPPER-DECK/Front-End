import { Box } from "@mui/material";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";

import ScrollToTop from "./Components/ScrollToTop";

function App() {
	return (
		<Box className="App">
			<BrowserRouter>
				<ScrollToTop />
				{/* <SmoothScrollbar> */}
				<Routes>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/categories" element={<h1>categories</h1>} />
					<Route path="/contact" element={<h1>contact</h1>} />
					<Route path="/" element={<Dashboard />} />
				</Routes>
				{/* <Footer /> */}
				{/* </SmoothScrollbar> */}
			</BrowserRouter>
		</Box>
	);
}

export default App;
