import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavLink {
  name: string;
  path: string;
}

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const navLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'Men', path: '/men' },
    { name: 'Women', path: '/women' },
    { name: 'Hoodies', path: '/hoodie' },
    { name: 'T-Shirts', path: '/t-shirts' },
    { name: 'Accessories', path: '/accessories' },
  ];

  const handleMobileMenuToggle = () => {
    setIsLoading(true);
    setMobileOpen(!mobileOpen);
    setTimeout(() => setIsLoading(false), 100);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-widest" aria-label="Home">
          CLOTHES
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-6 items-center" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition ${
                isActive(link.path)
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-700 hover:text-black'
              }`}
              aria-label={`Navigate to ${link.name}`}
              aria-current={isActive(link.path) ? 'page' : undefined}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="focus:outline-none">
            <Search className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
          </button>
          <Link to="/cart" aria-label="Shopping cart">
            <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-black" />
          </Link>
          <Link to="/account" aria-label="User account">
            <User className="w-5 h-5 text-gray-600 hover:text-black" />
          </Link>
          {/* Mobile Menu Icon */}
          <button
            onClick={handleMobileMenuToggle}
            className="md:hidden focus:outline-none"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div 
          className={`md:hidden bg-white border-t border-gray-100 px-4 py-2 transition-opacity duration-200 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 text-sm font-medium ${
                isActive(link.path)
                  ? 'text-black border-l-4 border-black pl-2'
                  : 'text-gray-700 hover:text-black'
              }`}
              aria-label={`Navigate to ${link.name}`}
              aria-current={isActive(link.path) ? 'page' : undefined}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/cart" 
            className={`block py-2 text-sm font-medium ${
              isActive('/cart')
                ? 'text-black border-l-4 border-black pl-2'
                : 'text-gray-700 hover:text-black'
            }`}
            aria-label="Shopping cart"
            aria-current={isActive('/cart') ? 'page' : undefined}
          >
            Cart
          </Link>
          <Link 
            to="/account" 
            className={`block py-2 text-sm font-medium ${
              isActive('/account')
                ? 'text-black border-l-4 border-black pl-2'
                : 'text-gray-700 hover:text-black'
            }`}
            aria-label="User account"
            aria-current={isActive('/account') ? 'page' : undefined}
          >
            Account
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
