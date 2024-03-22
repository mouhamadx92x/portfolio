import {
    PELICAN_TAN_COLOR,
    SHOE_WAX_COLOR,
    WINDSWEPT_LEAVES_COLOR,
} from "../../../public/constants/colors";

export const downloadButtonsBoxStyles = {
    marginBottom: 2,
    display: "flex",
    alignContent: "space-between",
    justifyContent: "space-between",
    width: "500px",
};

export const downloadButtonsStyles = {
    backgroundColor: PELICAN_TAN_COLOR,
    color: SHOE_WAX_COLOR,
    "&:hover": {
        backgroundColor: WINDSWEPT_LEAVES_COLOR,
    },
};
