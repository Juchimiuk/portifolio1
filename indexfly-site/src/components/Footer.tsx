import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-sky-950 text-white py-2">
    <div className='flex'>
      <img className="w-10 ml-5" src="favicon.png" alt="Logo Index Fly" />
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        <span className="text-sm">&copy; {new Date().getFullYear()} INDEXFLY. Todos os direitos reservados.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
