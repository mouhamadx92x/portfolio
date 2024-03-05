import NavigationLink from "@/app/components/custom-components/navigation-link";
import { Box } from "@mui/material";
import { PROJECTS_PATH } from "../../../../public/constants/paths";
import {
    projectDetailsNavBarBoxStyles,
    projectDetailsNavigationLinkStyles,
} from "./styles";

interface NavBarProps {
    liveProjectLink: string;
    githubRepositoryLink: string;
}

const ProjectDetailsNavBar = ({
    liveProjectLink,
    githubRepositoryLink,
}: NavBarProps) => {
    return (
        <Box sx={projectDetailsNavBarBoxStyles}>
            <NavigationLink
                label="Back to Projects"
                path={PROJECTS_PATH}
                sx={projectDetailsNavigationLinkStyles}
            />

            <NavigationLink
                label="see the live project"
                path={liveProjectLink}
                sx={projectDetailsNavigationLinkStyles}
            />

            <NavigationLink
                label="Github"
                path={githubRepositoryLink}
                sx={projectDetailsNavigationLinkStyles}
            />
        </Box>
    );
};

export default ProjectDetailsNavBar;
