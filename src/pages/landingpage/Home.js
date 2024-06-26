import { Grid, Box, Typography, Fab } from "@mui/material";
import { motion } from "framer-motion"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import IMAGE from "../../assets/images";

function Home({ params }) {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch("http://localhost:3000/Angelo_Tadeo-CV.pdf").then((response) => {
            response.blob().then((blob) => {

                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Angelo Tadeo-CV.pdf";
                alink.click();
            });
        });
    };
    return (
        <Grid container sx={{ minHeight: '700px' }}>
            <Grid item sx={{ display: 'inline-flex', justifyItems: 'flex-Start', flexGrow: .5, alignItems: 'center' }}>
                <Grid item sx={{ minWidth: "10%" }}>
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
                        <Fab variant="extended" color={params ? 'secondary' : 'primary'} onClick={onButtonClick}>
                            <DownloadForOfflineIcon sx={{ mr: 1 }} />
                            <Typography>Download CV</Typography>
                        </Fab>
                        <Fab variant="extended" color={params ? 'secondary' : 'primary'}>
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