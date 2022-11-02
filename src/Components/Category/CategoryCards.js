import styled from "@emotion/styled";
import {Box, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Paper, Typography} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";

const rows = [
    {
        id: 1,
        title: "Glasswares",
        link: "/Glasswares",
        image:
            "https://plus.unsplash.com/premium_photo-1661342507074-1199f0eb4a2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NjE2MjgwMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        body: "Glassware articles made from glass, especially drinking glasses, jugs and other tableware made of glass.",
    },
    {
        id: 2,
        title: "Bar Equipments",
        link: "/Bar_Equipments",
        image:
            "https://images.unsplash.com/photo-1628195476102-3e7480d5446e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NjE2NTg2OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        body: "Without the right bar tools, the quality and taste of your drinks will suffer.",
    },
    {
        id: 3,
        title: "Drink Making Methods",
        link: "/Drink_Making_Methods",
        image:
            "https://images.unsplash.com/photo-1457518919282-b199744eefd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MjQ2NzgyMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        body: "Building a drink means that pour the ingredients into the serving glass and on top of any ingredient.",
    },
    {
        id: 4,
        title: "Beverages",
        link: "/Beverages",
        image:
            "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
        body: "Any potable liquid, especially one other than water, as tea, coffee, beer, or milk.",
    },
    {
        id: 5,
        title: "Service",
        link: "/Service",
        image:
            "https://images.unsplash.com/photo-1462539405390-d0bdb635c7d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MjcxMjE1Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        body: "Attributes of a restaurant such as seating, air-conditioning, service at the table, live music.",
    },
    {
        id: 6,
        title: "Cocktails",
        link: "/Cocktails",
        image:
            "https://images.unsplash.com/photo-1509669803555-fd5edd8d5a41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NjE2NjE5Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        body: "An alcoholic drink consisting of a spirit or spirits mixed with ingredients, such as fruit juice or cream.",
    },
];
export default function CategroyCards() {
    const Item = styled(Paper)(({theme}) => ({
        padding: theme.spacing(1),
        textAlign: "left",
        backgroundColor: "transparent",
        border: "none",
        boxShadow: "none",
    }));
    const navigate = useNavigate();
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
                < Grid item xs = {12} sm = {6} md = {4} lg = {4} >
            < Item >
            < Box height = "100%" display = "flex" justifyContent = "center" >
            < Card sx = {
    {
        maxWidth: 345, borderRadius
    :
        4
    }
}>
<
    CardActionArea
    onClick = {()
=>
    {
        navigate(row.link);
    }
}
>
<
    CardMedia
    component = "img"
    height = "140"
    image = {row.image}
    alt = "green iguana"
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
    justify = "space-evenly" >
        {row.title}
        < /Typography>
    {/* <Grid container justify="space-evenly" sx={{ fontWeight: 800 }}>
													<label>{row.title}</label>
												</Grid> */
    }
<
    /Grid>
    < Divider
    light / >
    < /Grid>

    < Grid
    item
    xs = {12}
    sm = {12} >
        < Grid
    container
    sx = {
    {
    }
}>
<
    Typography
    gutterBottom
    variant = "body2"
    color = "text.secondary" >
        {row.body}
        < /Typography>
        < /Grid>
        < Divider
    light / >
    < /Grid>
    < /Grid>
    < /CardContent>
    < /CardActionArea>
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
