import React from "react";
// import HeroSection from "./components/HeroSection";
import MainSection from "./components/mainSection";
import Features from "./components/Features";
import TrustedBy from "./components/TrustedBy";
import FeaturesSection from "./components/FeaturesSection";
// import Features from "./components/Features";
import SecondF from "./components/SecondF"; // Ensure this exists
import Footer from "./components/Footer";
// import Dashboard from "./components/Dashboard"; // Add a proper Dashboard component
import { BrowserRouter  as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainSection />} />
        {/* <Route path="/" element={<Features />} /> */}
        <Route path="/login" element={<Features />} />
        <Route path="/register" element={<TrustedBy />} />
        <Route path="/resetpassword/features" element={<FeaturesSection />} />
        {/* <Route path="/resetpassword/secondf" element={<SecondF />} /> */}
        <Route path="/resetpassword/footer" element={<Footer />} />

        {/* Protected Route */}
        {/* <Route 
          path="/dashboard/*" 
          element={<Dashboard />} // Replace with your dashboard component
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
