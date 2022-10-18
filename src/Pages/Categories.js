import { Box } from "@mui/system";
import { IconButton, Typography } from "@mui/material";
import { useEffect } from "react";
import CatTyStyles from "../Background/Categories/CoverPage/CatTyStyles";
import CoverPageStyles from "../Background/Categories/CoverPage/CoverPageStyles";
import ResponsiveAppBar from "../Components/ResponsiveAppBar";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import "../Css/CatCss.css";
import CategroyCards from "../Components/CategoryCards";

export default function Categories() {
	useEffect(() => {
		let url = window.location.href.split("/");
		let target = url[url.length - 1].toLowerCase();
		let element = document.getElementById(target);
		element && element.scrollIntoView({ behavior: "smooth", block: "start" });
	}, []);
	return (
		<Box>
			<Box sx={CoverPageStyles}>
				<ResponsiveAppBar />
				<Typography variant="h1" noWrap sx={CatTyStyles} className="glow1">
					CATEGORIES
				</Typography>

				<Typography sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 3 }}>
					<IconButton
						color="brown"
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
			<CategroyCards />
		</Box>
	);
}
