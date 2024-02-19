import { Box, Typography } from "@mui/material";
import {
    projectsCardImgBoxStyles,
    projectsCardBoxStyles,
    projectsCardTypographyNameStyles,
    projectsCardTypographyStyles,
    projectsCardTypographyBoxStyles,
} from "./styles";

const ProductCard = () => {
    const img = "/images/background.jpg";

    return (
        <Box sx={projectsCardBoxStyles}>
            <Box
                sx={{
                    ...projectsCardImgBoxStyles,
                    background: `url(${img})`,
                }}
            ></Box>
            <Box sx={projectsCardTypographyBoxStyles}>
                <Typography sx={projectsCardTypographyStyles}>22/3</Typography>
                <Typography variant="h1" sx={projectsCardTypographyNameStyles}>
                    Name
                </Typography>
                <Typography sx={projectsCardTypographyStyles}>Desc</Typography>
                <Typography sx={projectsCardTypographyStyles}>
                    see the project
                </Typography>
            </Box>
        </Box>
    );
};

export default ProductCard;
