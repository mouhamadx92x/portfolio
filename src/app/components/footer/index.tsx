import { Box, Link, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
    return (
        <Box
            sx={{
                height: "35vh",
                backgroundColor: "#000",
                color: "#949494",
                display: "flex",
                justifyContent: "space-between",
                padding: "30px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                }}
            >
                <Typography>TO CONTACT:</Typography>
                <Box
                    sx={{
                        display: "flex",
                        marginTop: "20px",
                        marginBottom: "20px",
                    }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography>Tel: +49 (0) 176 248 22011</Typography>
                        <Typography>E-Mail: mouhamadx92x@gmail.com</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: "30px",
                        }}
                    >
                        <Typography>Am Vierrutenberg 4A</Typography>
                        <Typography> 13055 Berlin</Typography>
                    </Box>
                </Box>
                <Box sx={{ marginBottom: "20px" }}>
                    <Link href="https://www.linkedin.com/in/your-profile">
                        <LinkedInIcon
                            fontSize="medium"
                            sx={{ color: "#949494" }}
                        />
                    </Link>
                    <Link href="https://github.com/your-username">
                        <GitHubIcon
                            fontSize="medium"
                            sx={{ color: "#949494", marginLeft: "30px" }}
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
