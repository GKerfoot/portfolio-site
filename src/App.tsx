import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { About } from './components/About';
import { ProjectDetail } from './pages/ProjectDetail';
import { Cursor } from './components/Cursor';
import { MobileHome } from './components/MobileHome';
function Home() {
  return <div className="w-full min-h-screen bg-white">
      <div className="hidden md:block">
        <Hero />
        <ProjectGrid />
        <About />
      </div>
      <MobileHome />
    </div>;
}
export function App() {
  return <BrowserRouter>
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>;
}