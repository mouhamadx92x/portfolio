import { Box, Link, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
    footerMainBoxStyles,
    FooterContactInfoBoxStyles,
    footerContactDetailsBoxStyles,
    footerAddressDetailsBoxStyle,
    footerPersonalContactDetailsBoxStyle,
    footerSocialMediaBoxStyle,
    footerSocialMediaStyle,
} from "./styles";

const Footer = () => {
    return (
        <Box sx={footerMainBoxStyles}>
            <Box sx={FooterContactInfoBoxStyles}>
                <Typography>TO CONTACT:</Typography>
                <Box sx={footerContactDetailsBoxStyles}>
                    <Box sx={footerPersonalContactDetailsBoxStyle}>
                        <Typography>Tel: +49 (0) 176 248 22011</Typography>
                        <Typography>E-Mail: mouhamadx92x@gmail.com</Typography>
                    </Box>
                    <Box sx={footerAddressDetailsBoxStyle}>
                        <Typography>Am Vierrutenberg 4A</Typography>
                        <Typography> 13055 Berlin</Typography>
                    </Box>
                </Box>
                <Box sx={footerSocialMediaBoxStyle}>
                    <Link href="https://www.linkedin.com/in/your-profile">
                        <LinkedInIcon
                            fontSize="medium"
                            sx={footerSocialMediaStyle}
                        />
                    </Link>
                    <Link href="https://github.com/your-username">
                        <GitHubIcon
                            fontSize="medium"
                            sx={footerSocialMediaStyle}
                        />
                    </Link>
                </Box>
                <Typography>
                    © 2024 Mohammad Alsbinati. All rights reserved.
                </Typography>
            </Box>
            <Box>
                <Typography>2</Typography>
            </Box>
        </Box>
    );
};

export default Footer;
