import { Box } from "@mui/system";
import { IconButton, Typography } from "@mui/material";
import { useEffect } from "react";
import CatTyStyles from "../Background/Categories/CoverPage/CatTyStyles";
import CoverPageStyles from "../Background/Categories/CoverPage/CoverPageStyles";
import ResponsiveAppBar from "../Components/ResponsiveAppBar";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import TitleStyles from "../Background/Dashboard/What is bar/TitleStyles";
import TitleMainStyles from "../Background/Dashboard/What is bar/TitleMainStyles";
import "../Css/CatCss.css";
import CategroyCards from "../Components/Category/CategoryCards";

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
						href="#cate"
						aria-label="KeyboardDoubleArrowDownOutlinedIcon"
						onClick={(e) => {
							let cate = document.getElementById("cate");
							e.preventDefault();
							cate && cate.scrollIntoView({ behavior: "smooth", block: "start" });
							window.history.pushState("cate", "cate", "/cate");
						}}
					>
						<KeyboardDoubleArrowDownOutlinedIcon sx={{ fontSize: 60 }} />
					</IconButton>
				</Typography>
			</Box>
			<Box id="cate">
				<Typography variant="h4" color="white.main" sx={TitleStyles}>
					Select {">"}
					<Typography variant="h4" color="brown.main" sx={TitleMainStyles}>
						{">"} Below
					</Typography>
				</Typography>
				<CategroyCards />
			</Box>
		</Box>
	);
}
