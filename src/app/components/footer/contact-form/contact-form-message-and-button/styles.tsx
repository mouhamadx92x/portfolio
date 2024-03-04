import {
    PELICAN_TAN_COLOR,
    SHOE_WAX_COLOR,
} from "../../../../../../public/constants/colors";

export const footerContactUsFormMessageAndButtonBoxStyles = {
    display: "flex",
    flexDirection: "column",
    height: "300px",
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
        backgroundColor: PELICAN_TAN_COLOR,
    },
};
