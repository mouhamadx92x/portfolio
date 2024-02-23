"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {
    headerAppBarStyles,
    headerToolbarStyles,
    headerMainBoxStyles,
} from "./styles";
import {
    CV_PATH,
    HOME_PATH,
    PROJECTS_PATH,
    CONTACT_ME_PATH,
} from "../../../../public/constants/paths";
import {
    NAVIGATION_HOME_LABEL,
    NAVIGATION_CONTACT_ME_LABEL,
    NAVIGATION_CV_LABEL,
    NAVIGATION_PROJECTS_LABEL,
} from "../../../../public/constants/text";
import HeaderNavigationLink from "./header-navigation-link";

const Header = () => {
    return (
        <Box sx={headerMainBoxStyles}>
            <AppBar position="fixed" sx={headerAppBarStyles}>
                <Toolbar sx={headerToolbarStyles}>
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
                    <HeaderNavigationLink
                        PATH={CONTACT_ME_PATH}
                        LABEL={NAVIGATION_CONTACT_ME_LABEL}
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
