"use client";
import Link from "next/link";
import Typography, { TypographyProps } from "@mui/material/Typography";

import { navigationLinkStyles } from "./styles";

interface CustomNavigationLinkProps extends TypographyProps {
    label: string;
    path: string;
}

const NavigationLink = ({
    path,
    label,
    ...props
}: CustomNavigationLinkProps) => {
    return (
        <Link href={path} passHref style={navigationLinkStyles}>
            <Typography {...props}>{label}</Typography>
        </Link>
    );
};

export default NavigationLink;
