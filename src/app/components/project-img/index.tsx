import { Box, CardMedia, Typography } from "@mui/material";

interface projectImgProp {
    number: string;
    imgLink: string;
}

const ProjectImg = ({ imgLink, number }: projectImgProp) => {
    return (
        <Box
            sx={{
                position: "relative",
                width: "1000px",
                height: "800px",
                margin: "30px",
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
                    width: "1000px",
                    height: "800px",
                    transform: "translate(-50%, -50%)",
                    opacity: 0,
                    transition: "opacity  0.3s",
                    backgroundColor: "rgba(43,   43,   43,   0.7)",
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
