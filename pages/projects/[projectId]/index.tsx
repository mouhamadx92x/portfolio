import { Box } from "@mui/material";
import CarouselWithStepper from "./carousel-with-stepper/index";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import CustomTypography from "@/app/components/custom-components/CustomTypography";
import ProjectDetailsNavBar from "./nav-bar";
import ProjectDescription from "./description";
import ProjectFeature from "./feature";
import {
    projectDetailsFeatureAndDescriptionBoxStyles,
    projectDetailsMainBoxStyles,
    projectDetailsNameLabelStyles,
} from "./styles";

const ProjectDetails = () => {
    return (
        <>
            <Header />
            <Box sx={projectDetailsMainBoxStyles}>
                <CarouselWithStepper />
                <CustomTypography
                    text="Name"
                    variant="h3"
                    sx={projectDetailsNameLabelStyles}
                />

                <Box sx={projectDetailsFeatureAndDescriptionBoxStyles}>
                    <ProjectDescription ProjectDescription="hola" />
                    <ProjectFeature featuresList={["ola", "one", "tow"]} />
                </Box>

                <ProjectDetailsNavBar
                    liveProjectLink="#"
                    githubRepositoryLink="#"
                />
            </Box>
            <Footer />
        </>
    );
};

export default ProjectDetails;
