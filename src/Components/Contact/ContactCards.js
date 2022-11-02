import styled from "@emotion/styled";
import {Box, Button, Card, CardContent, CardMedia, Divider, Grid, Paper, Typography} from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import { useNavigate } from "react-router-dom";
// import image1 from "../../Img/vihan.png";
// import image2 from "../../Img/rakhitha.jpg";
// import image3 from "../../Img/isuru.png";
// import image4 from "../../Img/banuka.jpg";

const rows = [
    {
        id: 1,
        name: "H. D. D. H. Vihan",
        desc: "Creator",
        image: "https://res.cloudinary.com/dppd70es5/image/upload/v1666197138/Restaurant%20squad/Contact%20Images/vihan_gs0f20.png",
        body: "Self motivated and influenced .",
        fb: "https://www.facebook.com/danul.hivivihan",
        LinkedIn: "https://www.linkedin.com/in/danul-hivi-vihan-397124120/",
        insta: "https://www.instagram.com/hivi__9/?hl=en",
    },
    {
        id: 2,
        name: "V. M. R. D. Vimalaweera",
        desc: "Creator",
        image: "https://res.cloudinary.com/dppd70es5/image/upload/v1666197139/Restaurant%20squad/Contact%20Images/rakhitha_bmkan5.jpg",
        body: "Self motivated and influenced .",
        fb: "https://www.facebook.com/rakithawimalaweera",
        LinkedIn: "https://www.linkedin.com/in/rakhitha-wimalaweera/",
        insta: "https://www.instagram.com/rakhitha_wimalaweera/?hl=en",
    },
    {
        id: 3,
        name: "K. A. I. N. Kumara",
        desc: "Co-ordinator",
        image: "https://res.cloudinary.com/dppd70es5/image/upload/v1666197139/Restaurant%20squad/Contact%20Images/isuru_wy4rfa.png",
        body: "Self motivated and influenced .",
        fb: "https://www.facebook.com/isuru.nuwan.3388",
        LinkedIn: "https://www.linkedin.com/in/isuru-nuwan-b1ba60182/",
        insta: "https://www.instagram.com/nuwa__97/?hl=en",
    },
    {
        id: 4,
        name: "K. A. B. Prashantha",
        desc: "Co-ordinator",
        image: "https://res.cloudinary.com/dppd70es5/image/upload/v1666197137/Restaurant%20squad/Contact%20Images/banuka_gxpstc.jpg",
        body: "Self motivated and influenced .",
        fb: "https://www.facebook.com/banu.prashan",
        LinkedIn: "https://www.linkedin.com/in/banuka-prashantha-365b35247/",
        insta: "https://www.instagram.com/_banu_prashan/?hl=en",
    },
];
export default function ContactCards() {
    const Item = styled(Paper)(({theme}) => ({
        padding: theme.spacing(1),
        textAlign: "left",
        backgroundColor: "transparent",
        border: "none",
        boxShadow: "none",
    }));
    // const navigate = useNavigate();
    return (
        < Box
    sx = {
    {
        flexGrow: 1, mt
    :
        5
    }
}>
<
    Grid
    container
    spacing = {1} >
        {
            rows.map((row) => (
                < Grid item xs = {12} sm = {6} md = {3} lg = {3} >
            < Item >
            < Box height = "100%" display = "flex" justifyContent = "center" >
            < Card sx = {
    {
        maxWidth: 345, borderRadius
    :
        4, minWidth
    :
        260
    }
}>
<
    CardMedia
    component = "img"
    height = "240"
    image = {row.image}
    alt = "profile"
    sx = {
    {
        borderRadius: 2
    }
}
    />
    < CardContent >
    < Grid
    container
    spacing = {2}
    sx = {
    {
    }
}>
<
    Grid
    item
    xs = {12}
    sm = {12} >
        < Grid
    container >
    < Typography
    gutterBottom
    variant = "h6"
    component = "div"
    justify = "space-evenly"
    sx = {
    {
        fontFamily: "monospace"
    }
}>
    {
        row.name
    }
<
    /Typography>
    < /Grid>
    < Divider
    light / >
    < /Grid>

    < Grid
    item
    xs = {12}
    sm = {12} >
        < Grid
    container >
    < Typography
    gutterBottom
    variant = "body2"
    color = "text.secondary" >
        {row.desc}
        < /Typography>
        < /Grid>
        < Divider
    light / >
    < /Grid>
    < Grid
    item
    xs = {12}
    sm = {12} >
        < Grid
    container >
    < Item >
    < Button
    href = {`${row.fb}`
}>
<
    FacebookIcon
    sx = {
    {
        fontSize: 25, color
    :
        "grey.main"
    }
}
    />
    < /Button>
    < /Item>
    < Item >
    < Button
    href = {`${row.insta}`
}>
<
    InstagramIcon
    sx = {
    {
        fontSize: 25, color
    :
        "grey.main"
    }
}
    />
    < /Button>
    < /Item>
    < Item >
    < Button
    href = {`${row.LinkedIn}`
}>
<
    LinkedInIcon
    sx = {
    {
        fontSize: 25, color
    :
        "grey.main"
    }
}
    />
    < /Button>
    < /Item>
    < /Grid>
    < Divider
    light / >
    < /Grid>
    < /Grid>
    < /CardContent>
    < /Card>
    < /Box>
    < /Item>
    < /Grid>
))
}
<
    /Grid>
    < /Box>
)
    ;
}
