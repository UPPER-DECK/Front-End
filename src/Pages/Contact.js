import { Box } from "@mui/system";
import { IconButton, Typography } from "@mui/material";
import { useEffect } from "react";
import ResponsiveAppBar from "../Components/ResponsiveAppBar";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import ConCoverPageStyles from "../Background/Contact/CoverPage/ConCoverPageStyles";
import ConTyStyles from "../Background/Contact/CoverPage/ConTyStyles";
import "../Css/Contact.css";

export default function Contact() {
	useEffect(() => {
		let url = window.location.href.split("/");
		let target = url[url.length - 1].toLowerCase();
		let element = document.getElementById(target);
		element && element.scrollIntoView({ behavior: "smooth", block: "start" });
	}, []);
	return (
		<Box sx={ConCoverPageStyles}>
			<ResponsiveAppBar />
			<Typography variant="h1" noWrap sx={ConTyStyles} className="glow2">
				CONTACT
			</Typography>

			<Typography sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 3 }}>
				<IconButton
					color="lgreen"
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
	);
}
