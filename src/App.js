import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NProgress from "nprogress";
import 'nprogress/nprogress.css';
import { AppProvider, AppContext } from "./context/AppContext";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./styles.css";

// Configure NProgress
NProgress.configure({
  minimum: 0.1,
  easing: 'ease',
  speed: 300,
  trickleSpeed: 100,
  showSpinner: false
});

// Component to handle page transitions + NProgress
const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    return () => NProgress.done();
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

function App() {
  const { theme } = useContext(AppContext);

  return (
    <div className={theme}>
      <ParticlesBackground />
      <Navbar />
      <AnimatedRoutes />
    </div>
  );
}

export default function AppWithProvider() {
  return (
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  );
}