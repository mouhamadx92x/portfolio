import { Box } from "@mui/material";
import CarouselWithStepper from "./carousel-with-stepper/index";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import CustomTypography from "@/app/components/custom-components/CustomTypography";
import ProjectDetailsNavBar from "./nav-bar";
import ProjectDescription from "./description";
import ProjectFeature from "./feature";

const ProjectDetails = () => {
    return (
        <>
            <Header />
            <Box
                sx={{
                    backgroundColor: "#2b2b2b",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    padding: "20px",
                    paddingTop: "70px",
                }}
            >
                <CarouselWithStepper />
                <CustomTypography
                    text="Name"
                    variant="h3"
                    sx={{ margin: "20px", color: "#857b5f" }}
                />

                <Box
                    sx={{
                        width: "900px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
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
