import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Session from "./pages/Session";
import SessionCreator from "./pages/SessionCreator";


function App() {
  return (
    <>
      <Navbar /> {/* ✅ ALWAYS visible */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* 🔒 SESSION ROUTES */}
        <Route path="/session/:token" element={<Session />} />
        <Route path="/dashboard/session" element={<SessionCreator />} />


        {/* 🔒 CATCH-ALL ROUTE */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
