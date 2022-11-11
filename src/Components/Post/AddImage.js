import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import React, { useState } from "react";

export default function AddImage() {
	const [file, setFile] = useState();
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}

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
		<div className="App">
			<Item>Add Image:</Item>
			<input type="file" onChange={handleChange} />
			<img src={file} alt="img" />
		</div>
	);
}
