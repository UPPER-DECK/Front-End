import { Box } from "@mui/material";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import Image from "./Img/a1.jpg";

const myStyle = {
	backgroundImage: `url(${Image})`,
	height: "100vh",
	marginTop: "1px",
	fontSize: "50px",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
};

function App() {
	return (
		<Box className="App">
			<div style={myStyle}>
				<ResponsiveAppBar />

				<h1>Welcome</h1>
			</div>
		</Box>
	);
}

export default App;
