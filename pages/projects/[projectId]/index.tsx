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
        <Box>
            <CarouselWithStepper />
            <Typography>Name</Typography>

            <Box>
                <Box>
                    <Typography>description:</Typography>
                    <Typography>
                        BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
                        BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
                        BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
                    </Typography>
                </Box>
                <Box>
                    <Typography>Feature:</Typography>
                    <List>
                        {[
                            "adding tasks",
                            "delete tasks",
                            "mark task as complete",
                            "total and completed tasks counter",
                        ].map((value) => (
                            <ListItem key={value} disableGutters>
                                <ListItemIcon>
                                    <CheckCircle />
                                </ListItemIcon>
                                <ListItemText primary={value} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>

            <Box>
                <Link href="#" underline="none">
                    see the live project
                </Link>
                <Link href="#" underline="none">
                    Github
                </Link>
                <Link href="#" underline="none">
                    Back to Projects
                </Link>
            </Box>
        </Box>
    );
};

export default ProjectDetails;
