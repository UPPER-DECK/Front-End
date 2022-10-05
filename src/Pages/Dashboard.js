import { Typography } from "@mui/material";
import React from "react";
import HomeTyCapStyle from "../Background/HomeTyCapStyle";
import HomeTyDescStyle from "../Background/HomeTyDescStyle";
import HomeTyStyle from "../Background/HomeTyStyle";
import myStyle from "../Background/myStyle";
import DashboardDef from "../Components/DashboardDef";
import ResponsiveAppBar from "../Components/ResponsiveAppBar";

export default function Dashboard() {
	return (
		<div>
			<div style={myStyle}>
				<ResponsiveAppBar />
				<Typography variant="h3" sx={HomeTyStyle}>
					UPPER DECK
				</Typography>
				<Typography variant="h4" sx={HomeTyCapStyle}>
					Learn, Build, Share, Repeat.
				</Typography>
				<Typography variant="h6" sx={HomeTyDescStyle}>
					Slip your body and mind into the spirit...
				</Typography>
			</div>
			<DashboardDef />
		</div>
	);
}
