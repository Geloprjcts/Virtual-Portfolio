import { Box, Container } from '@mui/material';
import Home from './pages/landingpage/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Portfolio from './pages/portfolio/Portfolio';
import Testimonials from './pages/testimonials/Testimonials';
import Blog from './pages/blog/Blog';
import Footer from './pages/landingpage/Footer';
function App() {
  return (
    <Box minWidth="100%">
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Footer />
    </Box>
  );
}

export default App;
