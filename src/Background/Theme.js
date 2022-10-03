import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	status: {
		danger: "#e53e3e",
	},
	palette: {
		background: {
			default: "#2F4454",
		},
		primary: {
			main: "#0971f1",
			darker: "#053e85",
		},
		neutral: {
			main: "#64748B",
			contrastText: "#fff",
		},
		black: {
			main: "#0B0C10",
		},
		white: {
			main: "#FFFFFF",
		},

		grey: {
			main: "#2F4454",
		},
		brown: {
			main: "#2E151B",
		},
		pink: {
			main: "#DA7B93",
		},
		lgreen: {
			main: "#376E6F",
		},
		dgreen: {
			main: "#1C3334",
		},
	},
});

export default theme;
