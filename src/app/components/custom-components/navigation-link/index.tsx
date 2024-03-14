"use client";
import Link from "next/link";
import Button, { ButtonProps } from "@mui/material/Button";
import { navigationLinkStyles } from "./styles";

interface CustomNavigationLinkProps extends ButtonProps {
    label: string;
    path: string;
}

const NavigationLink = ({
    path,
    label,
    ...props
}: CustomNavigationLinkProps) => {
    return (
        <Link href={path} passHref>
            <Button {...props} sx={navigationLinkStyles}>
                {label}
            </Button>
        </Link>
    );
};

export default NavigationLink;
