import { Box } from "@mui/system";
import { IconButton, Typography } from "@mui/material";
import { useEffect } from "react";
import ResponsiveAppBar from "../Components/ResponsiveAppBar";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import ConCoverPageStyles from "../Background/Contact/CoverPage/ConCoverPageStyles";
import ConTyStyles from "../Background/Contact/CoverPage/ConTyStyles";
import "../Css/Contact.css";
import TitleStyles from "../Background/Dashboard/What is bar/TitleStyles";
import TitleMainStyles from "../Background/Dashboard/What is bar/TitleMainStyles";
import ContactCards from "../Components/Contact/ContactCards";

export default function Contact() {
	useEffect(() => {
		let url = window.location.href.split("/");
		let target = url[url.length - 1].toLowerCase();
		let element = document.getElementById(target);
		element && element.scrollIntoView({ behavior: "smooth", block: "start" });
	}, []);
	return (
		<Box>
			<Box sx={ConCoverPageStyles}>
				<ResponsiveAppBar />
				<Typography variant="h1" noWrap sx={ConTyStyles} className="glow2">
					CONTACT
				</Typography>

				<Typography sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 3 }}>
					<IconButton
						color="lgreen"
						href="#cont"
						aria-label="KeyboardDoubleArrowDownOutlinedIcon"
						onClick={(e) => {
							let cont = document.getElementById("cont");
							e.preventDefault();
							cont && cont.scrollIntoView({ behavior: "smooth", block: "start" });
							window.history.pushState("cont", "cont", "/cont");
						}}
					>
						<KeyboardDoubleArrowDownOutlinedIcon sx={{ fontSize: 60 }} />
					</IconButton>
				</Typography>
			</Box>
			<Box id="cont">
				<Typography variant="h4" color="white.main" sx={TitleStyles}>
					Our
					<Typography variant="h4" color="brown.main" sx={TitleMainStyles}>
						"Team"
					</Typography>
				</Typography>
				<ContactCards />
			</Box>
		</Box>
	);
}
