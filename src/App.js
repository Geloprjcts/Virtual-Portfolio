import { Box, Container } from '@mui/material';
import Home from './pages/landingpage/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Portfolio from './pages/portfolio/Portfolio';
import Testimonials from './pages/testimonials/Testimonials';
import Blog from './pages/blog/Blog';
function App() {
  return (
    <Box >
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Blog />
    </Box>
  );
}

export default App;
