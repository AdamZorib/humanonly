import React from 'react';
import { ShieldCheck, BrainCircuit, Globe2, MousePointerClick } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    icon: BrainCircuit,
    title: "AI & Future Proof",
    description: "Idealna nazwa dla projektów weryfikacji tożsamości, certyfikacji treści lub human-centric tech."
  },
  {
    icon: ShieldCheck,
    title: "Autorytet i Zaufanie",
    description: "Mocna, jednoznaczna nazwa budująca natychmiastowy autorytet w branży security lub HR."
  },
  {
    icon: Globe2,
    title: "Globalny Zasięg",
    description: "Angielska nazwa z polskim rozszerzeniem. Idealna dla polskich firm z ambicjami globalnymi."
  },
  {
    icon: MousePointerClick,
    title: "Łatwa do zapamiętania",
    description: "Tylko dwa słowa. Prosta pisownia. Wysoki potencjał marketingowy i brandingowy."
  }
];

const Features: React.FC = () => {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300 group"
          >
            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-brand-glow group-hover:scale-110 transition-transform duration-300 border border-white/10">
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 font-display">{feature.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;