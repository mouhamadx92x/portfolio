import { Box } from "@mui/material";
import {
    projectsCardBoxStyles,
    projectsCardTypographyBoxStyles,
} from "./styles";
import ProjectCardImage from "./card-media";
import ProjectCardLink from "./link-typography";
import ProjectCardTypography from "./typography";
import ProjectCardTypographyProjectName from "./typography-project-name";
interface productCardProp {
    imgPath: string;
    name: string;
    creationDate: string;
    description: string;
    webSiteLink: string;
}

const ProductCard = ({
    imgPath,
    name,
    creationDate,
    description,
    webSiteLink,
}: productCardProp) => {
    return (
        <Box sx={projectsCardBoxStyles}>
            <ProjectCardImage imgPath={imgPath} />
            <Box sx={projectsCardTypographyBoxStyles}>
                <ProjectCardTypography text={creationDate} />
                <ProjectCardTypographyProjectName text={name} />
                <ProjectCardTypography text={description} />
                <ProjectCardLink webSiteLink={webSiteLink} />
            </Box>
        </Box>
    );
};

export default ProductCard;
