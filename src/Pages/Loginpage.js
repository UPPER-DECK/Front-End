import {Box} from "@mui/system";
import {useEffect} from "react";
import ResponsiveAppBar from "../Components/ResponsiveAppBar";
import LoginComp from "../Components/Login/LoginComp";
import LoginCovPageStyles from "../Background/Login/LoginCovPageStyles";
import styled from "@emotion/styled";
import {Grid, Paper} from "@mui/material";

export default function LoginPage() {
    useEffect(() => {
        let url = window.location.href.split("/");
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
        element && element.scrollIntoView({behavior: "smooth", block: "start"});
    }, []);

    const Item = styled(Paper)(({theme}) => ({
        padding: theme.spacing(1),
        textAlign: "left",
        backgroundColor: "transparent",
        border: "none",
        boxShadow: "none",
    }));
    return (
        < Box >
        < Box
    sx = {LoginCovPageStyles} >
        < ResponsiveAppBar / >
        < /Box>
        < Box >
        < Grid
    container
    spacing = {1} >
        {/* <Grid item lg={4} sx={{ width: 300 }}>
						<Item>
							<img
								src={`https://images.unsplash.com/photo-1633675143779-2b0e6622a0f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2Njk2MzEwOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080`}
								alt={"Login Image"}
								loading="lazy"
							/>
						</Item>
					</Grid> */
        }
        < Grid
    item
    xs = {12}
    sm = {12}
    md = {12}
    lg = {12} >
        < Item >
        < LoginComp / >
        < /Item>
        < /Grid>
        < /Grid>
        < /Box>
        < /Box>
)
    ;
}
