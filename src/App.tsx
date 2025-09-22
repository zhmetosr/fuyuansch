import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Teachers from "@/pages/Teachers";
import Facilities from "@/pages/Facilities";
import News from "@/pages/News";
import Admission from "@/pages/Admission";
import Contact from "@/pages/Contact";
import CourseCenter from "@/pages/CourseCenter";
import TeachingManagement from "@/pages/TeachingManagement";
import Environment from "@/pages/Environment";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';
import CustomerService from '@/components/CustomerService';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/news" element={<News />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course-center" element={<CourseCenter />} />
        <Route path="/gaokao/management" element={<TeachingManagement />} />
        <Route path="/gaokao/environment" element={<Environment />} />
        <Route path="/gaokao/teachers" element={<Teachers />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <CustomerService />
    </AuthContext.Provider>
  );
}
