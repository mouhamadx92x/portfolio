import { BLEACHED_SILK_COLOR } from "../../../../public/constants/colors";
export const footerMainBoxStyles = {
    display: "flex",
    backgroundColor: "black",
    justifyContent: "center",
};

export const footerBoxStyles = {
    height: { xs: "600px", sm: "330px", md: "330px" },
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: { xs: "space-between", md: "space-between" },
    alignItems: { xs: "center", md: "center" },
    paddingTop: { xs: "5px", sm: "5px", md: "15px" },
    paddingBottom: { xs: "5px", sm: "5px", md: "15px" },
    width: { xs: "375px", sm: "500px", md: "950px" },
    color: BLEACHED_SILK_COLOR,
};
