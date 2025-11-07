import React from 'react';
import Hero from './components/Hero';
import Program from './components/Program';
import Schedule from './components/Schedule';
import Tickets from './components/Tickets';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Program />
      <Schedule />
      <Tickets />
      <Footer />
    </div>
  );
}

export default App;
