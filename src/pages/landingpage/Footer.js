import { Grid, Box, Typography, Fab, Avatar } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IMAGE from "../../assets/images";
function Footer() {
    return (
        <Grid container sx={{ backgroundColor: "gray", minHeight: '300px' }}>
            <Box sx={{ '& > :not(style)': { margin: 1 }, display: 'flex', justifyItems: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: "blue", width: '100%' }}>
                <Avatar size="small" color="secondary" aria-label="LinkedIn">
                    <LinkedInIcon />
                </Avatar>
                <Avatar size="small" color="secondary" aria-label="Instagram">
                    <InstagramIcon />
                </Avatar>
                <Avatar size="small" color="secondary" aria-label="Facebook">
                    <FacebookIcon />
                </Avatar>
                <Avatar size="small" color="secondary" aria-label="DarkMode">
                    <DarkModeIcon />
                </Avatar>
            </Box>
        </Grid>
    );
}

export default Footer;