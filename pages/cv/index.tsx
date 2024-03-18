import React from "react";
import Image from "next/image";
import { Box, Button } from "@mui/material";
import FileSaver from "file-saver";
import "../../src/styles/global.css";

const ImageWithDownload: React.FC = () => {
    const imageSrc = "/images/cv.png";
    const imageName = "cv.png";
    const imageAlt = "cv image";

    const pdfSrc = "/cv/CV.pdf";
    const pdfName = "CV.pdf";

    const downloadImage = () => {
        fetch(imageSrc)
            .then((response) => response.blob())
            .then((blob) => {
                FileSaver.saveAs(blob, imageName);
            })
            .catch((error) => console.error("Error downloading image:", error));
    };

    const downloadPdf = () => {
        fetch(pdfSrc)
            .then((response) => response.blob())
            .then((blob) => {
                FileSaver.saveAs(blob, pdfName);
            })
            .catch((error) => console.error("Error downloading PDF:", error));
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#2b2b2b",
                padding: "20px",
            }}
        >
            <Box
                sx={{
                    marginBottom: 2,
                    display: "flex",
                    alignContent: "space-between",
                    justifyContent: "space-between",
                    width: "500px",
                }}
            >
                <Button
                    variant="contained"
                    color="primary"
                    onClick={downloadImage}
                    sx={{ color: "#f2f2f2", backgroundColor: "#857b5f" }}
                >
                    Download image
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={downloadPdf}
                >
                    Download pdf
                </Button>
            </Box>
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
    );
};

export default ImageWithDownload;
