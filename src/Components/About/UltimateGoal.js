import { Box } from "@mui/system";
import { useEffect } from "react";
import styled from "@emotion/styled";
import { Grid, Paper, Typography } from "@mui/material";

export default function UltimateGoal() {
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
			<Box sx={{ backgroundImage: "-webkit-linear-gradient(45deg, #536976 10%, #BBD2C5  100%)" }}>
				<Grid container spacing={1}>
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<Item>
							<Typography
								variant="h4"
								sx={{
									fontFamily: "Poppins, sans-serif",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									fontWeight: 800,
									mt: 8,
									color: "whitesmoke",
									// letterSpacing: ".3rem",
									// backgroundRepeat: "repeat",
									// backgroundClip: "text",
								}}
							>
								OUR ULTIMATE GOAL
							</Typography>
						</Item>
					</Grid>

					<Grid item xs={12} sm={12} md={6} lg={6}>
						<Item>
							<Box
								component="img"
								alt="The house from the offer."
								src={"https://res.cloudinary.com/dppd70es5/image/upload/v1667063254/Restaurant%20squad/About%20Images/pngwing.com_3_skwljo.png"}
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									mt: 5,
									ml: 5,
								}}
							/>
						</Item>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}
