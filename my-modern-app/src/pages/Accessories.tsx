
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Accessories = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');

  const categories = ['All', 'Caps', 'Beanies', 'Tote Bags'];
  const colors = ['All', 'Black', 'White', 'Gray', 'Navy', 'Brown', 'Olive'];

  const products = [
    {
      id: 1,
      name: "Street Cap",
      price: 35,
      image: "https://i.pinimg.com/736x/16/76/d7/1676d7201d8181a1c92acfd5515eca31.jpg",
      category: "Caps",
      color: "Black"
    },
    {
      id: 2,
      name: "Designer Tote",
      price: 65,
      image: "https://i.pinimg.com/736x/22/61/62/226162acc13b44f0afcdeafd425260ba.jpg",
      category: "Tote Bags",
      color: "Black"
    },
    {
      id: 3,
      name: "Winter Beanie",
      price: 25,
      image: "https://i.pinimg.com/736x/7a/a2/7b/7aa27bed9316c753c56140d38c46bee9.jpg",
      category: "Beanies",
      color: "Gray"
    },
    {
      id: 4,
      name: "Logo Cap",
      price: 42,
      image: "https://i.pinimg.com/736x/e8/f7/e4/e8f7e477d0de8a136757dd1a33cce521.jpg",
      category: "Caps",
      color: "Navy"
    },
    {
      id: 5,
      name: "Canvas Tote",
      price: 55,
      image: "https://i.pinimg.com/736x/24/02/55/240255e6a21ee1e8b2643b7f13ae1ca0.jpg",
      category: "Tote Bags",
      color: "Olive"
    },
    {
      id: 6,
      name: "Wool Beanie",
      price: 32,
      image: "https://i.pinimg.com/736x/f6/76/98/f67698f4d61c16809a4b67604f6d71b4.jpg",
      category: "Beanies",
      color: "Brown"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Banner */}
      <div className="relative h-96 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-black">
            <h1 className="text-5xl font-bold mb-4">Accessories</h1>
            <p className="text-xl max-w-2xl">
              Complete your look with curated accessories that add personality and function to your fit. 
              Caps, totes, and more — all crafted to match your urban style.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-6 mb-8 p-6 bg-gray-50 rounded-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
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

        {/* Products Grid - Minimal Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer text-center">
              <div className="relative overflow-hidden rounded-lg aspect-square bg-white border border-gray-100 mb-6">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover p-8 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300"></div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-black">{product.name}</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wider">{product.category}</p>
                <p className="text-lg font-bold text-black">${product.price}</p>
                
                <Button 
                  variant="outline" 
                  className="mt-4 border-black text-black hover:bg-black hover:text-white transition-colors"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 p-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
          <h2 className="text-4xl font-bold text-black mb-6">Pair with Your Favorite CLOTHES</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            These accessories are designed to complement our signature CLOTHES and tees. 
            Create the perfect streetwear ensemble.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-black text-white px-8 py-3 rounded-none hover:bg-gray-800">
              Shop CLOTHES
            </Button>
            <Button variant="outline" className="border-black text-black px-8 py-3 rounded-none hover:bg-black hover:text-white">
              View Styling Guide
            </Button>
          </div>
        </div>

        {/* Product Categories Grid */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Caps & Hats</h3>
              <p className="text-gray-600 mb-4">Complete your streetwear look with our collection of caps and beanies</p>
              <Button variant="outline" size="sm">Shop Caps</Button>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Tote Bags</h3>
              <p className="text-gray-600 mb-4">Functional and stylish bags for your everyday essentials</p>
              <Button variant="outline" size="sm">Shop Bags</Button>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Winter Gear</h3>
              <p className="text-gray-600 mb-4">Stay warm with our collection of beanies and winter accessories</p>
              <Button variant="outline" size="sm">Shop Winter</Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Accessories;
