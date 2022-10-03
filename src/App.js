import { Box, Typography } from "@mui/material";
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

				<Typography variant="h2" textAlign="center" sx={{ color: "white.main", fontWeight: 400 }}>
					Upper Deck
				</Typography>
			</div>
		</Box>
	);
}

export default App;
