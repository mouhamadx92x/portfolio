import { Box } from "@mui/material";
import CarouselWithStepper from "./carousel-with-stepper/index";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import CustomTypography from "@/app/components/custom-components/CustomTypography";
import ProjectDetailsNavBar from "./nav-bar";
import ProjectDescription from "./description";
import ProjectStackIcons from "./icons/index";
import {
    projectDetailsNameAndDescriptionBoxStyles,
    projectDetailsMainBoxStyles,
    projectDetailsNameAndIconsStyles,
    projectDetailsNameLabelStyles,
} from "./styles";
import { useRouter } from "next/router";

const ProjectDetails = () => {
    const router = useRouter();

    const description = router.query.description as string;
    const stackIconsPaths = router.query.stackIconsPaths as string[];
    const webSiteLink = router.query.webSiteLink as string;
    const githubLink = router.query.githubLink as string;
    const name = router.query.name as string;
    const imagesPath = router.query.imagesPath as string[];

    return (
        <>
            <Header />
            <Box sx={projectDetailsMainBoxStyles}>
                <CarouselWithStepper imagesPath={imagesPath} />

                <ProjectDetailsNavBar
                    liveProjectLink={webSiteLink}
                    githubRepositoryLink={githubLink}
                />

                <Box sx={projectDetailsNameAndDescriptionBoxStyles}>
                    <Box sx={projectDetailsNameAndIconsStyles}>
                        <CustomTypography
                            text={name}
                            variant="h3"
                            sx={projectDetailsNameLabelStyles}
                        />
                        <ProjectStackIcons stackIconsPaths={stackIconsPaths} />
                    </Box>
                    <ProjectDescription ProjectDescription={description} />
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default ProjectDetails;
