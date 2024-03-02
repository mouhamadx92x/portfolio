import { Typography } from "@mui/material";
import { FOOTER_CONTACT_FORM_SECTION_LABEL } from "../../../../../../public/constants/text";
import { footerContactUsFormLabelStyles } from "./styles";

const ContactFormLabel = () => {
    return (
        <Typography sx={footerContactUsFormLabelStyles}>
            {FOOTER_CONTACT_FORM_SECTION_LABEL}
        </Typography>
    );
};

export default ContactFormLabel;
