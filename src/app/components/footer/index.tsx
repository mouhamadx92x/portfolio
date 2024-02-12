import { Box, Link, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
    return (
        <Box>
            <Box>
                <Typography>TO CONTACT:</Typography>
                <Box>
                    <Box>
                        <Typography>Tel: +49 (0) 176 248 22011</Typography>
                        <Typography>E-Mail: mouhamadx92x@gmail.com</Typography>
                    </Box>
                    <Box>
                        <Typography>Am Vierrutenberg 4A</Typography>
                        <Typography> 13055 Berlin</Typography>
                    </Box>
                </Box>
                <Box>
                    <Link href="https://www.linkedin.com/in/mohammad-alsbinati-466369262/">
                        <LinkedInIcon fontSize="medium" />
                    </Link>
                    <Link href="https://github.com/mouhamadx92x">
                        <GitHubIcon fontSize="medium" />
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
