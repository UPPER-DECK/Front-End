import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

export default function AddImage() {
	const [file, setFile] = useState();
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}
	return (
		<Box className="App">
			<IconButton color="primary" aria-label="upload picture" component="label">
				<input hidden accept="image/*" type="file" onChange={handleChange} />
				{file == null ? <PhotoCamera /> : null}
			</IconButton>
			{/* <input type="file" onChange={handleChange} /> */}
			{file != null ? <img height="150" width="200" sx={{ backgroundSize: "cover" }} src={file} alt="img" /> : null}
		</Box>
	);
}
