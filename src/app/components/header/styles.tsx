import { HYDRARGYRUM_COLOR } from "../../../../public/constants/colors";

export const headerAppBarStyles = {
    width: "60vw",
    margin: "0 auto",
    backgroundColor: "transparent",
    border: "0",
    boxShadow: "none",
    top: "0",
    right: "25%",
};

export const headerBigToolbarStyles = {
    display: { xs: "none", sm: "flex", md: "flex" },
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
};

export const headerSmallToolbarStyles = {
    display: { xs: "flex", sm: "none", md: "none" },
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
};

export const headerMainBoxStyles = { flexGrow: 1 };

export const headerMenuIconStyles = { color: HYDRARGYRUM_COLOR };
