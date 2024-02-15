"use client";
import { useRef, FormEvent } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { sendEmail } from "@/utils/utils";
import { FOOTER_CONTACT_US_FORM_BUTTON_LABEL } from "../../../../../public/text";

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
        <Box
            component="form"
            ref={ContactUsFormRef}
            onSubmit={sendEmailHandler}
        >
            <Box>
                <TextField
                    id="senderName"
                    label="Name"
                    name="senderName"
                    required
                />

                <TextField
                    id="senderEmail"
                    label="Email"
                    name="senderEmail"
                    type="email"
                    required
                />
            </Box>

            <TextField
                id="messageContent"
                label="Message"
                name="messageContent"
                multiline
                rows={4}
                required
            />

            <Button variant="contained" color="primary" type="submit">
                {FOOTER_CONTACT_US_FORM_BUTTON_LABEL}
            </Button>
        </Box>
    );
};

export default ContactForm;
