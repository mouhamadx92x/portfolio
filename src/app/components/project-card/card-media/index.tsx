import { Box, CardMedia } from "@mui/material";
import { projectsCardImgBoxStyles, projectsCardImgStyles } from "./styles";

interface ProjectCardImageProps {
    imgPath: string;
}
const ProjectCardImage = ({ imgPath }: ProjectCardImageProps) => {
    return (
        <Box sx={projectsCardImgBoxStyles}>
            <CardMedia
                sx={projectsCardImgStyles}
                component="img"
                height="300"
                image={imgPath}
            />
        </Box>
    );
};

export default ProjectCardImage;
