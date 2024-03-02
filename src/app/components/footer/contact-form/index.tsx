"use client";
import { Box } from "@mui/material";
import { footerContactUsFromMainBoxStyles } from "./styles";
import ContactFormLabel from "./contact-form-label";
import Form from "./form";

const ContactForm = () => {
    return (
        <Box sx={footerContactUsFromMainBoxStyles}>
            <ContactFormLabel />
            <Form />
        </Box>
    );
};

export default ContactForm;
