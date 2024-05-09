import { Box, Link, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
    footerContactInfoBoxStyles,
    footerContactDetailsBoxStyles,
    footerSocialMediaBoxStyles,
    footerSocialMediaStyles,
    FooterContactInfoTextStyles,
} from "./styles";
import {
    FOOTER_CONTACT_ADDRESS_SECTION_LABEL,
    FOOTER_CONTACT_MOBIL_NUMBER,
    FOOTER_CONTACT_EMAIL,
    FOOTER_CONTACT_ADDRESS_STREET,
    FOOTER_CONTACT_ADDRESS_POST_CODE,
    FOOTER_CONTACT_COPY_RIGHT,
} from "../../../../../public/constants/text";

const FooterContactDetails = () => {
    return (
        <Box sx={footerContactInfoBoxStyles}>
            <Typography sx={FooterContactInfoTextStyles}>
                {FOOTER_CONTACT_ADDRESS_SECTION_LABEL}
            </Typography>
            <Box sx={footerContactDetailsBoxStyles}>
                <Box>
                    <Typography sx={FooterContactInfoTextStyles}>
                        {FOOTER_CONTACT_MOBIL_NUMBER}
                    </Typography>
                    <Typography sx={FooterContactInfoTextStyles}>
                        {FOOTER_CONTACT_EMAIL}
                    </Typography>
                </Box>
                <Box>
                    <Typography sx={FooterContactInfoTextStyles}>
                        {FOOTER_CONTACT_ADDRESS_STREET}
                    </Typography>
                    <Typography sx={FooterContactInfoTextStyles}>
                        {FOOTER_CONTACT_ADDRESS_POST_CODE}
                    </Typography>
                </Box>
            </Box>
            <Box sx={footerSocialMediaBoxStyles}>
                <Link href="https://www.linkedin.com/in/your-profile">
                    <LinkedInIcon
                        fontSize="medium"
                        sx={footerSocialMediaStyles}
                    />
                </Link>
                <Link href="https://github.com/your-username">
                    <GitHubIcon
                        fontSize="medium"
                        sx={footerSocialMediaStyles}
                    />
                </Link>
            </Box>
            <Typography sx={FooterContactInfoTextStyles}>
                {FOOTER_CONTACT_COPY_RIGHT}
            </Typography>
        </Box>
    );
};

export default FooterContactDetails;
