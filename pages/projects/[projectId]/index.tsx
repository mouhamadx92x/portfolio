import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CarouselWithStepper from "./carousel-with-stepper/index";
import { CheckCircle } from "@mui/icons-material";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import CustomTypography from "@/app/components/custom-components/CustomTypography";
import NavigationLink from "@/app/components/custom-components/navigation-link";

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
                    <Box
                        sx={{
                            minWidth: "300px",
                            maxWidth: "400px",
                            overflow: "hidden",
                            margin: "10px",
                        }}
                    >
                        <CustomTypography
                            text="description:"
                            variant="h4"
                            sx={{ marginBottom: "20px", color: "#857b5f" }}
                        />
                        <CustomTypography
                            text="BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
                            BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
                            BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
                            BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla"
                            sx={{ color: "#d5d5d5" }}
                        />
                    </Box>
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

                <Box
                    sx={{
                        width: "900px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <NavigationLink
                        label="Back to Projects"
                        path="#"
                        sx={{ color: "#857b5f", fontSize: "25px" }}
                    />

                    <NavigationLink
                        label="see the live project"
                        path="#"
                        sx={{ color: "#857b5f", fontSize: "25px" }}
                    />

                    <NavigationLink
                        label="Github"
                        path="#"
                        sx={{ color: "#857b5f", fontSize: "25px" }}
                    />
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default ProjectDetails;
