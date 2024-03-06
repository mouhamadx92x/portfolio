import CustomTypography from "@/app/components/custom-components/CustomTypography";
import { CheckCircle } from "@mui/icons-material";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {
    projectFeatureBoxStyles,
    projectFeatureLabelStyles,
    projectFeatureListStyles,
    projectFeatureIconStyles,
} from "./styles";
import { PROJECT_DETAILS_FEATURE_LABEL } from "../../../../public/constants/text";

interface ProjectFeatureProps {
    featuresList: string[];
}

const ProjectFeature = ({ featuresList }: ProjectFeatureProps) => {
    return (
        <Box sx={projectFeatureBoxStyles}>
            <CustomTypography
                text={PROJECT_DETAILS_FEATURE_LABEL}
                variant="h4"
                sx={projectFeatureLabelStyles}
            />

            <List sx={projectFeatureListStyles}>
                {featuresList.map((feature) => (
                    <ListItem key={feature} disableGutters>
                        <ListItemIcon>
                            <CheckCircle sx={projectFeatureIconStyles} />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default ProjectFeature;
