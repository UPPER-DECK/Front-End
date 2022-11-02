import {createTheme} from "@mui/material/styles";

let theme = createTheme({
    status: {
        danger: "#e53e3e",
    },
    palette: {
        background: {
            default: "#D3D3D3",
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
        lgrey: {
            main: "#D3D3D3",
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
        transparent: {
            main: "#00FFFFFF",
        },
    },
});

theme = createTheme(theme, {
    typography: {
        h1: {
            fontSize: 45,
            [theme.breakpoints.up("sm")]: {
                fontSize: 80,
            },
        },
        h2: {
            fontSize: 40,
            [theme.breakpoints.up("sm")]: {
                fontSize: 70,
            },
        },
        h3: {
            fontSize: 35,
            [theme.breakpoints.up("sm")]: {
                fontSize: 60,
            },
        },
        h4: {
            fontSize: 30,
            [theme.breakpoints.up("sm")]: {
                fontSize: 40,
            },
        },
        h5: {
            fontSize: 20,
            [theme.breakpoints.up("sm")]: {
                fontSize: 25,
            },
        },
        h6: {
            fontSize: 15,
            [theme.breakpoints.up("sm")]: {
                fontSize: 20,
            },
        },
        h7: {
            fontSize: 10,
            [theme.breakpoints.up("sm")]: {
                fontSize: 18,
            },
        },
        h8: {
            fontSize: 8,
            [theme.breakpoints.up("sm")]: {
                fontSize: 12,
            },
        },
    },
});

export default theme;
