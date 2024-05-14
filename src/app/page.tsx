"use client";
import { Box } from "@mui/material";
import Header from "./components/header";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { homePageMainBoxStyles, homePageProjectsCardBoxStyles } from "./styles";
import ProductCard from "./components/project-card";
import { projectsData } from "../../public/assets/assets";
import "../styles/global.css";
import useScrollHeight from "@/hooks/useScrollHeight";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NewHeader from "./components/header-new";

const HomePage = () => {
    const boxHeight = useScrollHeight({ initialValue: 125 });

    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1920,
            },
        },
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ ...homePageMainBoxStyles, height: boxHeight }}>
                    <NewHeader />
                </Box>
                <Box sx={homePageProjectsCardBoxStyles}>
                    {projectsData.map(
                        ({
                            imagesPath,
                            name,
                            creationDate,
                            webSiteLink,
                            description,
                            id,
                        }) => (
                            <ProductCard
                                key={id}
                                imagesPath={imagesPath}
                                name={name}
                                creationDate={creationDate}
                                webSiteLink={webSiteLink}
                                description={description}
                            />
                        )
                    )}
                </Box>
                <Footer />
                <ToastContainer position="bottom-center" limit={1} />
            </ThemeProvider>
        </>
    );
};

export default HomePage;
