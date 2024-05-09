import { Box } from "@mui/material";
import { footerMainBoxStyles, footerBoxStyles } from "./styles";
import FooterContactDetails from "./contact-details";
import ContactForm from "./contact-form";

const Footer = () => {
    return (
        <Box sx={footerMainBoxStyles}>
            <Box sx={footerBoxStyles}>
                <FooterContactDetails />
                <ContactForm />
            </Box>
        </Box>
    );
};

export default Footer;
