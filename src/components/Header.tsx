import React from 'react';
import { Cloud } from 'lucide-react';
import { Button } from './Button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Cloud className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
              GKEcloud
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">Internship</Button>
            <Button variant="outline" size="sm">Sign In</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}