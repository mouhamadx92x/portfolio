import { Box, Button, Typography } from "@mui/material";
import StyledTextField from "../styled-text-field/index";
import {
    footerContactUsFormButtonStyles,
    footerContactUsFormLabelStyles,
    footerContactUsFormMessageAndButtonBoxStyles,
    footerContactUsFormMessageTextFieldStyles,
} from "./styles";
import {
    FOOTER_CONTACT_FORM_TEXT_FIELD_MESSAGE_LABEL,
    FOOTER_CONTACT_US_FORM_BUTTON_LABEL,
} from "../../../../../../public/constants/text";

const ContactFormMessageAndButton = () => {
    return (
        <Box sx={footerContactUsFormMessageAndButtonBoxStyles}>
            <Typography sx={footerContactUsFormLabelStyles}>
                {FOOTER_CONTACT_FORM_TEXT_FIELD_MESSAGE_LABEL}
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
    );
};

export default ContactFormMessageAndButton;
