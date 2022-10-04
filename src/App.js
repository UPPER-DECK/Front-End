import { Box, Typography } from "@mui/material";
import HomeTyCapStyle from "./Background/HomeTyCapStyle";
import HomeTyDescStyle from "./Background/HomeTyDescStyle";
import HomeTyStyle from "./Background/HomeTyStyle";
import myStyle from "./Background/myStyle";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";

function App() {
	return (
		<Box className="App">
			<div style={myStyle}>
				<ResponsiveAppBar />

				{/* <Typography variant="h2" textAlign="center" sx={{ color: "white.main", fontWeight: 400 } }>
					Upper Deck
				</Typography> */}

				<Typography variant="h3" style={HomeTyStyle}>
					UPPER DECK
				</Typography>
				<Typography variant="h4" style={HomeTyCapStyle}>
					Learn, Build, Share, Repeat.
				</Typography>
				<Typography variant="h6" style={HomeTyDescStyle}>
					Slip your body and mind into the spirit...
				</Typography>
			</div>
		</Box>
	);
}

export default App;
