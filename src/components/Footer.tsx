
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Company: ['About Us', 'Careers', 'Press', 'News'],
    Support: ['Contact', 'Help Center', 'Size Guide', 'Returns'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer']
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Brand and Links */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold tracking-wider mb-4">CLOTHES</h2>
              <p className="text-gray-300 max-w-md">
                Premium streetwear designed for the modern lifestyle. 
                Quality craftsmanship meets contemporary style.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-semibold mb-4">{category}</h3>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link}>
                        <a 
                          href="#" 
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Featured Product */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-800">
              <img 
                src="https://i.pinimg.com/736x/a7/be/0f/a7be0f476324bbbd68b96ffc85539bdf.jpg"
                alt="Featured CLOTHES with Back Print"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-bold mb-2">SIGNATURE BACK PRINT</h3>
                <p className="text-sm text-gray-300">Limited Edition Collection</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 CLOTHES. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Shipping Info
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Returns
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Size Guide
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
