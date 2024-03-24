import {
    PELICAN_TAN_COLOR,
    SHOE_WAX_COLOR,
    WINDSWEPT_LEAVES_COLOR,
} from "../../../../../../public/constants/colors";

export const footerContactUsFormMessageAndButtonBoxStyles = {
    display: "flex",
    flexDirection: "column",
    height: "300px",
    width: { md: "250px" },
};

export const footerContactUsFormLabelStyles = {
    marginBottom: "6px",
};

export const footerContactUsFormMessageTextFieldStyles = {
    marginBottom: "20px",
};

export const footerContactUsFormButtonStyles = {
    backgroundColor: PELICAN_TAN_COLOR,
    color: SHOE_WAX_COLOR,
    alignSelf: "flex-end",
    "&:hover": {
        backgroundColor: WINDSWEPT_LEAVES_COLOR,
    },
};
