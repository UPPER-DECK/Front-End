import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import RestaurantSharpIcon from "@mui/icons-material/RestaurantSharp";
import {useNavigate} from "react-router-dom";

const pages = [
    {name: "Dashboard", link: "/dashboard"},
    {name: "Categories", link: "/categories"},
    {name: "Contact", link: "/contact"},
];
const settings = [
    {name: "Profile", link: "/profile"},
    {name: "About", link: "/about"},
    {name: "Logout", link: "/login"},
];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const navigate = useNavigate();

    return (
        < AppBar
    position = "static"
    color = "transparent" >
        < Container
    maxWidth = "xl" >
        < Toolbar
    disableGutters >
    < RestaurantSharpIcon
    sx = {
    {
        display: {
            xs: "none", md
        :
            "flex"
        }
    ,
        mr: 2, color
    :
        "whitesmoke"
    }
}
    />
    < Typography
    variant = "h5"
    noWrap
    component = "a"
    href = "/"
    sx = {
    {
        mr: 4,
            display
    :
        {
            xs: "none", md
        :
            "flex"
        }
    ,
        fontFamily: "monospace",
            fontWeight
    :
        700,
            letterSpacing
    :
        ".3rem",
            color
    :
        "whitesmoke",
            textDecoration
    :
        "none",
    }
}
>
    Upper
    Deck
    < /Typography>

    < Box
    sx = {
    {
        flexGrow: 1, display
    :
        {
            xs: "flex", md
        :
            "none"
        }
    }
}>
<
    IconButton
    size = "large"
    aria - label = "account of current user"
    aria - controls = "menu-appbar"
    aria - haspopup = "true"
    onClick = {handleOpenNavMenu}
    color = "white"
        >
        < MenuIcon / >
        < /IconButton>
        < Menu
    id = "menu-appbar"
    anchorEl = {anchorElNav}
    anchorOrigin = {
    {
        vertical: "bottom",
            horizontal
    :
        "left",
    }
}
    keepMounted
    transformOrigin = {
    {
        vertical: "top",
            horizontal
    :
        "left",
    }
}
    open = {Boolean(anchorElNav)}
    onClose = {handleCloseNavMenu}
    sx = {
    {
        display: {
            xs: "block", md
        :
            "none"
        }
    ,
    }
}
>
    {
        pages.map((page) => (
            < MenuItem
        key = {page.name}
        onClick = {()
    =>
        {
            navigate(page.link);
            handleCloseNavMenu();
        }
    }
        // sx={{ backgroundColor: "black.main", color: "white.main" }}
    >
    <
        Typography
        textAlign = "center" > {page.name} < /Typography>
            < /MenuItem>
    ))
    }
<
    /Menu>
    < /Box>
    < RestaurantSharpIcon
    sx = {
    {
        display: {
            xs: "flex", md
        :
            "none"
        }
    ,
        mr: 2, color
    :
        "whitesmoke"
    }
}
    />
    < Typography
    variant = "h5"
    noWrap
    component = "a"
    href = ""
    sx = {
    {
        mr: 4,
            display
    :
        {
            xs: "flex", md
        :
            "none"
        }
    ,
        flexGrow: 1,
            fontFamily
    :
        "monospace",
            fontWeight
    :
        700,
            letterSpacing
    :
        ".3rem",
            color
    :
        "whitesmoke",
            textDecoration
    :
        "none",
    }
}
>
    Upper
    Deck
    < /Typography>
    < Box
    sx = {
    {
        flexGrow: 1, display
    :
        {
            xs: "none", md
        :
            "flex"
        }
    }
}>
    {
        pages.map((page) => (
            < Button
        key = {page.name}
        onClick = {()
    =>
        {
            // alert(page.link);
            navigate(page.link);
            handleCloseNavMenu();
        }
    }
        sx = {
        {
            my: 2, color
        :
            "whitesmoke", display
        :
            "block"
        }
    }
    >
        {
            page.name
        }
    <
        /Button>
    ))
    }
<
    /Box>

    < Box
    sx = {
    {
        flexGrow: 0
    }
}>
<
    Tooltip
    title = "Open settings" >
        < IconButton
    onClick = {handleOpenUserMenu}
    sx = {
    {
        p: 0
    }
}>
<
    Avatar
    alt = "Remy Sharp"
    src = "/static/images/avatar/2.jpg" / >
        < /IconButton>
        < /Tooltip>
        < Menu
    sx = {
    {
        mt: "45px"
    }
}
    id = "menu-appbar"
    anchorEl = {anchorElUser}
    anchorOrigin = {
    {
        vertical: "top",
            horizontal
    :
        "right",
    }
}
    keepMounted
    transformOrigin = {
    {
        vertical: "top",
            horizontal
    :
        "right",
    }
}
    open = {Boolean(anchorElUser)}
    onClose = {handleCloseUserMenu}
        >
        {/* {settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))} */
        }
    {
        settings.map((settings) => (
            < MenuItem
        key = {settings.name}
        onClick = {()
    =>
        {
            navigate(settings.link);
            handleCloseNavMenu();
        }
    }
        // sx={{ backgroundColor: "black.main", color: "white.main" }}
    >
    <
        Typography
        textAlign = "center" > {settings.name} < /Typography>
            < /MenuItem>
    ))
    }
<
    /Menu>
    < /Box>
    < /Toolbar>
    < /Container>
    < /AppBar>
)
    ;
};
export default ResponsiveAppBar;
