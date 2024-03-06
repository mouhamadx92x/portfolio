import CustomTypography from "@/app/components/custom-components/CustomTypography";
import { Box } from "@mui/material";
import React from "react";
import {
    projectDescriptionBoxStyles,
    projectDescriptionLabelStyles,
    projectDescriptionTextStyles,
} from "./styles";

interface ProjectDescriptionProps {
    ProjectDescription: string;
}

const ProjectDescription = ({
    ProjectDescription,
}: ProjectDescriptionProps) => {
    return (
        <Box sx={projectDescriptionBoxStyles}>
            <CustomTypography
                text="description:"
                variant="h4"
                sx={projectDescriptionLabelStyles}
            />
            <CustomTypography
                text={ProjectDescription}
                sx={projectDescriptionTextStyles}
            />
        </Box>
    );
};

export default ProjectDescription;
