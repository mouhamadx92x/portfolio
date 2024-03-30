import {
    PELICAN_TAN_COLOR,
    SHOE_WAX_COLOR,
    WINDSWEPT_LEAVES_COLOR,
} from "../../../../../../public/constants/colors";

export const footerContactUsFormMessageAndButtonBoxStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: { xs: "200px", sm: "130px", md: "200px" },
    width: { xs: "165px", sm: "250px", md: "200px" },
};

export const footerContactUsFormButtonStyles = {
    backgroundColor: PELICAN_TAN_COLOR,
    color: SHOE_WAX_COLOR,
    alignSelf: "flex-end",
    "&:hover": {
        backgroundColor: WINDSWEPT_LEAVES_COLOR,
    },
};
