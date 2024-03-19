import React from "react";
import Image from "next/image";
import { Box, Button } from "@mui/material";
import "../../src/styles/global.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import DownloadButtons from "./download-buttons";

const ImageWithDownload: React.FC = () => {
    const imageSrc = "/images/cv.png";
    const imageAlt = "cv image";
    return (
        <>
            <Header />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "#2b2b2b",
                    padding: "20px",
                    paddingTop: "70px",
                }}
            >
                <DownloadButtons />
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={800}
                    height={1000}
                    style={{
                        boxShadow:
                            "0  4px  8px  0 rgba(149,  123,  95,  0.2),  0  6px  20px  0 rgba(149,  123,  95,  0.19)",
                    }}
                />
            </Box>
            <Footer />
        </>
    );
};

export default ImageWithDownload;
