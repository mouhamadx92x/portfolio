import { Box, CardMedia, Typography } from "@mui/material";
import {
    projectImgContainerStyles,
    projectImgOverlayStyles,
    projectImgNumberStyles,
} from "./styles";
import Link from "next/link";
interface projectImgProp {
    number: string;
    imgLink: string;
}

const ProjectImg = ({ imgLink, number }: projectImgProp) => {
    return (
        <Link
            href={{
                pathname: `projects/${number}`,
                query: {
                    imgLink: imgLink,
                },
            }}
        >
            <Box sx={projectImgContainerStyles}>
                <CardMedia
                    component="img"
                    height="100%"
                    width="100%"
                    image={imgLink}
                    alt="Card image"
                />
                <Box sx={projectImgOverlayStyles}>
                    <Typography variant="h1" sx={projectImgNumberStyles}>
                        {number}
                    </Typography>
                </Box>
            </Box>
        </Link>
    );
};

export default ProjectImg;