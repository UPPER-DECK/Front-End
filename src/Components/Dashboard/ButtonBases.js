import * as React from "react";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const images = [
    {
        url: "https://images.unsplash.com/photo-1599595344070-c456bea6ee98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NTU3NTI2Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        title: "OPENING UP",
        width: "40%",
    },
    {
        url: "https://images.unsplash.com/photo-1520531971933-0ad2edaea16e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NTU3NjkwOQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        title: "CLOSING UP",
        width: "30%",
    },
];

const ImageButton = styled(ButtonBase)(({theme}) => ({
    position: "relative",
    height: 200,

    [theme.breakpoints.down("sm")]: {
        width: "100% !important", // Overrides inline-style
        height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
        zIndex: 1,
        "& .MuiImageBackdrop-root": {
            opacity: 0.15,
        },
        "& .MuiImageMarked-root": {
            opacity: 0,
        },
        "& .MuiTypography-root": {
            border: "4px solid currentColor",
        },
    },
}));

const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
});

const Image = styled("span")(({theme}) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({theme}) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({theme}) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
}));

export default function ButtonBases() {
    return (
        < Box
    sx = {
    {
        display: "flex", flexWrap
    :
        "wrap", minWidth
    :
        300, width
    :
        "100%", justifyContent
    :
        "center", alignItems
    :
        "center"
    }
}>
    {
        images.map((image) => (
            < ImageButton
        focusRipple
        key = {image.title}
        style = {
        {
            width: image.width,
        }
    }
    >
    <
        ImageSrc
        style = {
        {
            backgroundImage: `url(${image.url})`
        }
    }
        />
        < ImageBackdrop
        className = "MuiImageBackdrop-root" / >
            < Image >
            < Typography
        component = "span"
        variant = "subtitle1"
        color = "inherit"
        sx = {
        {
            position: "relative",
                p
        :
            4,
                pt
        :
            2,
                pb
        :
            (theme) => `calc(${theme.spacing(1)} + 6px)`,
        }
    }
    >
        {
            image.title
        }
    <
        ImageMarked
        className = "MuiImageMarked-root" / >
            < /Typography>
            < /Image>
            < /ImageButton>
    ))
    }
<
    /Box>
)
    ;
}
