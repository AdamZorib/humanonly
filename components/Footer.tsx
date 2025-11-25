import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 w-full py-8 text-center text-gray-600 text-sm">
      <p>&copy; {new Date().getFullYear()} humanonly.pl. Wszelkie prawa zastrzeżone.</p>
    </footer>
  );
};

export default Footer;