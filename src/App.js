import { Box } from "@mui/material";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Footerin from "./Components/Footer/Footerin";
import Categories from "./Pages/Categories";
import Dashboard from "./Pages/Dashboard";
import Contact from "./Pages/Contact";
import LoginPage from "./Pages/LoginPage";
import AboutPage from "./Pages/AboutPage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
	return (
		<Box className="App">
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/categories" element={<Categories />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/" element={<Dashboard />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/profile" element={<ProfilePage />} />
				</Routes>
				<Footerin />
			</BrowserRouter>
		</Box>
	);
}

export default App;
