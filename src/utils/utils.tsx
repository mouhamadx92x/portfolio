import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import {
    CONTACT_US_FORM_INVALID_MESSAGE,
    CONTACT_US_FORM_MESSAGE_SENT_SUCCESSFULLY,
    CONTACT_US_FORM_MESSAGE_ERROR_OCCURRED,
} from "../../public/constants/text";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

export const sendEmail = (contactUsFormElement: HTMLFormElement) => {
    const userMessage = contactUsFormElement.messageContent.value.trim();
    if (containsLink(userMessage)) {
        toast(CONTACT_US_FORM_INVALID_MESSAGE);
        return;
    }
    emailjs
        .sendForm(serviceId, templateId, contactUsFormElement, publicKey)
        .then(
            (result) => {
                toast(CONTACT_US_FORM_MESSAGE_SENT_SUCCESSFULLY);
                contactUsFormElement.reset();
            },
            (error) => {
                toast(
                    `${CONTACT_US_FORM_MESSAGE_ERROR_OCCURRED}: ${error.text}`
                );
            }
        );
};

export const containsLink = (text: string): boolean => {
    const linkRegex = /(http[s]?:\/\/[^\s]+)/;
    return linkRegex.test(text);
};
