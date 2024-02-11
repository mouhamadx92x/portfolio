"use client";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
    headerAppBarStyles,
    headerToolbarStyles,
    headerLinkTypographyStyles,
    headerLinkStyles,
    headerMainBoxStyles,
} from "./styles";
import {
    CV_PATH,
    HOME_PATH,
    PROJECTS_PATH,
    CONTACT_PATH,
} from "../../../../public/paths";
import {
    NAVIGATION_HOME_LABEL,
    NAVIGATION_CONTACT_ME_LABEL,
    NAVIGATION_CV_LABEL,
    NAVIGATION_PROJECTS_LABEL,
} from "../../../../public/text";

const Header = () => {
    return (
        <Box sx={headerMainBoxStyles}>
            <AppBar position="sticky" sx={headerAppBarStyles}>
                <Toolbar sx={headerToolbarStyles}>
                    <Link href={HOME_PATH} passHref style={headerLinkStyles}>
                        <Typography
                            variant="body1"
                            component="a"
                            sx={headerLinkTypographyStyles}
                        >
                            {NAVIGATION_HOME_LABEL}
                        </Typography>
                    </Link>
                    <Link
                        href={PROJECTS_PATH}
                        passHref
                        style={headerLinkStyles}
                    >
                        <Typography
                            variant="body1"
                            component="a"
                            sx={headerLinkTypographyStyles}
                        >
                            {NAVIGATION_PROJECTS_LABEL}
                        </Typography>
                    </Link>
                    <Link href={CV_PATH} passHref style={headerLinkStyles}>
                        <Typography
                            variant="body1"
                            component="a"
                            sx={headerLinkTypographyStyles}
                        >
                            {NAVIGATION_CV_LABEL}
                        </Typography>
                    </Link>
                    <Link href={CONTACT_PATH} passHref style={headerLinkStyles}>
                        <Typography
                            variant="body1"
                            component="a"
                            sx={headerLinkTypographyStyles}
                        >
                            {NAVIGATION_CONTACT_ME_LABEL}
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
