import { SHOE_WAX_COLOR } from "../../public/constants/colors";

export const cvImageStyles = {
    width: { xs: "300px", sm: "550px", md: "800px", lg: "1000px" },
    height: { xs: "500px", sm: "800px", md: "1000px", lg: "1200px" },
    boxShadow:
        "0  4px  8px  0 rgba(149,  123,  95,  0.2),  0  6px  20px  0 rgba(149,  123,  95,  0.19)",
};

export const cvImageBoxStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: SHOE_WAX_COLOR,
    padding: "20px",
    paddingTop: "70px",
};
