import { Grid, Box, Typography, Fab } from "@mui/material";
import { motion } from "framer-motion"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import IMAGE from "../../assets/images";
function Home() {
    return (
        <Grid container sx={{ minHeight: '700px' }}>
            <Grid item sx={{ display: 'inline-flex', justifyItems: 'flex-Start', flexGrow: .5, alignItems: 'center' }}>
                <Grid item sx={{ minWidth: "10%" }}>
                    <Box sx={{ '& > :not(style)': { margin: 1 }, display: 'flex', flexDirection: 'column' }}>
                        <Fab component={motion.div} whileHover={{ scale: 1.1 }} size="small" color="secondary" aria-label="LinkedIn" >
                            <LinkedInIcon />
                        </Fab>
                        <Fab component={motion.div} whileHover={{ scale: 1.1 }} size="small" color="secondary" aria-label="Instagram">
                            <InstagramIcon />
                        </Fab>
                        <Fab component={motion.div} whileHover={{ scale: 1.1 }} size="small" color="secondary" aria-label="Facebook">
                            <FacebookIcon />
                        </Fab>
                        <Fab component={motion.div} whileHover={{ scale: 1.1 }} size="small" color="secondary" aria-label="DarkMode">
                            <DarkModeIcon />
                        </Fab>
                    </Box>
                </Grid>
                <Grid item sx={{ display: 'flex', flexDirection: 'column', maxWidth: { sm: '100%', xs: '100%', md: '100%', lg: '100%', xl: '50%' }, }}>
                    <Typography variant="h4" textAlign={{ sm: 'center', xs: 'center', md: 'center', lg: 'left', xl: 'left' }}>
                        Hi, I am
                    </Typography>
                    <Typography variant="h1" textAlign={{ sm: 'center', xs: 'center', md: 'center', lg: 'left', xl: 'left' }}>
                        Angelo Tadeo
                    </Typography>
                    <Typography variant="h4" textAlign={{ sm: 'center', xs: 'center', md: 'center', lg: 'left', xl: 'left' }}>
                        Web Developer
                    </Typography>
                    <Typography variant="h6" textAlign={{ sm: 'center', xs: 'center', md: 'center', lg: 'left', xl: 'left' }}>
                        My approach is marked by creativity, adaptability, and a commitment to delivering projects with excellence.
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", marginY: 5, }}>
                        <Fab variant="extended" color="primary">
                            <DownloadForOfflineIcon sx={{ mr: 1 }} />
                            <Typography>Download CV</Typography>
                        </Fab>
                        <Fab variant="extended" color="secondary">
                            <ConnectWithoutContactIcon sx={{ mr: 1 }} />
                            <Typography>Contact Me</Typography>
                        </Fab>
                    </Box>
                </Grid>
            </Grid>
            <Grid item sx={{ display: 'flex', justifySelf: { sm: 'center', xs: 'center', md: 'center', lg: 'center', xl: 'flex-end' }, flexGrow: { sm: 1, xs: 1, md: 1, lg: 1, xl: .5 }, alignItems: 'center' }}>
                <Box component="img" src={IMAGE.Sample} alt="Sample"
                    sx={{
                        height: '100%',
                        width: '100%',
                    }} />
            </Grid>
        </Grid>
    );
}

export default Home;