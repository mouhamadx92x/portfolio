import { styled } from "@mui/system";
import { TextField } from "@mui/material";

const StyledTextField = styled(TextField)(() => ({
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#949494",
        },
        "&:hover fieldset": {
            borderColor: "#949494",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#949494",
            backgroundColor: "rgba(180, 180, 180,0.2)",
        },
    },
    "& .MuiOutlinedInput-input": {
        color: "#949494",
        height: "13px",
    },
}));

export default StyledTextField;
