import { Divider, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import HomeTyCapStyle from "../Background/Dashboard/HomeTyCapStyle";
import HomeTyDescStyle from "../Background/Dashboard/HomeTyDescStyle";
import HomeTyStyle from "../Background/Dashboard/HomeTyStyle";
import myStyle from "../Background/myStyle";
import DashboardDef from "../Components/DashboardDef";
import ResponsiveAppBar from "../Components/ResponsiveAppBar";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import DashboardVar from "../Components/DashboardVar";

export default function Dashboard() {
	useEffect(() => {
		let url = window.location.href.split("/");
		let target = url[url.length - 1].toLowerCase();
		let element = document.getElementById(target);
		element && element.scrollIntoView({ behavior: "smooth", block: "start" });
	}, []);
	return (
		<Box>
			<Box sx={myStyle}>
				<ResponsiveAppBar />
				<Typography variant="h1" noWrap sx={HomeTyStyle}>
					UPPER DECK
				</Typography>
				{/* <Typography variant="h1" noWrap sx={{ ...HomeTyStyle, display: { xs: "none", md: "flex" } }}>
					UPPER DECK
				</Typography> */}
				{/* <Typography variant="h3" noWrap sx={{ ...HomeTyStyle, display: { xs: "flex", md: "none" } }}>
					UPPER DECK
				</Typography> */}
				<Typography variant="h4" sx={HomeTyCapStyle}>
					Learn, Build, Share, Repeat.
				</Typography>

				<Typography variant="h6" noWrap sx={HomeTyDescStyle}>
					Slip your body and mind into the spirit...
				</Typography>
				<Typography sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 13 }}>
					<IconButton
						color="pink"
						href="#what"
						aria-label="KeyboardDoubleArrowDownOutlinedIcon"
						onClick={(e) => {
							let what = document.getElementById("what");
							e.preventDefault();
							what && what.scrollIntoView({ behavior: "smooth", block: "start" });
							window.history.pushState("what", "what", "/what");
						}}
					>
						<KeyboardDoubleArrowDownOutlinedIcon sx={{ fontSize: 60 }} />
					</IconButton>
				</Typography>
			</Box>
			<DashboardDef />
			<Divider />
			<DashboardVar />
		</Box>
	);
}
