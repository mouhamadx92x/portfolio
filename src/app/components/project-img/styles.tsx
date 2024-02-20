export const projectImgContainerStyles = {
    position: "relative",
    width: "1000px",
    height: "800px",
    margin: "30px",
};

export const projectImgOverlayStyles = {
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
    transition: "opacity   0.3s",
    backgroundColor: "rgba(43,   43,   43,   0.7)",
    "&:hover": {
        opacity: 1,
    },
};

export const projectImgNumberStyles = {
    color: "white",
};
