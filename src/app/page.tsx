import { Box } from "@mui/material";
import Header from "./components/header";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
    return (
        <Box>
            <Header />
            <Footer />
            <ToastContainer position="bottom-center" limit={1} />
        </Box>
    );
};

export default HomePage;
