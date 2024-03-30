import { BLEACHED_SILK_COLOR } from "../../../../../public/constants/colors";

export const footerContactInfoBoxStyles = {
    width: { xs: "350px", sm: "250px", md: "450px" },
    height: "300px",
    color: BLEACHED_SILK_COLOR,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
};

export const footerContactDetailsBoxStyles = {
    display: "flex",
    height: { xs: "125px", sm: "150px", md: "75px" },
    flexDirection: { xs: "column", sm: "column", md: "row" },
    justifyContent: {
        xs: "space-around",
        sm: "space-around",
        md: "space-around",
    },
};

export const footerSocialMediaBoxStyle = {
    alignSelf: "center",
    display: "flex",
    justifyContent: "space-around",
    width: "150px",
};
export const footerSocialMediaStyle = {
    color: BLEACHED_SILK_COLOR,
    alignSelf: "center",
};
