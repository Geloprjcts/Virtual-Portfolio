import { Grid, Box, Typography, Fab, Paper, useMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { motion } from "framer-motion"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Home from './pages/landingpage/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Portfolio from './pages/portfolio/Portfolio';
import Testimonials from './pages/testimonials/Testimonials';
import Blog from './pages/blog/Blog';
import Footer from './pages/landingpage/Footer';
import { useState } from "react";
import LightMode from "@mui/icons-material/LightMode";

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');
  const [mode, setMode] = useState(prefersDarkMode);

  const handleChange = () => {
    if (mode) {
      setMode(false);
    } else { setMode(true) }
  }
  const darkTheme = createTheme({
    palette: {
      mode: mode ? 'dark' : 'light',
      primary: {
        main: '#1976d2',
        light: '#42a5f5',
        dark: '#1565c0',
        contrastText: mode ? '#fff' : '#000',
      },

      secondary: {
        main: '#5ea27c',
        light: '#63c293',
        dark: '#497960',
        contrastText: mode ? '#fff' : '#000',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={{ minHeight: '100%' }} square>
        <Box sx={{ '& > :not(style)': { margin: 1 }, display: 'flex', position: 'fixed', flexDirection: 'column', marginY: '10%', zIndex: 1 }}>
          <Fab component={motion.a} whileHover={{ scale: 1.1 }} size="large" color={mode ? 'secondary' : 'primary'} aria-label="LinkedIn" href="https://www.linkedin.com/in/angelo-tadeo-4a620b269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <LinkedInIcon />
          </Fab>
          <Fab component={motion.a} whileHover={{ scale: 1.1 }} size="large" color={mode ? 'secondary' : 'primary'} aria-label="Instagram" href="https://www.instagram.com/this_aint_gelo/" target="_blank">
            <InstagramIcon />
          </Fab>
          <Fab component={motion.a} whileHover={{ scale: 1.1 }} size="large" color={mode ? 'secondary' : 'primary'} aria-label="Facebook" href="https://www.facebook.com/angelo.tadeo.7" target="_blank">
            <FacebookIcon />
          </Fab>
          <Fab component={motion.button} whileHover={{ scale: 1.1 }} size="large" color={mode ? 'secondary' : 'primary'} onClick={handleChange}>
            {mode ? <LightMode /> : <DarkModeIcon />}
          </Fab>
        </Box>
        <Home params={mode} />
        <About params={mode} />
        <Services params={mode} />
        <Portfolio params={mode} />
        <Testimonials params={mode} />
        <Blog params={mode} />
        <Footer params={mode} />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
