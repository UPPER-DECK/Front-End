import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";

export default function Form() {
	return (
		<Box>
			<Typography variant="h6" gutterBottom>
				Shipping address
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<TextField required id="firstName" name="firstName" label="First name" fullWidth autoComplete="given-name" variant="outlined" />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<TextField required id="firstName" name="firstName" label="First name" fullWidth autoComplete="given-name" variant="outlined" />
				</Grid>
			</Grid>
		</Box>
	);
}
