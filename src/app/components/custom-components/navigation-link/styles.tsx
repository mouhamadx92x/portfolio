import {
    COCOA_PECAN_COLOR,
    PELICAN_TAN_COLOR,
    WHITE_COLOR,
} from "../../../../../public/constants/colors";

export const navigationLinkStyles = {
    textDecoration: "none",
    color: WHITE_COLOR,
    backgroundColor: COCOA_PECAN_COLOR,
    "&:hover": {
        backgroundColor: PELICAN_TAN_COLOR,
    },
};
