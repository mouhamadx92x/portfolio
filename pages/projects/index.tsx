import { Box, Typography } from "@mui/material";
import ProjectImg from "../../src/app/components/project-img/index";

function ProjectList() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#2b2b2b",
            }}
        >
            <Typography>Projects:</Typography>
            <ProjectImg />
            <ProjectImg />
            <ProjectImg />
        </Box>
    );
}

export default ProjectList;
