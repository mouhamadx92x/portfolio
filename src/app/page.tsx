"use client";
import { Box } from "@mui/material";
import Header from "./components/header";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { homePageMainBoxStyles, homePageProjectsCardBoxStyles } from "./styles";
import ProductCard from "./components/project-card";
import { projectsData } from "../../public/assets/assets";
import "../styles/global.css";

const HomePage = () => {
    const [boxHeight, setBoxHeight] = useState("500px");
    useEffect(() => {
        const handleScroll = () => {
            const newHeight = Math.max(300, 500 - window.scrollY / 2) + "px";
            setBoxHeight(newHeight);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Box sx={{ ...homePageMainBoxStyles, height: boxHeight }}>
                <Header />
            </Box>
            <Box sx={homePageProjectsCardBoxStyles}>
                {projectsData.map(
                    ({
                        imgPath,
                        name,
                        creationDate,
                        webSiteLink,
                        description,
                        id,
                    }) => (
                        <ProductCard
                            key={id}
                            imgPath={imgPath}
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
        </>
    );
};

export default HomePage;
