import * as React from "react";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import { Button, Card, CardActions, CardContent, Grid, MenuItem, Paper, TextField } from "@mui/material";
import styled from "@emotion/styled";
import AddImage from "../Components/Post/AddImage";

const Categories = [
	{
		value: "Glasswares",
		label: "Glasswares",
	},
	{
		value: "Bar",
		label: "Bar Equipments",
	},
	{
		value: "Drink",
		label: "Drink Making Methods",
	},
	{
		value: "Beverages",
		label: "Beverages",
	},
	{
		value: "Services",
		label: "Services",
	},
	{
		value: "Cocktails",
		label: "Cocktails",
	},
];

export default function Form() {
	const [Category, setCategory] = React.useState("Glassware");

	const handleChange = (event) => {
		setCategory(event.target.value);
	};
	const Item = styled(Paper)(({ theme }) => ({
		padding: theme.spacing(1),
		textAlign: "left",
		backgroundColor: "transparent",
		border: "none",
		[`& fieldset`]: {
			borderRadius: 10,
		},
		// borderRadius: 25,
		boxShadow: "none",
	}));
	return (
		<Box>
			<Grid container spacing={1}>
				<Card sx={{ minWidth: 275 }}>
					<CardContent>
						<Grid item xs={12} sm={12} md={12} lg={12}>
							<Item>
								<Typography variant="h3" color="text.secondary" gutterBottom>
									Let's Post
								</Typography>
							</Item>
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={12}>
							<Item>
								<Typography color="text.secondary">Add Your Thoughts Here . . . !</Typography>
							</Item>
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={12}>
							<Item>Title</Item>
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={12}>
							<Item>
								<TextField placeholder="Add a Title" />
							</Item>
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={12}>
							<Item>Caption</Item>
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={12}>
							<Item>
								<TextField multiline rows={2} maxRows={4} placeholder="Add a Caption" />
							</Item>
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={12}>
							<Item>Category</Item>
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={12}>
							<Item>
								<TextField select value={Category} onChange={handleChange}>
									{Categories.map((option) => (
										<MenuItem key={option.value} value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</TextField>
							</Item>
						</Grid>
						<Grid item xs={6} sm={6} md={6} lg={6}>
							<Item>
								<AddImage />
							</Item>
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={12}>
							<Item>
								<CardActions>
									<Button variant="contained" color="secondary" sx={{ mt: 1 /* margin top */ }}>
										Publish
									</Button>
								</CardActions>
							</Item>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
		</Box>
	);
}
