import { Box, CardMedia, Typography } from "@mui/material";

const ProjectImg = () => {
    const number = "0 3";

    const imgLink =
        "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp";

    return (
        <Box
            sx={{
                position: "relative",
                width: 350,
                height: 350,
            }}
        >
            <CardMedia
                component="img"
                height="100%"
                width="100%"
                image={imgLink}
                alt="Card image"
            />
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: 350,
                    height: 350,
                    transform: "translate(-50%, -50%)",
                    opacity: 0,
                    transition: "opacity  0.3s",
                    backgroundColor: "rgba(43,  43,  43,  0.5)",
                    "&:hover": {
                        opacity: 1,
                    },
                }}
            >
                <Typography variant="h1" sx={{ color: "white" }}>
                    {number}
                </Typography>
            </Box>
        </Box>
    );
};

export default ProjectImg;
