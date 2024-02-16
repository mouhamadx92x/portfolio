"use client";
import { useRef, FormEvent } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { sendEmail } from "@/utils/utils";
import { FOOTER_CONTACT_US_FORM_BUTTON_LABEL } from "../../../../../public/text";
import { styled } from "@mui/system";
import {
    footerContactUsFormLabelStyles,
    footerContactUsFormMessageAndButtonBoxStyles,
    footerContactUsFormNameAndEmailBoxStyles,
    footerContactUsFromStyles,
    footerContactUsFromMainBoxStyles,
    footerContactUsFormButtonStyles,
    footerContactUsFormMessageTextFieldStyles,
} from "./styles";

const StyledTextField = styled(TextField)(() => ({
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#949494",
        },
        "&:hover fieldset": {
            borderColor: "#949494",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#949494",
            backgroundColor: "rgba(180, 180, 180,0.2)",
        },
    },
}));

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
                <Box sx={footerContactUsFormNameAndEmailBoxStyles}>
                    <Typography sx={footerContactUsFormLabelStyles}>
                        Name:
                    </Typography>

                    <StyledTextField
                        id="senderName"
                        name="senderName"
                        required
                    />
                    <Typography sx={footerContactUsFormLabelStyles}>
                        E-mail:
                    </Typography>
                    <StyledTextField
                        id="senderEmail"
                        name="senderEmail"
                        type="email"
                        required
                    />
                </Box>

                <Box sx={footerContactUsFormMessageAndButtonBoxStyles}>
                    <Typography sx={footerContactUsFormLabelStyles}>
                        Message:
                    </Typography>

                    <StyledTextField
                        id="messageContent"
                        name="messageContent"
                        multiline
                        rows={5}
                        required
                        sx={footerContactUsFormMessageTextFieldStyles}
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={footerContactUsFormButtonStyles}
                    >
                        {FOOTER_CONTACT_US_FORM_BUTTON_LABEL}
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ContactForm;
