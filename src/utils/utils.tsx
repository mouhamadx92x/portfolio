import emailjs from "@emailjs/browser";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

export const sendEmail = (contactUsFormElement: HTMLFormElement) => {
    emailjs
        .sendForm(serviceId, templateId, contactUsFormElement, publicKey)
        .then(
            (result) => {
                console.log(result.text);
                contactUsFormElement.reset();
            },
            (error) => {
                console.log(error.text);
            }
        );
};

export const containsLink = (text: string): boolean => {
    const linkRegex = /(http[s]?:\/\/[^\s]+)/;
    return linkRegex.test(text);
};
