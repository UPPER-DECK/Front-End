import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Avatar, Button, Typography } from "@mui/material";
import Image from "../Img/logo.png";
import theme from "../../Background/Theme";
import FooterTitleStyles from "../../Background/Dashboard/Footer/FooterTitleStyles";
import FooterGridStyles from "../../Background/Dashboard/Footer/FooterGridStyles";
import { Divider } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
			<Box display="grid" gridTemplateColumns="repeat(12, 1fr)">
				<Box gridColumn="span 2">
					<Item>
						<Avatar alt="footer icon" variant="rounded" src={Image} sx={FooterGridStyles} />
					</Item>
				</Box>
				<Box gridColumn="span 4">
					<Item>
						<Typography sx={FooterTitleStyles}>UPPER DECK</Typography>
					</Item>
				</Box>
				<Box gridColumn="span 2">
					<Item>
						<Button href="/Dashboard" sx={{ color: "white.main", mt: 4 }}>
							Dashboard
						</Button>
					</Item>
				</Box>
				<Box gridColumn="span 2">
					<Item>
						<Button href="/Categories" sx={{ color: "white.main", mt: 4 }}>
							Categories
						</Button>
					</Item>
				</Box>
				<Box gridColumn="span 2">
					<Item>
						<Button href="/Contact" sx={{ color: "white.main", mt: 4 }}>
							Contact
						</Button>
					</Item>
				</Box>

				<Box gridColumn="span 12">
					<Item>
						<Divider />
					</Item>
				</Box>
				<Box gridColumn="span 8">
					<Item sx={{ fontSize: 12, display: "flex", justifyContent: "left", alignItems: "left", ml: 10 }}>
						&copy; 2022 Upper Deck. All right reserved.
					</Item>
				</Box>
				<Box gridColumn="span 1">
					<Item>
						<FacebookIcon sx={{ fontSize: 25, mr: 0 }} />
					</Item>
				</Box>
				<Box gridColumn="span 1">
					<Item>
						<InstagramIcon sx={{ fontSize: 25, mr: 0.1 }} />
					</Item>
				</Box>
				<Box gridColumn="span 1">
					<Item>
						<TwitterIcon sx={{ fontSize: 25, mr: 0.1 }} />
					</Item>
				</Box>
				<Box gridColumn="span 1">
					<Item>
						<LinkedInIcon sx={{ fontSize: 25, mr: 10 }} />
					</Item>
				</Box>
			</Box>
		</Box>
	);
}
