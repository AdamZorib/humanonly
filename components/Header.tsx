import React from 'react';
import { Fingerprint } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <nav className="relative z-10 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
      <div className="flex items-center space-x-2">
        <div className="p-2 bg-white/5 rounded-full border border-white/10">
          <Fingerprint className="w-5 h-5 text-brand-glow" />
        </div>
        <span className="font-display font-bold text-lg tracking-tight text-white/90">
          human<span className="text-brand-glow">only</span>
        </span>
      </div>
      <div className="hidden sm:block">
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
          Dostępna / Available
        </span>
      </div>
    </nav>
  );
};

export default Header;