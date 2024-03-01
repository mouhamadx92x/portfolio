import { Typography } from "@mui/material";
import { projectsCardTypographyNameStyles } from "./styles";

interface ProjectCardTypographyProjectNameProps {
    text: string;
}

const ProjectCardTypographyProjectName = ({
    text,
}: ProjectCardTypographyProjectNameProps) => {
    return (
        <Typography variant="h3" sx={projectsCardTypographyNameStyles}>
            {text}
        </Typography>
    );
};

export default ProjectCardTypographyProjectName;
