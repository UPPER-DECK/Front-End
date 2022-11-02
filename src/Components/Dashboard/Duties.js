import styled from "@emotion/styled";
import {Box, CssBaseline, Grid, Paper, Typography} from "@mui/material";
import React from "react";
import TitleMainDuStyles from "../../Background/Dashboard/Duties/TitleMainStyles";
import ContentPhraseStyles from "../../Background/Dashboard/What is bar/ContentPhraseStyles";
import DashboardGridStyle from "../../Background/Dashboard/What is bar/DashboardGridStyles";
import ButtonBases from "./ButtonBases";

export default function Duties() {
    const Item = styled(Paper)(({theme}) => ({
        padding: theme.spacing(1),
        textAlign: "left",
        backgroundColor: "transparent",
        border: "none",
        boxShadow: "none",
    }));
    return (
        < Box
    sx = {
    {
        flexGrow: 1, mt
    :
        3
    }
}
    id = "what" >
        < CssBaseline / >
        < Typography
    variant = "h4"
    color = "white.main"
    sx = {TitleMainDuStyles} >
        "D{"
    "}
    < Typography
    variant = "h4"
    color = "brown.main"
    sx = {TitleMainDuStyles} >
        uties
    "?
    < /Typography>
    < /Typography>
    < Grid
    container
    direction = "column"
    spacing = {0.5}
    sx = {DashboardGridStyle} >
        < Grid
    item
    xs = {12} >
        < Item >
        < Typography
    variant = "h7"
    color = "dgreen.main"
    sx = {ContentPhraseStyles} >
        Lorem
    Ipsum
    is
    simply
    dummy
    text
    of
    the
    printing
    and
    typesetting
    industry.Lorem
    Ipsum
    has
    been
    the
    industry
    's standard dummy text ever
    since
    the
    1500
    s, when
    an
    unknown
    printer
    took
    a
    galley
    of
    type
    and
    scrambled
    it
    to
    make
    a
    type
    specimen
    book.Lorem
    Ipsum.
    < /Typography>
    < /Item>
    < /Grid>
    < Grid
    item
    xs = {4} >
        < Item >
        < ButtonBases / >
        < /Item>
        < /Grid>
        < /Grid>
        < /Box>
)
    ;
}
