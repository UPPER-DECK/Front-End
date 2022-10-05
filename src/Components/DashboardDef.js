import { Typography } from "@mui/material";
import React from "react";
import TitleMainStyles from "../Background/TitleMainStyles";
import TitleStyles from "../Background/TitleStyles";

export default function DashboardDef() {
	return (
		<div>
			<Typography variant="h3" sx={TitleStyles}>
				What is {""}
				<Typography variant="h3" sx={TitleMainStyles}>
					Bar?
				</Typography>
			</Typography>
		</div>
	);
}
