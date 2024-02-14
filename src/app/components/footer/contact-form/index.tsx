"use client";
import { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

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
        <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="user_name">Name</label>
            <input id="senderName" type="text" name="senderName" required />
            <label htmlFor="user_email">Email</label>
            <input id="senderEmail" type="email" name="senderEmail" required />
            <label htmlFor="message">Message</label>
            <textarea id="messageContent" name="messageContent" required />
            <input type="submit" value="Send" />
        </form>
    );
};

export default ContactForm;
