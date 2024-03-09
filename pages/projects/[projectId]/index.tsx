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
import { useRouter } from "next/router";

const ProjectDetails = () => {
    const router = useRouter();
    const { description, feature, webSiteLink, githubLink, name, imagesPath } =
        router.query;
    console.log(typeof description);
    console.log(name);

    return (
        <>
            <Header />
            <Box sx={projectDetailsMainBoxStyles}>
                <CarouselWithStepper imagesPath={imagesPath} />
                <CustomTypography
                    text={name}
                    variant="h3"
                    sx={projectDetailsNameLabelStyles}
                />

                <Box sx={projectDetailsFeatureAndDescriptionBoxStyles}>
                    <ProjectDescription ProjectDescription={description} />
                    <ProjectFeature featuresList={feature} />
                </Box>

                <ProjectDetailsNavBar
                    liveProjectLink={webSiteLink}
                    githubRepositoryLink={githubLink}
                />
            </Box>
            <Footer />
        </>
    );
};

export default ProjectDetails;
