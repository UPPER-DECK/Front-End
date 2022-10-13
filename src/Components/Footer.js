import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Avatar, Button, Typography } from "@mui/material";
import Image from "../Img/logo.png";
import FooterTitleStyles from "../Background/Footer/FooterTitleStyles";
import FooterGridStyles from "../Background/Footer/FooterGridStyles";
import theme from "../Background/Theme";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: "transparent",
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
	border: "none",
	// boxShadow: "none",
}));

export default function Footer() {
	return (
		<Box sx={{ width: 1, backgroundColor: theme.palette.lgreen.main, mt: 3 }}>
			<Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
				<Box gridColumn="span 8">
					<Item>
						<Avatar alt="footer icon" variant="rounded" src={Image} sx={FooterGridStyles} />
						<Typography sx={FooterTitleStyles}>Upper Deck</Typography>
					</Item>
				</Box>
				<Box gridColumn="span 4">
					<Item>
						<Box gridColumn="span 4">
							<Item>
								<Button href="/Dashboard" sx={{ color: "white.main" }}>
									Dashboard
								</Button>
							</Item>
						</Box>
						<Box gridColumn="span 4">
							<Item>
								<Button href="/Categories" sx={{ color: "white.main" }}>
									Categories
								</Button>
							</Item>
						</Box>
						<Box gridColumn="span 4">
							<Item>
								<Button href="/Contact" sx={{ color: "white.main" }}>
									Contact
								</Button>
							</Item>
						</Box>
					</Item>
				</Box>
				<Box gridColumn="span 4">
					<Item>xs=4</Item>
				</Box>
				<Box gridColumn="span 8">
					<Item>xs=8</Item>
				</Box>
			</Box>
		</Box>
	);
}
