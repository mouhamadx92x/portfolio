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
import { projectsData } from "../../public/assets/assets";

const ProjectList = () => {
    return (
        <>
            <Header />
            <Box sx={projectListMainBoxStyles}>
                <Typography variant="h4" sx={projectListTypographyLabelStyles}>
                    {PROJECT_LIST_LABEL}
                </Typography>
                {projectsData.map(
                    ({
                        id,
                        imagesPath,
                        projectNumber,
                        description,
                        webSiteLink,
                        githubLink,
                        name,
                        stackIconsPaths,
                    }) => (
                        <ProjectImg
                            imagesPath={imagesPath}
                            projectNumber={projectNumber}
                            key={id}
                            id={id}
                            description={description}
                            webSiteLink={webSiteLink}
                            githubLink={githubLink}
                            name={name}
                            stackIconsPaths={stackIconsPaths}
                        />
                    )
                )}
            </Box>
            <Footer />
        </>
    );
};

export default ProjectList;
