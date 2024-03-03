import { Box, Link, Typography } from "@mui/material";
import CarouselWithStepper from "./carousel-with-stepper/index";

const ProjectDetails = () => {
    return (
        <Box>
            <CarouselWithStepper />
            <Typography>Name</Typography>
            <Typography>description:</Typography>
            <Typography>Feature:</Typography>
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
