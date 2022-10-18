import styled from "@emotion/styled";
import { Box, CssBaseline, Grid, Paper, Typography } from "@mui/material";
import React from "react";

export default function CategroyCards() {
	const Item = styled(Paper)(({ theme }) => ({
		padding: theme.spacing(1),
		textAlign: "left",
		backgroundColor: "transparent",
		border: "none",
		boxShadow: "none",
	}));
	return (
		<Box sx={{ flexGrow: 1 }} id="what">
			<CssBaseline />
		</Box>
	);
}
