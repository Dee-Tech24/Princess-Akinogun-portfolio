
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Author', path: '/author' },
    { name: 'Founder', path: '/founder' },
    { name: 'Coach', path: '/coach' },
    { name: 'Speaker', path: '/speaker' },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 border-b ${
      isScrolled ? 'bg-white/90 backdrop-blur-xl border-stone-100 py-4 shadow-sm' : 'bg-transparent border-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="font-serif text-3xl tracking-tighter font-bold hover:text-terracotta transition-colors">
            PA<span className="text-terracotta">.</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[10px] uppercase tracking-[0.3em] text-charcoal/60 hover:text-terracotta transition-colors duration-300 font-bold"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/speaking"
            className="px-8 py-3 border border-brown/10 bg-brown text-white text-[9px] uppercase tracking-[0.3em] font-bold hover:bg-terracotta hover:border-terracotta transition-all duration-500 shadow-xl shadow-brown/5"
          >
            Booking
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-charcoal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-stone-100 py-12 px-6 flex flex-col items-center space-y-8 md:hidden shadow-2xl animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm uppercase tracking-[0.3em] font-bold text-charcoal/70"
              onClick={closeMobileMenu}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/speaking"
            className="w-full text-center px-6 py-4 border border-brown bg-brown text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-terracotta hover:border-terracotta transition-all"
            onClick={closeMobileMenu}
          >
            Inquire for Speaking
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
