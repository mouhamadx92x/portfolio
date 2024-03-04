"use client";
import { Box, Typography } from "@mui/material";
import ProjectImg from "../../src/app/components/project-img/index";
import {
    projectListMainBoxStyles,
    projectListTypographyLabelStyles,
} from "./styles";
import { PROJECT_LIST_LABEL } from "../../public/constants/text";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import "../../src/styles/global.css";

const ProjectList = () => {
    return (
        <>
            <Header />
            <Box sx={projectListMainBoxStyles}>
                <Typography variant="h4" sx={projectListTypographyLabelStyles}>
                    {PROJECT_LIST_LABEL}
                </Typography>
                <ProjectImg imgLink={"/images/To-do.png"} number={"1"} />
                <ProjectImg
                    imgLink={"/images/Videos-studio.png"}
                    number={"2"}
                />
                <ProjectImg imgLink={"/images/Weather.png"} number={"3"} />
            </Box>
            <Footer />
        </>
    );
};

export default ProjectList;
