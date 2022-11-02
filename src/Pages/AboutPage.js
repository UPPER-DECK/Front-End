import { Box } from "@mui/system";
import { useEffect } from "react";
import ResponsiveAppBar from "../Components/ResponsiveAppBar";
import AboutCovPageStyles from "../Background/About/AboutCovPageStyles";
import AboutCover from "../Components/About/AboutCover";
import { CssBaseline } from "@mui/material";
import UltimateGoal from "../Components/About/UltimateGoal";
import Team from "../Components/About/Team";

export default function AboutPage() {
	useEffect(() => {
		let url = window.location.href.split("/");
		let target = url[url.length - 1].toLowerCase();
		let element = document.getElementById(target);
		element && element.scrollIntoView({ behavior: "smooth", block: "start" });
	}, []);

	return (
		<Box>
			<CssBaseline />
			<Box sx={AboutCovPageStyles}>
				<ResponsiveAppBar />
			</Box>
			<AboutCover />
			<UltimateGoal />
			<Team />
		</Box>
	);
}
