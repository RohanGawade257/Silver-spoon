import { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Specials', href: '#specials' },
    { name: 'Timings', href: '#timings' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Desktop & Mobile Navbar Wrapper */}
      <div 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out flex justify-center ${
          scrolled ? 'pt-4' : 'pt-0'
        }`}
      >
        <nav 
          className={`transition-all duration-300 ease-in-out flex items-center justify-between px-6 py-4 w-full ${
            scrolled 
              ? 'max-w-4xl mx-auto glass-nav rounded-full shadow-2xl shadow-black/50' 
              : 'max-w-7xl mx-auto bg-transparent'
          }`}
        >
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-white tracking-wide">
            Silver <span className="text-[var(--color-accent)]">Spoon</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-gray-200 hover:text-[var(--color-accent)] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Location button desktop */}
          <div className="hidden md:block">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Silver%20Spoon%20Radhaee%20Opp%20Radhakrishna%20Temple%20Sankhali%20Goa%20403505"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[var(--color-accent)] text-[var(--color-primary)] px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
            >
              <MapPin size={18} />
              <span>Directions</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-[var(--color-accent)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 glass-nav flex flex-col justify-center items-center pt-20">
          <div className="flex flex-col space-y-6 text-center w-full px-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-semibold text-white hover:text-[var(--color-accent)] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Silver%20Spoon%20Radhaee%20Opp%20Radhakrishna%20Temple%20Sankhali%20Goa%20403505"
              target="_blank"
              rel="noreferrer"
              className="mt-8 flex justify-center items-center gap-2 bg-[var(--color-accent)] text-[var(--color-primary)] px-6 py-3 rounded-full font-bold text-lg"
            >
              <MapPin size={24} />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
