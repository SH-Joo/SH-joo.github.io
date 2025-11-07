import { useState } from 'react';

interface HeaderProps {
  currentPage: 'home' | 'papers' | 'blog';
  onNavigate: (page: 'home' | 'papers' | 'blog') => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#002a5c] bg-[#003876]/95 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex h-14 items-center justify-between">
          <div 
            className="cursor-pointer transition-opacity hover:opacity-80"
            onClick={() => onNavigate('home')}
          >
            <span className="text-white tracking-tight text-xl font-semibold">Siheon Joo</span>
          </div>
          
          <div className="flex items-center gap-8">
            <button
              onClick={() => onNavigate('home')}
              className={`relative transition-colors text-sm ${
                currentPage === 'home'
                  ? 'text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Home
              {currentPage === 'home' && (
                <div className="absolute -bottom-[18px] left-0 right-0 h-0.5 bg-white" />
              )}
            </button>
            <button
              onClick={() => onNavigate('papers')}
              className={`relative transition-colors text-sm ${
                currentPage === 'papers'
                  ? 'text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Papers
              {currentPage === 'papers' && (
                <div className="absolute -bottom-[18px] left-0 right-0 h-0.5 bg-white" />
              )}
            </button>
            <button
              onClick={() => onNavigate('blog')}
              className={`relative transition-colors text-sm ${
                currentPage === 'blog'
                  ? 'text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Blog
              {currentPage === 'blog' && (
                <div className="absolute -bottom-[18px] left-0 right-0 h-0.5 bg-white" />
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
