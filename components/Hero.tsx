import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-20 pb-12 sm:pt-32">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-8 animate-fade-in-up">
        <Sparkles className="w-4 h-4 text-yellow-500" />
        <span>Domena Premium / Premium Domain</span>
      </div>
      
      <h1 className="font-display text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 animate-float">
        humanonly<span className="text-brand-glow">.pl</span>
      </h1>
      
      <p className="max-w-2xl text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed">
        W erze sztucznej inteligencji, tożsamość jest walutą. 
        <br className="hidden sm:block" />
        Idealny adres dla marki stawiającej na autentyczność, bezpieczeństwo i ludzi.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
         <a 
           href="#contact"
           className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
         >
           <span className="relative z-10 flex items-center justify-center gap-2">
             Złóż ofertę
             <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
           </span>
           <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
         </a>
      </div>
    </div>
  );
};

export default Hero;