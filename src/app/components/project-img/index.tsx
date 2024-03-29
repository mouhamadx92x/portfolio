import { Box, CardMedia, Typography } from "@mui/material";
import {
    projectImgContainerStyles,
    projectImgOverlayStyles,
    projectImgNumberStyles,
} from "./styles";
import Link from "next/link";
interface projectImgProp {
    projectNumber: string;
    imagesPath: string[];
    id: string;
    description: string;
    webSiteLink: string;
    githubLink: string;
    name: string;
    stackIconsPaths: string[];
}

const ProjectImg = ({
    imagesPath,
    projectNumber,
    id,
    description,
    webSiteLink,
    githubLink,
    name,
    stackIconsPaths,
}: projectImgProp) => {
    return (
        <Link
            href={{
                pathname: `projects/${id}`,
                query: {
                    description,
                    imagesPath,
                    webSiteLink,
                    githubLink,
                    name,
                    stackIconsPaths,
                },
            }}
        >
            <Box sx={projectImgContainerStyles}>
                <CardMedia
                    component="img"
                    height="100%"
                    width="100%"
                    image={imagesPath[0]}
                    alt="Card image"
                />
                <Box sx={projectImgOverlayStyles}>
                    <Typography variant="h1" sx={projectImgNumberStyles}>
                        {projectNumber}
                    </Typography>
                </Box>
            </Box>
        </Link>
    );
};

export default ProjectImg;
