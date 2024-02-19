"use client";
import { Box, Typography } from "@mui/material";
import Header from "./components/header";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { homePageMainBoxStyles, homePageProjectsCardBoxStyles } from "./styles";
import ProductCard from "./components/project-card";

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
                <ProductCard
                    imgLink={"/images/To-do.png"}
                    name={"TO DO"}
                    date={"8/23"}
                    webSiteLink={"https://todo-app-mou.netlify.app/"}
                    description={
                        "TO DO app is where you can manege your daily tasks"
                    }
                />
                <ProductCard
                    imgLink={"/images/Weather.png"}
                    name={"Weather"}
                    date={"9/23"}
                    webSiteLink={"https://weather-app-mou.netlify.app/"}
                    description={
                        "Take a look to the weather in any city you want"
                    }
                />
                <ProductCard
                    imgLink={"/images/Videos-studio.png"}
                    name={"Videos Studio"}
                    date={"1/24"}
                    webSiteLink={"https://videos-gallery.netlify.app/"}
                    description={
                        "Videos Studio is an Interior Designer's Projects Gallery"
                    }
                />
            </Box>
            <Footer />
            <ToastContainer position="bottom-center" limit={1} />
        </>
    );
};

export default HomePage;
