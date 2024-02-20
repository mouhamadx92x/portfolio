"use client";
import { Box, Typography } from "@mui/material";
import ProjectImg from "../../src/app/components/project-img/index";
import {
    projectListMainBoxStyles,
    projectListTypographyLabelStyles,
} from "./styles";
import { PROJECT_LIST_LABEL } from "../../public/text";

function ProjectList() {
    return (
        <Box sx={projectListMainBoxStyles}>
            <Typography variant="h4" sx={projectListTypographyLabelStyles}>
                {PROJECT_LIST_LABEL}
            </Typography>
            <ProjectImg imgLink={"/images/To-do.png"} number={"0 1"} />
            <ProjectImg imgLink={"/images/Videos-studio.png"} number={"0 2"} />
            <ProjectImg imgLink={"/images/Weather.png"} number={"0 3"} />
        </Box>
    );
}

export default ProjectList;
