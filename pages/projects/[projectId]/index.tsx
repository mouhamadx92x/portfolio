import {
    Box,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import CarouselWithStepper from "./carousel-with-stepper/index";
import { CheckCircle } from "@mui/icons-material";

const ProjectDetails = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#2b2b2b",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                padding: "20px",
            }}
        >
            <CarouselWithStepper />
            <Typography variant="h3" sx={{ margin: "20px", color: "#857b5f" }}>
                Name
            </Typography>

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
                    <Typography
                        variant="h4"
                        sx={{ marginBottom: "20px", color: "#857b5f" }}
                    >
                        description:
                    </Typography>
                    <Typography sx={{ color: "#d5d5d5" }}>
                        BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
                        BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
                        BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
                        BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
                    </Typography>
                </Box>
                <Box
                    sx={{
                        minWidth: "300px",
                        maxWidth: "400px",
                        overflow: "hidden",
                        margin: "10px",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{ marginBottom: "20px", color: "#857b5f" }}
                    >
                        Feature:
                    </Typography>
                    <List sx={{ color: "#d5d5d5" }}>
                        {[
                            "adding tasks",
                            "delete tasks",
                            "mark task as complete",
                            "total and completed tasks counter",
                        ].map((value) => (
                            <ListItem key={value} disableGutters>
                                <ListItemIcon>
                                    <CheckCircle sx={{ color: "#857b5f" }} />
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
                <Link
                    href="#"
                    underline="none"
                    sx={{ color: "#857b5f", fontSize: "25px" }}
                >
                    Back to Projects
                </Link>
                <Link
                    href="#"
                    underline="none"
                    sx={{ color: "#857b5f", fontSize: "25px" }}
                >
                    see the live project
                </Link>
                <Link
                    href="#"
                    underline="none"
                    sx={{ color: "#857b5f", fontSize: "25px" }}
                >
                    Github
                </Link>
            </Box>
        </Box>
    );
};

export default ProjectDetails;
