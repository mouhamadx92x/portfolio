import {
    PELICAN_TAN_COLOR,
    SHOE_WAX_COLOR,
    WINDSWEPT_LEAVES_COLOR,
} from "../../../public/constants/colors";

export const downloadButtonsBoxStyles = {
    marginBottom: "20px",
    display: "flex",
    alignContent: "space-around",
    justifyContent: "space-around",
    width: { xs: "300px", sm: "550px", md: "800px", lg: "1000px" },
};

export const downloadButtonsStyles = {
    backgroundColor: PELICAN_TAN_COLOR,
    width: { xs: "130px", sm: "200px" },
    color: SHOE_WAX_COLOR,
    "&:hover": {
        backgroundColor: WINDSWEPT_LEAVES_COLOR,
    },
};
