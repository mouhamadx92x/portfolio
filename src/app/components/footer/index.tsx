import { Box, Typography } from "@mui/material";

import { footerMainBoxStyles } from "./styles";
import FooterContactDetails from "./footer-contact-details";

const Footer = () => {
    return (
        <Box sx={footerMainBoxStyles}>
            <FooterContactDetails />
            <Box>
                <Typography>2</Typography>
            </Box>
        </Box>
    );
};

export default Footer;
