import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import Link from "next/link";

const NewHeader = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Box>
                    <DeveloperModeIcon fontSize="large" />
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
