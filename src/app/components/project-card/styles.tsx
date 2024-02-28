import {
    COCOA_PECAN_COLOR,
    HYDRARGYRUM_COLOR,
    PELICAN_TAN_COLOR,
} from "../../../../public/constants/colors";

export const projectsCardBoxStyles = {
    display: "flex",
    marginBottom: "50px",
};

export const projectsCardImgBoxStyles = {
    width: "450px",
    boxShadow:
        "0  4px  8px  0 rgba(149,  123,  95,  0.2),  0  6px  20px  0 rgba(149,  123,  95,  0.19)",
};

export const projectsCardTypographyNameStyles = {
    color: COCOA_PECAN_COLOR,
};

export const projectsCardTypographyStyles = {
    color: HYDRARGYRUM_COLOR,
    textDecoration: "none",
    "&:hover": {
        color: PELICAN_TAN_COLOR,
    },
};

export const projectsCardTypographyBoxStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "space-evenly",
    paddingLeft: "75px",
    width: "400px",
};

export const projectsCardImgStyles = { objectFit: "fill" };
