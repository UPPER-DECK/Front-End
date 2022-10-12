import styled from "@emotion/styled";
import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import FooterGridStyles from "../Background/Footer/FooterGridStyles";
import FooterTitleStyles from "../Background/Footer/FooterTitleStyles";
import theme from "../Background/Theme";
import Image from "../Img/logo.png";

const Footer = () => {
	const Item = styled(Paper)(({ theme }) => ({
		padding: theme.spacing(1),
		textAlign: "left",
		backgroundColor: "transparent",
		border: "none",
		boxShadow: "none",
	}));
	return (
		<Box sx={{ bgcolor: theme.palette.lgreen.main }}>
			<Grid container spacing={0.1} sx={FooterGridStyles}>
				<Grid item xs={2}>
					<Item>
						<Grid container>
							<Grid item xs={2} sx={{ mt: 3 }}>
								<Item>
									<Avatar alt="footer icon" variant="rounded" src={Image} />
								</Item>
							</Grid>
							<Grid item xs={8}>
								<Item>
									<Typography sx={FooterTitleStyles}>Upper Deck</Typography>
								</Item>
							</Grid>
						</Grid>
					</Item>
				</Grid>
				<Grid item xs={6}>
					<Item>
						<Grid container direction="row" justifyContent="flex-end" alignItems="center">
							<Grid item xs={2}>
								<Item>
									<Button href="#text-buttons" sx={{ color: "white.main" }}>
										Dashboard
									</Button>
								</Item>
							</Grid>
							<Grid item xs={2}>
								<Item>
									<Button href="#text-buttons" sx={{ color: "white.main" }}>
										Categories
									</Button>
								</Item>
							</Grid>
							<Grid item xs={2}>
								<Item>
									<Button href="#text-buttons" sx={{ color: "white.main" }}>
										Contact
									</Button>
								</Item>
							</Grid>
						</Grid>
					</Item>
				</Grid>
			</Grid>
		</Box>
	);
};
export default Footer;
