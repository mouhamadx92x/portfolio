import { Box, Link, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
    footerMainBoxStyles,
    footerContactInfoBoxStyles,
    footerContactDetailsBoxStyles,
    footerAddressDetailsBoxStyle,
    footerPersonalContactDetailsBoxStyle,
    footerSocialMediaBoxStyle,
    footerSocialMediaStyle,
} from "./styles";
import {
    FOOTER_CONTACT_SECTION_LABEL,
    FOOTER_CONTACT_MOBIL_NUMBER,
    FOOTER_CONTACT_EMAIL,
    FOOTER_CONTACT_ADDRESS_STREET,
    FOOTER_CONTACT_ADDRESS_POST_CODE,
    FOOTER_CONTACT_COPY_RIGHT,
} from "../../../../public/text";

const Footer = () => {
    return (
        <Box sx={footerMainBoxStyles}>
            <Box sx={footerContactInfoBoxStyles}>
                <Typography>{FOOTER_CONTACT_SECTION_LABEL}</Typography>
                <Box sx={footerContactDetailsBoxStyles}>
                    <Box sx={footerPersonalContactDetailsBoxStyle}>
                        <Typography>{FOOTER_CONTACT_MOBIL_NUMBER}</Typography>
                        <Typography>{FOOTER_CONTACT_EMAIL}</Typography>
                    </Box>
                    <Box sx={footerAddressDetailsBoxStyle}>
                        <Typography>{FOOTER_CONTACT_ADDRESS_STREET}</Typography>
                        <Typography>
                            {FOOTER_CONTACT_ADDRESS_POST_CODE}
                        </Typography>
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
                <Typography>{FOOTER_CONTACT_COPY_RIGHT}</Typography>
            </Box>
            <Box>
                <Typography>2</Typography>
            </Box>
        </Box>
    );
};

export default Footer;
