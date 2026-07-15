import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Club from './pages/Club';
import Events from './pages/Events';
import News from './pages/News';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Membership from './pages/Membership';
import Tournament from './pages/Tournament';


const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
<Routes location={location}>
             <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/club" element={<Club />} />
             <Route path="/events" element={<Events />} />
             <Route path="/news" element={<News />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/gallery" element={<Gallery />} />
             <Route path="/membership" element={<Membership />} />
             <Route path="/news" element={<News />} />
             <Route path="/tournament" element={<Tournament />} />
           </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-charcoal">
        <Nav />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;