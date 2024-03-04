import { Typography } from "@mui/material";
import { projectsCardTypographyStyles } from "./styles";
import { PROJECT_CARD_LINK_LABEL } from "../../../../../public/constants/text";

interface ProjectCardLinkProps {
    webSiteLink: string;
}
const ProjectCardLink = ({ webSiteLink }: ProjectCardLinkProps) => {
    return (
        <Typography
            sx={projectsCardTypographyStyles}
            component="a"
            href={webSiteLink}
        >
            {PROJECT_CARD_LINK_LABEL}
        </Typography>
    );
};

export default ProjectCardLink;
