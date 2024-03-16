import { Box } from "@mui/material";
import { footerMainBoxStyles } from "./styles";
import FooterContactDetails from "./contact-details";
import ContactForm from "./contact-form";

const Footer = () => {
    return (
        <Box
            sx={{
                display: "flex",
                backgroundColor: "black",
                justifyContent: "center",
            }}
        >
            <Box sx={footerMainBoxStyles}>
                <FooterContactDetails />
                <ContactForm />
            </Box>
        </Box>
    );
};

export default Footer;
