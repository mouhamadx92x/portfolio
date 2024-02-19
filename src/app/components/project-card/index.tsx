import { Box, Typography } from "@mui/material";

const ProductCard = () => {
    const img = "/images/background.jpg";

    return (
        <Box>
            <Box
                sx={{
                    width: "360px",
                    height: "480px",
                    background: `url(${img})`,
                }}
            ></Box>
            <Box>
                <Typography>22/3</Typography>
                <Typography variant="h1">Name</Typography>
                <Typography>Desc</Typography>
                <Typography>Name</Typography>
            </Box>
        </Box>
    );
};

export default ProductCard;
