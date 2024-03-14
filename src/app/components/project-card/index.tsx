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
    imagesPath: string[];
    name: string;
    creationDate: string;
    description: string;
    webSiteLink: string;
}

const ProductCard = ({
    imagesPath,
    name,
    creationDate,
    description,
    webSiteLink,
}: productCardProp) => {
    return (
        <Box sx={projectsCardBoxStyles}>
            <ProjectCardImage imgPath={imagesPath[0]} />
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
