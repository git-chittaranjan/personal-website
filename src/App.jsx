import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Quotes from './components/quotes';
import HomePage from './components/home-page';
import About from './components/about';
import GetInTouch from './components/contact';
import SkillsSection from './components/skills';
import ExperienceTree from './components/experience';
import ProjectGrid from './components/projects';

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />

      <main className="flex-grow container mx-auto p-6 pt-8">
        <section id='home'>
          <HomePage />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id='about'>
          <About />
        </section>

        <section id='experience'>
          <ExperienceTree />
        </section>

        <section id='projects'>
          <ProjectGrid />
        </section>

        <section id='contact'>
          <GetInTouch />
        </section>

        <Quotes />

      </main>

      <Footer />
    </div>
  );
}

export default App;
