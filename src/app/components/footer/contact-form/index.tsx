import { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

interface IFormInputs {
    user_name: string;
    user_email: string;
    message: string;
}

const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(
                    "YOUR_SERVICE_ID",
                    "YOUR_TEMPLATE_ID",
                    form.current,
                    "YOUR_PUBLIC_KEY"
                )
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
            <input id="user_name" type="text" name="user_name" required />
            <label htmlFor="user_email">Email</label>
            <input id="user_email" type="email" name="user_email" required />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required />
            <input type="submit" value="Send" />
        </form>
    );
};

export default ContactForm;
