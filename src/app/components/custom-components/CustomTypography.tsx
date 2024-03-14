import Typography, { TypographyProps } from "@mui/material/Typography";

interface CustomTypographyProps extends TypographyProps {
    text: string;
}

const CustomTypography = ({ text, ...props }: CustomTypographyProps) => {
    return <Typography {...props}>{text}</Typography>;
};

export default CustomTypography;
