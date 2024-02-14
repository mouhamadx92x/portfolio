import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

export const sendEmail = (contactUsFormElement: HTMLFormElement) => {
    const userMessage = contactUsFormElement.messageContent.value.trim();
    if (containsLink(userMessage)) {
        toast("not valid message");
        return;
    }
    emailjs
        .sendForm(serviceId, templateId, contactUsFormElement, publicKey)
        .then(
            (result) => {
                toast(`Message sent`);
                contactUsFormElement.reset();
            },
            (error) => {
                toast(`Error: ${error.text}`);
            }
        );
};

export const containsLink = (text: string): boolean => {
    const linkRegex = /(http[s]?:\/\/[^\s]+)/;
    return linkRegex.test(text);
};
