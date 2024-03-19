import { Box, Button } from "@mui/material";
import FileSaver from "file-saver";
import { downloadButtonsBoxStyles, downloadButtonsStyles } from "./styles";
import {
    CV_IMAGE_DOWNLOAD_BUTTON_LABEL,
    CV_PDF_DOWNLOAD_BUTTON_LABEL,
} from "../../../public/constants/text";
import { CV_IMAGE_PATH, CV_PDF_PATH } from "../../../public/constants/paths";

const DownloadButtons = () => {
    const imageName = "cv.png";
    const pdfName = "CV.pdf";

    const downloadImage = () => {
        fetch(CV_IMAGE_PATH)
            .then((response) => response.blob())
            .then((blob) => {
                FileSaver.saveAs(blob, imageName);
            })
            .catch((error) => console.error("Error downloading image:", error));
    };

    const downloadPdf = () => {
        fetch(CV_PDF_PATH)
            .then((response) => response.blob())
            .then((blob) => {
                FileSaver.saveAs(blob, pdfName);
            })
            .catch((error) => console.error("Error downloading PDF:", error));
    };

    return (
        <Box sx={downloadButtonsBoxStyles}>
            <Button
                variant="contained"
                color="primary"
                onClick={downloadImage}
                sx={downloadButtonsStyles}
            >
                {CV_IMAGE_DOWNLOAD_BUTTON_LABEL}
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={downloadPdf}
                sx={downloadButtonsStyles}
            >
                {CV_PDF_DOWNLOAD_BUTTON_LABEL}
            </Button>
        </Box>
    );
};

export default DownloadButtons;
