"use client";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="sticky"
                sx={{
                    width: "50vw",
                    margin: "0 auto",
                    backgroundColor: "transparent",
                    border: "0",
                    boxShadow: "none",
                }}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Link
                        href="/home"
                        passHref
                        style={{ textDecoration: "none" }}
                    >
                        <Typography variant="body1" component="a">
                            Home
                        </Typography>
                    </Link>
                    <Link
                        href="/projects"
                        passHref
                        style={{ textDecoration: "none" }}
                    >
                        <Typography variant="body1" component="a">
                            Projects
                        </Typography>
                    </Link>
                    <Link
                        href="/cv"
                        passHref
                        style={{ textDecoration: "none" }}
                    >
                        <Typography variant="body1" component="a">
                            CV
                        </Typography>
                    </Link>
                    <Link
                        href="/contact"
                        passHref
                        style={{ textDecoration: "none" }}
                    >
                        <Typography variant="body1" component="a">
                            Contact Me
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
