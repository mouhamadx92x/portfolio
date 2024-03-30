import { BLEACHED_SILK_COLOR } from "../../../../../public/constants/colors";

export const footerContactInfoBoxStyles = {
    width: { xs: "350px", sm: "250px", md: "450px" },
    height: { xs: "225px", sm: "300px", md: "225px" },
    color: BLEACHED_SILK_COLOR,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    fontSize: "10px",
};

export const footerContactDetailsBoxStyles = {
    display: "flex",
    height: { xs: "105px", sm: "125px", md: "75px" },
    flexDirection: { xs: "column", sm: "column", md: "row" },
    justifyContent: {
        xs: "space-between",
        sm: "space-between",
        md: "space-between",
    },
};

export const FooterContactInfoTextStyles = { fontSize: "16px" };

export const footerSocialMediaBoxStyles = {
    alignSelf: "center",
    display: "flex",
    justifyContent: "space-around",
    width: "150px",
};
export const footerSocialMediaStyles = {
    color: BLEACHED_SILK_COLOR,
    alignSelf: "center",
};
