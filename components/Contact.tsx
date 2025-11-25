import React, { useState } from 'react';
import { Mail, Copy, Check, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "tzc38w@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="contact" className="relative z-10 max-w-3xl mx-auto px-4 py-16 text-center">
      <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
        {/* Decorative background glow inside card */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-brand-accent/20 blur-[100px] pointer-events-none"></div>

        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Zainteresowany?</h2>
        <p className="text-gray-400 mb-8 text-lg">
          Ta domena jest unikalnym zasobem cyfrowym. Skontaktuj się bezpośrednio z właścicielem, aby negocjować cenę.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="relative group w-full sm:w-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center bg-black rounded-xl p-1 pr-2 border border-white/10 w-full sm:w-auto">
              <div className="p-3 bg-white/10 rounded-lg mr-3">
                <Mail className="w-5 h-5 text-gray-300" />
              </div>
              <span className="font-mono text-lg text-gray-200 mr-4 select-all">{email}</span>
              <button
                onClick={handleCopy}
                className="ml-auto sm:ml-0 p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                title="Skopiuj email"
              >
                {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <a 
            href={`mailto:${email}?subject=Oferta kupna domeny humanonly.pl`}
            className="w-full sm:w-auto px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2 border border-white/5"
          >
            <Send className="w-4 h-4" />
            Napisz wiadomość
          </a>
        </div>
        
        <p className="mt-8 text-xs text-gray-500">
          Transakcja może zostać przeprowadzona przez bezpieczny serwis escrow (np. Aftermarket, Sedo).
        </p>
      </div>
    </div>
  );
};

export default Contact;