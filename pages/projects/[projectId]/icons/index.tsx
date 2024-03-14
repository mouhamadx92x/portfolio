import { Box } from "@mui/material";
import { projectIconsBoxStyles, projectIconsStyles } from "./styles";

interface ProjectFeatureProps {
    stackIconsPaths: string[];
}

const ProjectStackIcons = ({ stackIconsPaths }: ProjectFeatureProps) => {
    return (
        <Box sx={projectIconsBoxStyles}>
            {stackIconsPaths.map((path, index) => (
                <Box
                    component="img"
                    key={index}
                    src={path}
                    alt="icon"
                    sx={projectIconsStyles}
                />
            ))}
        </Box>
    );
};

export default ProjectStackIcons;
