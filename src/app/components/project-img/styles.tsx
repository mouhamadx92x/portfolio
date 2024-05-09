export const projectImgContainerStyles = {
    position: "relative",
    width: { xs: "300px", sm: "600px", md: "800px", lg: "1000px" },
    height: { xs: "200px", sm: "400px", md: "600px", lg: "800px" },
    margin: "30px",
};

export const projectImgOverlayStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    width: { xs: "300px", sm: "600px", md: "800px", lg: "1000px" },
    height: { xs: "200px", sm: "400px", md: "600px", lg: "800px" },
    transform: "translate(-50%, -50%)",
    opacity: 0,
    transition: "opacity   0.3s",
    backgroundColor: "rgba(43,   43,   43,   0.7)",
    "&:hover": {
        opacity: 1,
    },
};

export const projectImgNumberStyles = {
    color: "white",
};
