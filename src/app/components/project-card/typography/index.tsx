import { Typography } from "@mui/material";
import { projectsCardTypographyStyles } from "./styles";

interface ProjectCardTypographyProps {
    text: string;
}

const ProjectCardTypography = ({ text }: ProjectCardTypographyProps) => {
    return <Typography sx={projectsCardTypographyStyles}>{text}</Typography>;
};

export default ProjectCardTypography;
