"use client";
import { useRef, FormEvent } from "react";
import { Box, Typography } from "@mui/material";
import { sendEmail } from "@/utils/utils";
import {
    footerContactUsFormLabelStyles,
    footerContactUsFromStyles,
    footerContactUsFromMainBoxStyles,
} from "./styles";
import ContactFormMessageAndButton from "./contact-form-message-and-button";
import ContactFormNameAndEmail from "./contact-form-name-and-email";

const ContactForm = () => {
    const ContactUsFormRef = useRef<HTMLFormElement>(null);

    const sendEmailHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const contactUsFormElement = ContactUsFormRef.current;

        if (contactUsFormElement) {
            sendEmail(contactUsFormElement);
        }
    };

    return (
        <Box sx={footerContactUsFromMainBoxStyles}>
            <Typography
                sx={{ ...footerContactUsFormLabelStyles, marginTop: "10px" }}
            >
                Contact Me:
            </Typography>
            <Box
                component="form"
                ref={ContactUsFormRef}
                onSubmit={sendEmailHandler}
                sx={footerContactUsFromStyles}
            >
                <ContactFormNameAndEmail />
                <ContactFormMessageAndButton />
            </Box>
        </Box>
    );
};

export default ContactForm;
