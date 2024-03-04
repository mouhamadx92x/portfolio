"use client";
import { useRef, FormEvent } from "react";
import { Box } from "@mui/material";
import { sendEmail } from "@/utils/utils";
import { footerContactUsFromStyles } from "./styles";
import ContactFormNameAndEmail from "../contact-form-name-and-email";
import ContactFormMessageAndButton from "../contact-form-message-and-button";

const Form = () => {
    const ContactUsFormRef = useRef<HTMLFormElement>(null);

    const sendEmailHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const contactUsFormElement = ContactUsFormRef.current;

        if (contactUsFormElement) {
            sendEmail(contactUsFormElement);
        }
    };

    return (
        <Box
            component="form"
            ref={ContactUsFormRef}
            onSubmit={sendEmailHandler}
            sx={footerContactUsFromStyles}
        >
            <ContactFormNameAndEmail />
            <ContactFormMessageAndButton />
        </Box>
    );
};

export default Form;
