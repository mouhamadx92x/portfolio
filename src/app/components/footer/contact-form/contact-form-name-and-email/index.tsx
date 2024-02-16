import { Box, Typography } from "@mui/material";
import React from "react";
import StyledTextField from "../styled-text-field";
import {
    footerContactUsFormLabelStyles,
    footerContactUsFormNameAndEmailBoxStyles,
} from "./styles";

const ContactFormNameAndEmail = () => {
    return (
        <Box sx={footerContactUsFormNameAndEmailBoxStyles}>
            <Typography sx={footerContactUsFormLabelStyles}>Name:</Typography>

            <StyledTextField id="senderName" name="senderName" required />
            <Typography sx={footerContactUsFormLabelStyles}>E-mail:</Typography>
            <StyledTextField
                id="senderEmail"
                name="senderEmail"
                type="email"
                required
            />
        </Box>
    );
};

export default ContactFormNameAndEmail;
