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

const Header = () => {
    return (
        <Box sx={headerMainBoxStyles}>
            <AppBar position="sticky" sx={headerAppBarStyles}>
                <Toolbar sx={headerToolbarStyles}>
                    <Link href="/home" passHref style={headerLinkStyles}>
                        <Typography
                            variant="body1"
                            component="a"
                            sx={headerLinkTypographyStyles}
                        >
                            Home
                        </Typography>
                    </Link>
                    <Link href="/projects" passHref style={headerLinkStyles}>
                        <Typography
                            variant="body1"
                            component="a"
                            sx={headerLinkTypographyStyles}
                        >
                            Projects
                        </Typography>
                    </Link>
                    <Link href="/cv" passHref style={headerLinkStyles}>
                        <Typography
                            variant="body1"
                            component="a"
                            sx={headerLinkTypographyStyles}
                        >
                            CV
                        </Typography>
                    </Link>
                    <Link href="/contact" passHref style={headerLinkStyles}>
                        <Typography
                            variant="body1"
                            component="a"
                            sx={headerLinkTypographyStyles}
                        >
                            Contact Me
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
