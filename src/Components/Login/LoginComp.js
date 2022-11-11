import * as React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Box } from "@material-ui/core";

function ModeToggle() {
	const { mode, setMode } = useColorScheme();
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) {
		return null;
	}

	return (
		<Button
			variant="plain"
			onClick={() => {
				setMode(mode === "light" ? "dark" : "light");
			}}
		>
			{mode === "light" ? <LightModeIcon sx={{ fontSize: 25, color: "grey.main" }} /> : <DarkModeIcon sx={{ fontSize: 25, color: "grey.main" }} />}
		</Button>
	);
}

export default function LoginComp() {
	return (
		<Box>
			<CssVarsProvider>
				<Box>
					<Sheet
						sx={{
							width: 300,
							mx: "auto", // margin left & right
							my: 4, // margin top & botom
							py: 3, // padding top & bottom
							px: 2, // padding left & right
							display: "flex",
							flexDirection: "column",
							gap: 2,
							borderRadius: "sm",
							boxShadow: "md",
						}}
						variant="outlined"
					>
						<Box>
							<Typography level="h4" component="h1">
								<b>Welcome!</b>
								<ModeToggle />
							</Typography>
							<Typography level="body2">Sign in to continue.</Typography>
						</Box>
						<TextField
							// html input attribute
							name="email"
							type="email"
							placeholder="example@email.com"
							// pass down to FormLabel as children
							label="Email"
						/>
						<TextField name="password" type="password" placeholder="password" label="Password" />
						<Button sx={{ mt: 1 /* margin top */ }}>Log in</Button>
					</Sheet>
				</Box>
			</CssVarsProvider>
		</Box>
	);
}
