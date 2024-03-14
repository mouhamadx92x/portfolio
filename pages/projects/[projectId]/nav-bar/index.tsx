import NavigationLink from "@/app/components/custom-components/navigation-link";
import { Box } from "@mui/material";
import { PROJECTS_PATH } from "../../../../public/constants/paths";
import {
    projectDetailsNavBarBoxStyles,
    projectDetailsNavigationLinkStyles,
} from "./styles";
import {
    PROJECT_DETAILS_NAVBAR_LABEL_BACK,
    PROJECT_DETAILS_NAVBAR_LABEL_GITHUB,
    PROJECT_DETAILS_NAVBAR_LABEL_LIVE_PROJECT,
} from "../../../../public/constants/text";

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
                label={PROJECT_DETAILS_NAVBAR_LABEL_BACK}
                path={PROJECTS_PATH}
                sx={projectDetailsNavigationLinkStyles}
            />

            <NavigationLink
                label={PROJECT_DETAILS_NAVBAR_LABEL_LIVE_PROJECT}
                path={liveProjectLink}
                sx={projectDetailsNavigationLinkStyles}
            />

            <NavigationLink
                label={PROJECT_DETAILS_NAVBAR_LABEL_GITHUB}
                path={githubRepositoryLink}
                sx={projectDetailsNavigationLinkStyles}
            />
        </Box>
    );
};

export default ProjectDetailsNavBar;
