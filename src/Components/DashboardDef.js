import styled from "@emotion/styled";
import { Box, CssBaseline, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import ContentPhraseStyles from "../Background/Dashboard/What is bar/ContentPhraseStyles";
import DashboardGridStyle from "../Background/Dashboard/What is bar/DashboardGridStyles";
import DashboardImageStyle from "../Background/Dashboard/What is bar/DashboardImageStyles";
import TitleMainStyles from "../Background/Dashboard/What is bar/TitleMainStyles";
import TitleStyles from "../Background/Dashboard/What is bar/TitleStyles";

export default function DashboardDef() {
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
			<Typography variant="h4" color="white.main" sx={TitleStyles}>
				What is{" "}
				<Typography variant="h4" color="brown.main" sx={TitleMainStyles}>
					"Bar"?
				</Typography>
			</Typography>
			<Grid container spacing={0.5} sx={DashboardGridStyle}>
				<Grid item xs={12} sm={12} md={8} lg={8}>
					<Item>
						<Typography variant="h7" color="dgreen.main" sx={ContentPhraseStyles}>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
							since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum.
						</Typography>
					</Item>
				</Grid>
				<Grid item xs={12} sm={12} md={4} lg={4}>
					<Item>
						<Box
							component="img"
							variant="rounded"
							sx={DashboardImageStyle}
							alt="The house from the offer."
							src={
								"https://images.unsplash.com/photo-1471967183320-ee018f6e114a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2Mjc3MDM0Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
							}
						/>
					</Item>
				</Grid>
			</Grid>
		</Box>
	);
}
