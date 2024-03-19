import { Box } from "@mui/material";
import "../../src/styles/global.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import DownloadButtons from "./download-buttons";
import { cvImageStyles, cvImageBoxStyles } from "./styles";

const CVImage = () => {
    const imageSrc = "/images/cv.png";
    const imageAlt = "cv image";
    return (
        <>
            <Header />
            <Box sx={cvImageBoxStyles}>
                <DownloadButtons />
                <Box
                    component="img"
                    src={imageSrc}
                    alt={imageAlt}
                    width={800}
                    height={1000}
                    sx={cvImageStyles}
                />
            </Box>
            <Footer />
        </>
    );
};

export default CVImage;
