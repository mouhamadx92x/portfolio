import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import Link from "next/link";
import { PELICAN_TAN_COLOR } from "../../../../public/constants/colors";

const NewHeader = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Box
                    sx={{
                        width: "275px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginRight: "30px",
                        color: PELICAN_TAN_COLOR,
                    }}
                >
                    <DeveloperModeIcon sx={{ fontSize: "70px" }} />
                    <Typography variant="h4">Mohammad</Typography>
                </Box>
                <Box>
                    <Link href="" passHref>
                        <Typography variant="h4">mo</Typography>
                    </Link>
                    <Link href="" passHref>
                        <Typography variant="h4">mo</Typography>
                    </Link>
                    <Link href="" passHref>
                        <Typography variant="h4">mo</Typography>
                    </Link>
                    <Link href="" passHref>
                        <Typography variant="h4">mo</Typography>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
export default NewHeader;
