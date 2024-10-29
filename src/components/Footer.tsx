import React from 'react';
import { Brain } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Brain className="w-6 h-6" />
            <span className="font-medium">Victory AI</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Features</a>
            <a href="#" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © 2024 Victory AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}