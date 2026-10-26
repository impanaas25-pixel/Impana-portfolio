import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Timeline from './components/Timeline';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070913] text-slate-100 flex flex-col selection:bg-violet-600/30 selection:text-cyan-300 font-sans relative">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* Section 1 & 3: Hero */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* Section 4: About Me & What I Enjoy Building */}
        <About />

        {/* Section 5: Projects Showcase */}
        <Projects />

        {/* Section 6: Technical Skills */}
        <Skills />

        {/* Section 7: Certifications & Continuous Learning */}
        <Certifications />

        {/* Section 8: Hackathons & Education Timeline */}
        <Timeline />

        {/* Section 9: Interactive Developer Playground ("Inside My Developer Mind") */}
        <Terminal />

        {/* Section 10: Contact Section */}
        <Contact />
      </main>

      {/* Section 11: Footer */}
      <Footer />

      {/* Resume Preview & Download Modal */}
      {resumeModalOpen && (
        <ResumeModal onClose={() => setResumeModalOpen(false)} />
      )}
    </div>
  );
}
