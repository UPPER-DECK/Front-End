import { Box } from "@mui/system";
import { useEffect } from "react";
import ResponsiveAppBar from "../Components/ResponsiveAppBar";
import styled from "@emotion/styled";
import { Grid, Paper } from "@mui/material";
import ProfileCovPageStyles from "../Background/Profile/ProfileCovPageStyles";

export default function ProfilePage() {
	useEffect(() => {
		let url = window.location.href.split("/");
		let target = url[url.length - 1].toLowerCase();
		let element = document.getElementById(target);
		element && element.scrollIntoView({ behavior: "smooth", block: "start" });
	}, []);

	const Item = styled(Paper)(({ theme }) => ({
		padding: theme.spacing(1),
		textAlign: "left",
		backgroundColor: "transparent",
		border: "none",
		boxShadow: "none",
	}));
	return (
		<Box>
			<Box sx={ProfileCovPageStyles}>
				<ResponsiveAppBar />
			</Box>
			<Box>
				<Grid container spacing={1}>
					<Grid item xs={12} sm={12} md={12} lg={12}>
						<Item></Item>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}
