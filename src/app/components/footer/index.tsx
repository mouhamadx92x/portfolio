import { Box } from "@mui/material";
import { footerMainBoxStyles } from "./styles";
import FooterContactDetails from "./contact-details";
import ContactForm from "./contact-form";

const Footer = () => {
    return (
        <Box sx={footerMainBoxStyles}>
            <FooterContactDetails />
            <ContactForm />
        </Box>
    );
};

export default Footer;
