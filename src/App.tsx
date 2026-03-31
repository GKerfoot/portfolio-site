import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { ProjectDetail } from './pages/ProjectDetail';
function Home() {
  return <div className="w-full min-h-screen bg-white">
      <Hero />
      <ProjectGrid />
      <About />
      <Footer />
    </div>;
}
export function App() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>;
}