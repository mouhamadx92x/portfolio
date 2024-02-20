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
            <ProjectImg imgLink={"/images/To-do.png"} number={"0 1"} />
            <ProjectImg imgLink={"/images/Videos-studio.png"} number={"0 2"} />
            <ProjectImg imgLink={"/images/Weather.png"} number={"0 3"} />
        </Box>
    );
}

export default ProjectList;
