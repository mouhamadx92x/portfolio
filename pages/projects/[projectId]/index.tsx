import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CarouselWithStepper from "./carousel-with-stepper/index";
import { CheckCircle } from "@mui/icons-material";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import CustomTypography from "@/app/components/custom-components/CustomTypography";
import NavigationLink from "@/app/components/custom-components/navigation-link";
import ProjectDetailsNavBar from "./nav-bar";
import ProjectDescription from "./description";

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
                    <Box
                        sx={{
                            minWidth: "300px",
                            maxWidth: "400px",
                            overflow: "hidden",
                            margin: "10px",
                        }}
                    >
                        <CustomTypography
                            text="Feature:"
                            variant="h4"
                            sx={{ marginBottom: "20px", color: "#857b5f" }}
                        />

                        <List sx={{ color: "#d5d5d5" }}>
                            {[
                                "adding tasks",
                                "delete tasks",
                                "mark task as complete",
                                "total and completed tasks counter",
                            ].map((value) => (
                                <ListItem key={value} disableGutters>
                                    <ListItemIcon>
                                        <CheckCircle
                                            sx={{ color: "#857b5f" }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={value} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
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
