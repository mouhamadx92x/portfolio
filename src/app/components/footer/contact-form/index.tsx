"use client";
import { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Box, Button, TextField, Typography } from "@mui/material";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(serviceId, templateId, form.current, publicKey)
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    };

    return (
        <Box component="form" ref={form} onSubmit={sendEmail}>
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
                Send
            </Button>
        </Box>
    );
};

export default ContactForm;
