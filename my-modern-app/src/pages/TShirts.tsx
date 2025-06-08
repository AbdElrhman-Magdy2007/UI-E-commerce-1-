
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TShirts = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');

  const filters = ['All', 'Oversized', 'Printed', 'Basic'];
  const sizes = ['All', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['All', 'Black', 'White', 'Gray', 'Navy', 'Olive', 'Burgundy'];

  const products = [
    {
      id: 1,
      name: "Classic White Tee",
      price: 35,
      image: "https://i.pinimg.com/736x/3b/31/30/3b31303326c652b6423885f7db1a72f9.jpg",
      type: "Basic",
      recommended: "Perfect for layering under hoodies"
    },
    {
      id: 2,
      name: "Graphic Print Tee",
      price: 45,
      image: "https://i.pinimg.com/736x/31/a8/6e/31a86ef15688e5a6829d88bf321785a1.jpg",
      type: "Printed",
      recommended: "Great for making a statement"
    },
    {
      id: 3,
      name: "Oversized Black Tee",
      price: 42,
      image: "https://i.pinimg.com/736x/73/08/7e/73087e412053e7b96583ca004547fe08.jpg",
      type: "Oversized",
      recommended: "Ideal for relaxed streetwear looks"
    },
    {
      id: 4,
      name: "Vintage Band Tee",
      price: 50,
      image: "https://i.pinimg.com/736x/94/86/63/94866314800f7a9ff2f10e5c5b355804.jpg",
      type: "Printed",
      recommended: "Authentic vintage vibe"
    },
    {
      id: 5,
      name: "Basic Gray Tee",
      price: 38,
      image: "https://i.pinimg.com/1200x/5f/3f/c2/5f3fc2e8f5f3b6106be2ac23708dfa86.jpg",
      type: "Basic",
      recommended: "Versatile everyday essential"
    },
    {
      id: 6,
      name: "Oversized Logo Tee",
      price: 48,
      image: "https://i.pinimg.com/736x/f1/8c/28/f18c280391689254a03fc7e5445cf788.jpg",
      type: "Oversized",
      recommended: "Bold branding for confident style"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Banner */}
      <div className="relative h-96 bg-gradient-to-r from-gray-100 to-gray-200">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-black">
            <h1 className="text-5xl font-bold mb-4">T-Shirts</h1>
            <p className="text-xl max-w-2xl">
              Lightweight, versatile, and expressive – our tees bring creativity to life. 
              Whether you're layering or making a statement, find the t-shirt that fits your vibe.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-6 mb-8 p-6 bg-gray-50 rounded-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
            <select 
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            >
              {filters.map(filter => (
                <option key={filter} value={filter}>{filter}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
            <select 
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            >
              {sizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
            <select 
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            >
              {colors.map(color => (
                <option key={color} value={color}>{color}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Style Guide Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Styling Tips</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Layering</h3>
              <p className="text-gray-600">Perfect base layer under CLOTHES, jackets, or cardigans</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Solo Statement</h3>
              <p className="text-gray-600">Let graphic tees shine on their own with jeans or shorts</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Casual Comfort</h3>
              <p className="text-gray-600">Basic tees are ideal for everyday wear and workout sessions</p>
            </div>
          </div>
        </div>

        {/* Products Grid with Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-100 mb-4">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-black text-xs px-2 py-1 rounded">
                    {product.type}
                  </span>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                    Quick Add
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-black">{product.name}</h3>
                <p className="text-sm text-gray-600 italic">{product.recommended}</p>
                <p className="text-lg font-bold text-black">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Usage Recommendations */}
        <div className="mt-16 bg-black text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Style Recommendations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Casual Wear</h3>
              <p className="text-gray-300 mb-4">
                Basic tees are perfect for everyday comfort. Pair with jeans, joggers, or shorts for effortless style.
              </p>
              <Button variant="outline" className="border-white text-black hover:bg-white hover:text-black">
                Shop Basics
              </Button>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Layering Expert</h3>
              <p className="text-gray-300 mb-4">
                Use our tees as base layers under CLOTHES and jackets. Mix and match for creative layered looks.
              </p>
              <Button variant="outline" className="border-white text-black hover:bg-white hover:text-black">
                Layering Guide
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TShirts;
