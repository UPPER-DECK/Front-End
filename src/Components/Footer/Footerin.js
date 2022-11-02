import styled from "@emotion/styled";
import {Divider} from "@material-ui/core";
import {Avatar, Box, Button, Grid, Paper, Typography} from "@mui/material";
import React from "react";
import FooterGridStyles from "../../Background/Dashboard/Footer/FooterGridStyles";
import FooterTitleStyles from "../../Background/Dashboard/Footer/FooterTitleStyles";
import Image from "../../Img/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footerin = () => {
    const Item = styled(Paper)(({theme}) => ({
        padding: theme.spacing(1),
        textAlign: "left",
        backgroundColor: "transparent",
        border: "none",
        boxShadow: "none",
    }));
    return (
        < Box >
        < Grid
    container
    spacing = {1}
    sx = {FooterGridStyles} >
        < Grid
    item
    xs = {12}
    sm = {12}
    md = {6}
    lg = {6} >
        < Item >
        < Grid
    container >
    < Grid
    item
    xs = {2}
    sm = {6}
    md = {4}
    lg = {4}
    align = "center"
    sx = {
    {
        mt: 3
    }
}>
<
    Item >
    < Box
    height = "100%"
    display = "flex"
    justifyContent = "center" >
        < Avatar
    alt = "footer icon"
    variant = "rounded"
    src = {Image}
    />
    < /Box>
    < /Item>
    < /Grid>
    < Grid
    item
    xs = {10}
    sm = {6}
    md = {8}
    lg = {8} >
        < Item >
        < Typography
    sx = {FooterTitleStyles} > Upper
    Deck < /Typography>
    < /Item>
    < /Grid>
    < /Grid>
    < /Item>
    < /Grid>
    < Grid
    item
    xs = {12}
    sm = {12}
    md = {6}
    lg = {6} >
        < Item >
        < Grid
    container
    direction = "row"
    justifyContent = "center"
    alignItems = "center" >
        < Grid
    item
    xs = {4}
    sm = {4}
    md = {4}
    lg = {3} >
        < Item >
        < Box
    height = "100%"
    display = "flex"
    justifyContent = "center" >
        < Button
    href = "/Dashboard"
    sx = {
    {
        color: "white.main", fontFamily
    :
        "Poppins, sans-serif"
    }
}>
    Dashboard
    < /Button>
    < /Box>
    < /Item>
    < /Grid>
    < Grid
    item
    xs = {4}
    sm = {4}
    md = {4}
    lg = {3} >
        < Item >
        < Box
    height = "100%"
    display = "flex"
    justifyContent = "center" >
        < Button
    href = "/Categories"
    sx = {
    {
        color: "white.main", fontFamily
    :
        "Poppins, sans-serif"
    }
}>
    Categories
    < /Button>
    < /Box>
    < /Item>
    < /Grid>
    < Grid
    item
    xs = {4}
    sm = {4}
    md = {4}
    lg = {3} >
        < Item >
        < Box
    height = "100%"
    display = "flex"
    justifyContent = "center" >
        < Button
    href = "/Contact"
    sx = {
    {
        color: "white.main", fontFamily
    :
        "Poppins, sans-serif"
    }
}>
    Contact
    < /Button>
    < /Box>
    < /Item>
    < /Grid>
    < /Grid>
    < /Item>
    < /Grid>
    < Grid
    item
    xs = {12}
    sm = {12}
    md = {12}
    lg = {12} >
        < Item >
        < Divider / >
        < /Item>
        < /Grid>
        < Grid
    item
    xs = {12}
    sm = {12}
    md = {12}
    lg = {12} >
        < Item >
        < Grid
    container
    direction = "row"
    justifyContent = "flex-end"
    alignItems = "center" >
        < Grid
    item
    xs = {12}
    sm = {12}
    md = {7}
    lg = {7} >
        < Item
    sx = {
    {
        fontSize: 12
    }
}>
    Copyright & copy;
    2022
    Upper
    Deck.All
    right
    reserved. < /Item>
    < /Grid>
    < Grid
    item
    xs = {3}
    sm = {3}
    md = {1}
    lg = {1} >
        < Item >
        < Button
    href = "https://www.facebook.com/danul.hivivihan"
    sx = {
    {
        color: "white.main"
    }
}>
<
    FacebookIcon
    sx = {
    {
        fontSize: 25, color
    :
        "whitesmoke"
    }
}
    />
    < /Button>
    < /Item>
    < /Grid>
    < Grid
    item
    xs = {3}
    sm = {3}
    md = {1}
    lg = {1} >
        < Item >
        < Button
    href = "https://www.instagram.com/hivi__9/?hl=en"
    sx = {
    {
        color: "white.main"
    }
}>
<
    InstagramIcon
    sx = {
    {
        fontSize: 25, color
    :
        "whitesmoke"
    }
}
    />
    < /Button>
    < /Item>
    < /Grid>
    < Grid
    item
    xs = {3}
    sm = {3}
    md = {1}
    lg = {1} >
        < Item >
        < Button
    href = "https://twitter.com/HiviVihan"
    sx = {
    {
        color: "white.main"
    }
}>
<
    TwitterIcon
    sx = {
    {
        fontSize: 25, color
    :
        "whitesmoke"
    }
}
    />
    < /Button>
    < /Item>
    < /Grid>
    < Grid
    item
    xs = {3}
    sm = {3}
    md = {1}
    lg = {1} >
        < Item >
        < Button
    href = "https://www.linkedin.com/in/danul-hivi-vihan-397124120/"
    sx = {
    {
        color: "white.main"
    }
}>
<
    LinkedInIcon
    sx = {
    {
        fontSize: 25, color
    :
        "whitesmoke"
    }
}
    />
    < /Button>
    < /Item>
    < /Grid>
    < /Grid>
    < /Item>
    < /Grid>
    < /Grid>
    < /Box>
)
    ;
};
export default Footerin;
