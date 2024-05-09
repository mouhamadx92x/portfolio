"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {
    headerAppBarStyles,
    headerBigToolbarStyles,
    headerMainBoxStyles,
    headerMenuIconStyles,
    headerSmallToolbarStyles,
} from "./styles";
import {
    CV_PATH,
    HOME_PATH,
    PROJECTS_PATH,
} from "../../../../public/constants/paths";
import {
    NAVIGATION_HOME_LABEL,
    NAVIGATION_CV_LABEL,
    NAVIGATION_PROJECTS_LABEL,
} from "../../../../public/constants/text";
import HeaderNavigationLink from "./header-navigation-link";
import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { HYDRARGYRUM_COLOR } from "../../../../public/constants/colors";

const Header = () => {
    const [menuElement, setMenuElement] = useState<null | HTMLElement>(null);
    const IsMenuOpen = Boolean(menuElement);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMenuElement(event.currentTarget);
    };
    const handleClose = () => {
        setMenuElement(null);
    };
    return (
        <Box sx={headerMainBoxStyles}>
            <AppBar position="fixed" sx={headerAppBarStyles}>
                <Toolbar sx={headerBigToolbarStyles}>
                    <HeaderNavigationLink
                        PATH={HOME_PATH}
                        LABEL={NAVIGATION_HOME_LABEL}
                    />
                    <HeaderNavigationLink
                        PATH={PROJECTS_PATH}
                        LABEL={NAVIGATION_PROJECTS_LABEL}
                    />
                    <HeaderNavigationLink
                        PATH={CV_PATH}
                        LABEL={NAVIGATION_CV_LABEL}
                    />
                </Toolbar>
                <Toolbar sx={headerSmallToolbarStyles}>
                    <Button
                        id="menu-links-button"
                        onClick={handleClick}
                        aria-controls={IsMenuOpen ? "links-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={IsMenuOpen ? "true" : undefined}
                    >
                        <MenuIcon fontSize="large" sx={headerMenuIconStyles} />
                    </Button>
                    <Menu
                        id="links-menu"
                        open={IsMenuOpen}
                        anchorEl={menuElement}
                        MenuListProps={{
                            "aria-labelledby": "menu-links-button",
                        }}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                        }}
                    >
                        <MenuItem onClick={handleClose}>
                            <HeaderNavigationLink
                                PATH={HOME_PATH}
                                LABEL={NAVIGATION_HOME_LABEL}
                            />
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <HeaderNavigationLink
                                PATH={PROJECTS_PATH}
                                LABEL={NAVIGATION_PROJECTS_LABEL}
                            />
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <HeaderNavigationLink
                                PATH={CV_PATH}
                                LABEL={NAVIGATION_CV_LABEL}
                            />
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
