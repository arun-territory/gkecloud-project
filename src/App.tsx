import React from 'react';
import { motion } from 'framer-motion';
import { Container, Layers, GitBranch, Terminal, Database, Cloud } from 'lucide-react';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Header } from './components/Header';
import { PricingSection } from './components/PricingSection';
import { StatsSection } from './components/StatsSection';
import { TimelineSection } from './components/TimelineSection';
import { TestimonialSection } from './components/TestimonialSection';

// ... existing container and item animations ...

function App() {
  const handleLearnMore = () => {
    window.open('https://www.youtube.com/watch?v=iVeTt_8Cxuw', '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="relative overflow-hidden pt-32 pb-32 bg-gradient-to-br from-gray-50 via-white to-blue-50"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">DevOps Experience Program</span>
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
                Build Your Future in Tech
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Transform your career with hands-on DevOps experience. Learn the tools, practices, and mindset needed to excel in modern software development.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Button size="lg">
                  Apply Now
                </Button>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Button variant="outline" size="lg" onClick={handleLearnMore}>
                  Learn More
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Rest of the components remain the same */}
      <StatsSection />
      <TimelineSection />
      {/* Features Section */}
      <div className="py-16 bg-white">
        {/* ... existing features section ... */}
      </div>
      <TestimonialSection />
      <PricingSection />
    </div>
  );
}

export default App;