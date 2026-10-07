import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { About } from './components/About';
import { ProjectDetail } from './pages/ProjectDetail';
import { Cursor } from './components/Cursor';
function Home() {
  return <div className="w-full min-h-screen bg-white">
      <Hero />
      <ProjectGrid />
      <About />
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