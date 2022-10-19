import styled from "@emotion/styled";
import { Box, Card, CardContent, CardMedia, Divider, Grid, Paper, Typography } from "@mui/material";
import React from "react";
// import { useNavigate } from "react-router-dom";
import image1 from "../../Img/vihan.png";
import image2 from "../../Img/rakhitha.jpg";
import image3 from "../../Img/isuru.png";
import image4 from "../../Img/banuka.jpg";

const rows = [
	{
		id: 1,
		name: "H. D. D. H. Vihan",
		desc: "Creator",
		image: image1,
		body: "Self motivated and influenced .",
	},
	{
		id: 2,
		name: "V. M. R. D. Vimalaweera",
		desc: "Creator",
		image: image2,
		body: "Self motivated and influenced .",
	},
	{
		id: 3,
		name: "K. A. I. N. Kumara",
		desc: "Co-ordinator",
		image: image3,
		body: "Self motivated and influenced .",
	},
	{
		id: 4,
		name: "K. A. B. Prashantha",
		desc: "Co-ordinator",
		image: image4,
		body: "Self motivated and influenced .",
	},
];
export default function ContactCards() {
	const Item = styled(Paper)(({ theme }) => ({
		padding: theme.spacing(1),
		textAlign: "left",
		backgroundColor: "transparent",
		border: "none",
		boxShadow: "none",
	}));
	// const navigate = useNavigate();
	return (
		<Box sx={{ flexGrow: 1, mt: 5 }}>
			<Grid container spacing={1}>
				{rows.map((row) => (
					<Grid item xs={12} sm={6} md={3} lg={3}>
						<Item>
							<Box height="100%" display="flex" justifyContent="center">
								<Card sx={{ maxWidth: 345, borderRadius: 4, minWidth: 260 }}>
									<CardMedia component="img" height="240" image={row.image} alt="profile" sx={{ borderRadius: 2 }} />
									<CardContent>
										<Grid container spacing={2} sx={{}}>
											<Grid item xs={12} sm={12}>
												<Grid container>
													<Typography gutterBottom variant="h6" component="div" justify="space-evenly">
														{row.name}
													</Typography>
												</Grid>
												<Divider light />
											</Grid>

											<Grid item xs={12} sm={12}>
												<Grid container sx={{}}>
													<Typography gutterBottom variant="body2" color="text.secondary">
														{row.desc}
													</Typography>
												</Grid>
												<Divider light />
											</Grid>
										</Grid>
									</CardContent>
								</Card>
							</Box>
						</Item>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
