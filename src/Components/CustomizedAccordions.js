import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AccordionTitleStyles from "../Background/Dashboard/Varieties of bar/AccordionTitleStyles";
import AccordionContentStyles from "../Background/Dashboard/Varieties of bar/AccordionContentStyles";

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	"&:not(:last-child)": {
		borderBottom: 0,
	},
	"&:before": {
		display: "none",
	},
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />} {...props} />)(
	({ theme }) => ({
		backgroundColor: "primary",
		backgroundImage: "-webkit-linear-gradient(45deg, #336699 10%, #000000 100%)",
		backgroundSize: "100%",
		backgroundRepeat: "repeat",
		flexDirection: "row-reverse",
		"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
			transform: "rotate(90deg)",
		},
		"& .MuiAccordionSummary-content": {
			marginLeft: theme.spacing(1),
		},
	})
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
	const [expanded, setExpanded] = React.useState("panel1");

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<div>
			<Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")} sx={{ mt: 3, borderRadius: 2 }}>
				<AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{ color: "white.main", borderRadius: 2 }}>
					<Typography sx={AccordionTitleStyles}>Collapsible Group Item #1</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{ bgcolor: "lgrey.main" }}>
					<Typography sx={AccordionContentStyles}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
						dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")} sx={{ mt: 3, borderRadius: 2 }}>
				<AccordionSummary aria-controls="panel2d-content" id="panel2d-header" sx={{ color: "white.main", borderRadius: 2 }}>
					<Typography sx={AccordionTitleStyles}>Collapsible Group Item #2</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{ bgcolor: "lgrey.main" }}>
					<Typography sx={AccordionContentStyles}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
						dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")} sx={{ mt: 3, borderRadius: 2 }}>
				<AccordionSummary aria-controls="panel3d-content" id="panel3d-header" sx={{ color: "white.main", borderRadius: 2 }}>
					<Typography sx={AccordionTitleStyles}>Collapsible Group Item #3</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{ bgcolor: "lgrey.main" }}>
					<Typography sx={AccordionContentStyles}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
						dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
