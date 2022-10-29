import { Box } from "@mui/system";
import { useEffect } from "react";
import styled from "@emotion/styled";
import { Avatar, Grid, Paper, Stack, Typography } from "@mui/material";
import TitleMainStyles from "../../Background/Dashboard/What is bar/TitleMainStyles";

export default function AboutCover() {
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
			<Box>
				<Grid container spacing={1}>
					<Grid item xs={12} sm={12} md={12} lg={12}>
						<Item>
							<Typography
								variant="h6"
								color="brown.main"
								sx={{
									// fontFamily: "Lobster, cursive",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									fontWeight: 800,
									mt: 8,
									letterSpacing: ".3rem",
									backgroundRepeat: "repeat",
									backgroundClip: "text",
								}}
							>
								About Us
							</Typography>
						</Item>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={12}>
						<Item>
							<Typography variant="h5" color="grey.main" sx={TitleMainStyles}>
								We're on a mission to give
							</Typography>
							<Typography variant="h5" color="grey.main" sx={TitleMainStyles}>
								more accessible information about
							</Typography>
							<Typography
								component="span"
								variant="h4"
								sx={{
									color: "brown.main",
									fontFamily: "Poppins, sans-serif",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									fontWeight: 800,
									mt: 1,
								}}
							>
								Hotel Management
							</Typography>
						</Item>
					</Grid>

					<Grid item xs={12} sm={12} md={12} lg={12}>
						<Item>
							<Stack direction="row" spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 4 }}>
								<Avatar
									alt="fb"
									variant="rounded"
									src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
								/>
								<Avatar
									alt="insta"
									variant="rounded"
									src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
								/>
								<Avatar
									alt="whatsapp"
									variant="rounded"
									src="https://images.unsplash.com/photo-1633354931104-6b67e9878afd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2Njk3MzUxNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
								/>
								<Avatar
									alt="twt"
									variant="rounded"
									src="https://images.unsplash.com/photo-1611162618479-ee3d24aaef0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2Njk3NDA0NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
								/>
								<Avatar
									alt="Tel"
									variant="rounded"
									src="https://images.unsplash.com/photo-1633355336262-99a2cfa05dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2Njk3NDE1OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
								/>
								<Avatar
									alt="Lin"
									variant="rounded"
									src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MjcxMjM3OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
								/>
							</Stack>
						</Item>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={12}>
						<Item>
							<Typography
								variant="h8"
								color="neutral.main"
								sx={{
									// fontFamily: "Lobster, cursive",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									fontWeight: 800,
									ml: 1,
									mt: 3,
									mb: 5,
									letterSpacing: ".3rem",
									backgroundRepeat: "repeat",
									backgroundClip: "text",
								}}
							>
								Our mission is to empower anyone who needs. We're reducing the entry barrier, making skills accessible.
							</Typography>
						</Item>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}
