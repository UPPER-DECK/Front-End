import styled from "@emotion/styled";
import { Box, CssBaseline, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import DashboardGridStyle from "../../Background/Dashboard/What is bar/DashboardGridStyles";
import DashboardImageStyle from "../../Background/Dashboard/What is bar/DashboardImageStyles";
import TitleMainVarStyles from "../../Background/Dashboard/Varieties of bar/TitleMainVarStyles";
import TitleVarStyles from "../../Background/Dashboard/Varieties of bar/TitleVarStyles";
import CustomizedAccordions from "./CustomizedAccordions";

export default function DashboardVar() {
	const Item = styled(Paper)(({ theme }) => ({
		padding: theme.spacing(1),
		textAlign: "left",
		backgroundColor: "transparent",
		border: "none",
		boxShadow: "none",
	}));
	return (
		<Box sx={{ flexGrow: 1 }} id="what">
			<CssBaseline />
			<Typography variant="h4" color="white.main" sx={TitleVarStyles}>
				Varieties of{" "}
				<Typography variant="h4" color="brown.main" sx={TitleMainVarStyles}>
					"Bars"?
				</Typography>
			</Typography>
			<Grid container spacing={0.5} sx={DashboardGridStyle}>
				<Grid item xs={12} sm={12} md={4} lg={4}>
					<Item>
						<Box
							component="img"
							variant="rounded"
							sx={DashboardImageStyle}
							alt="The house from the offer."
							src={
								"https://images.unsplash.com/photo-1508253730651-e5ace80a7025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
							}
						/>
					</Item>
				</Grid>
				<Grid item xs={12} sm={12} md={8} lg={8}>
					<Item>
						<CustomizedAccordions />
					</Item>
				</Grid>
			</Grid>
		</Box>
	);
}
