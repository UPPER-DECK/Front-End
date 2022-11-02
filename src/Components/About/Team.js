import {Box} from "@mui/system";
import {useEffect} from "react";
import styled from "@emotion/styled";
import {Grid, Paper, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default function Team() {
    useEffect(() => {
        let url = window.location.href.split("/");
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
        element && element.scrollIntoView({behavior: "smooth", block: "start"});
    }, []);

    const Item = styled(Paper)(({theme}) => ({
        padding: theme.spacing(1),
        textAlign: "center",
        backgroundColor: "transparent",
        border: "none",
        boxShadow: "none",
    }));
    return (
        < Box >
        < Box >
        < Grid
    container
    spacing = {1} >
        < Grid
    item
    xs = {12}
    sm = {12}
    md = {12}
    lg = {12} >
        < Item >
        < Typography
    variant = "h4"
    sx = {
    {
        fontFamily: "Lobster, cursive",
            display
    :
        "flex",
            justifyContent
    :
        "left",
            alignItems
    :
        "left",
            fontWeight
    :
        800,
            mt
    :
        8,
            ml
    :
        3,
            color
    :
        "dgreen.main",
        // letterSpacing: ".3rem",
        // backgroundRepeat: "repeat",
        // backgroundClip: "text",
    }
}
>
    TEAM
    < /Typography>
    < /Item>
    < /Grid>
    < Grid
    item
    xs = {12}
    sm = {12}
    md = {12}
    lg = {12} >
        < Item >
        < Typography
    variant = "h6"
    sx = {
    {
        // fontFamily: "Lobster, cursive",
        fontFamily: "Poppins, sans-serif",
            display
    :
        "flex",
            justifyContent
    :
        "left",
            alignItems
    :
        "left",
            // fontWeight: 800,
            mt
    :
        5,
            ml
    :
        3,
            color
    :
        "dgreen.main",
        // letterSpacing: ".3rem",
        // backgroundRepeat: "repeat",
        // backgroundClip: "text",
    }
}
>
    UPPER
    DECK
    is
    maintained
    by
    a
    group
    of
    invaluable
    core
    contributors,
    with the massive
    support
    and
    involvement
    of
    the
    community.
    < /Typography>
    < /Item>
    < /Grid>
    < Grid
    item
    xs = {6}
    sm = {6}
    md = {2}
    lg = {2} >
        < Item >
        {" "}
        < Button
    href = "/contact"
    variant = "contained"
    size = "large"
    sx = {
    {
        backgroundColor: "lgreen.main", display
    :
        "flex", justifyContent
    :
        "center", alignItems
    :
        "center", ml
    :
        3, mt
    :
        3
    }
}
    endIcon = { < SendIcon / >
}
>
    Send
    < /Button>
    < /Item>
    < /Grid>
    < /Grid>
    < /Box>
    < /Box>
)
    ;
}
