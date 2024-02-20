import { Box, CardMedia, Typography } from "@mui/material";
import {
    projectsCardImgBoxStyles,
    projectsCardBoxStyles,
    projectsCardTypographyNameStyles,
    projectsCardTypographyStyles,
    projectsCardImgStyles,
    projectsCardTypographyBoxStyles,
} from "./styles";
import { PROJECT_CARD_LINK_LABEL } from "../../../../public/constants/text";
interface productCardProp {
    imgLink: string;
    name: string;
    date: string;
    description: string;
    webSiteLink: string;
}

const ProductCard = ({
    imgLink,
    name,
    date,
    description,
    webSiteLink,
}: productCardProp) => {
    return (
        <Box sx={projectsCardBoxStyles}>
            <Box sx={projectsCardImgBoxStyles}>
                <CardMedia
                    sx={projectsCardImgStyles}
                    component="img"
                    height="300"
                    image={imgLink}
                />
            </Box>
            ``
            <Box sx={projectsCardTypographyBoxStyles}>
                <Typography sx={projectsCardTypographyStyles}>
                    {date}
                </Typography>
                <Typography variant="h3" sx={projectsCardTypographyNameStyles}>
                    {name}
                </Typography>
                <Typography sx={projectsCardTypographyStyles}>
                    {description}
                </Typography>
                <Typography
                    sx={projectsCardTypographyStyles}
                    component="a"
                    href={webSiteLink}
                >
                    {PROJECT_CARD_LINK_LABEL}
                </Typography>
            </Box>
        </Box>
    );
};

export default ProductCard;
