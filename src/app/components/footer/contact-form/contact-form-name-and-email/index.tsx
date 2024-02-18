import { Box, Typography } from "@mui/material";
import StyledTextField from "../styled-text-field";
import {
    footerContactUsFormLabelStyles,
    footerContactUsFormNameAndEmailBoxStyles,
} from "./styles";
import {
    FOOTER_CONTACT_FORM_TEXT_FIELD_NAME_LABEL,
    FOOTER_CONTACT_FORM_TEXT_FIELD_EMAIL_LABEL,
} from "../../../../../../public/text";

const ContactFormNameAndEmail = () => {
    return (
        <Box sx={footerContactUsFormNameAndEmailBoxStyles}>
            <Typography sx={footerContactUsFormLabelStyles}>
                {FOOTER_CONTACT_FORM_TEXT_FIELD_NAME_LABEL}
            </Typography>

            <StyledTextField id="senderName" name="senderName" required />
            <Typography sx={footerContactUsFormLabelStyles}>
                {FOOTER_CONTACT_FORM_TEXT_FIELD_EMAIL_LABEL}
            </Typography>
            <StyledTextField
                id="senderEmail"
                name="senderEmail"
                type="email"
                required
            />
        </Box>
    );
};

export default ContactFormNameAndEmail;
