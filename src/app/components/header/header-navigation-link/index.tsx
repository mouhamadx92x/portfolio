"use client";
import Link from "next/link";
import { Typography } from "@mui/material";
import { headerLinkStyles, headerLinkTypographyStyles } from "./styles";

interface HeaderNavigationLinkProps {
    PATH: string;
    LABEL: string;
}

const HeaderNavigationLink = ({ PATH, LABEL }: HeaderNavigationLinkProps) => {
    return (
        <Link href={PATH} passHref style={headerLinkStyles}>
            <Typography variant="h4" sx={headerLinkTypographyStyles}>
                {LABEL}
            </Typography>
        </Link>
    );
};

export default HeaderNavigationLink;
