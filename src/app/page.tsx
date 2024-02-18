"use client";
import { Box } from "@mui/material";
import Header from "./components/header";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

const HomePage = () => {
    const [boxHeight, setBoxHeight] = useState("500px");
    const [secondBoxHeight, setSecondBoxHeight] = useState("500px");
    useEffect(() => {
        const handleScroll = () => {
            const newHeight = Math.max(300, 500 - window.scrollY / 2) + "px";
            setBoxHeight(newHeight);
            const newSecondBoxHeight =
                Math.min(800, 500 + window.scrollY / 2) + "px";
            setSecondBoxHeight(newSecondBoxHeight);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Box
                sx={{
                    background: "url(/images/background.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: boxHeight,
                }}
            >
                <Header />
            </Box>
            <Box
                sx={{ height: secondBoxHeight, backgroundColor: "#2b2b2b" }}
            ></Box>
            <Footer />
            <ToastContainer position="bottom-center" limit={1} />
        </>
    );
};

export default HomePage;
