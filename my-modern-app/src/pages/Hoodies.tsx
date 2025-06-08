
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Hoodies = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedFabric, setSelectedFabric] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');
  const [selectedFit, setSelectedFit] = useState('All');

  const tags = ['All', 'Zip-up', 'Pullover', 'Printed', 'Plain'];
  const fabrics = ['All', 'Cotton', 'Fleece', 'Cotton Blend', 'French Terry'];
  const colors = ['All', 'Black', 'White', 'Gray', 'Navy', 'Brown', 'Olive'];
  const fits = ['All', 'Regular', 'Oversized', 'Slim', 'Cropped'];

  const products = [
    {
      id: 1,
      name: "Essential Black Hoodie",
      price: 89,
      image: "https://i.pinimg.com/736x/b1/01/90/b10190eaae4be5d8b74a7ded9645a741.jpg",
      tag: "Plain",
      fabric: "Cotton",
      fit: "Regular",
      backPrint: true
    },
    {
      id: 2,
      name: "Zip-Up Urban Hoodie",
      price: 95,
      image: "https://i.pinimg.com/736x/ce/b0/89/ceb0898ce401adeadf25348831bba92d.jpg",
      tag: "Zip-up",
      fabric: "Fleece",
      fit: "Oversized"
    },
    {
      id: 3,
      name: "Graphic Print Hoodie",
      price: 92,
      image: "https://i.pinimg.com/736x/63/71/95/637195cba2e4e8bd44832a5c910a3852.jpg",
      tag: "Printed",
      fabric: "Cotton Blend",
      fit: "Regular",
      frontDetail: true
    },
    {
      id: 4,
      name: "Vintage Crew Hoodie",
      price: 75,
      image: "https://i.pinimg.com/1200x/5f/3f/c2/5f3fc2e8f5f3b6106be2ac23708dfa86.jpg",
      tag: "Pullover",
      fabric: "French Terry",
      fit: "Regular"
    },
    {
      id: 5,
      name: "Oversized Comfort Hoodie",
      price: 88,
      image: "https://i.pinimg.com/736x/5f/f3/5f/5ff35ff4beceafd861abaedf7efa8f47.jpg",
      tag: "Plain",
      fabric: "Cotton",
      fit: "Oversized",
      backPrint: true
    },
    {
      id: 6,
      name: "Classic Pullover",
      price: 82,
      image: "https://i.pinimg.com/736x/db/30/7c/db307cff8bfa8953aa941495068f6c6a.jpg",
      tag: "Pullover",
      fabric: "Cotton Blend",
      fit: "Regular"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Banner */}
      <div className="relative h-96 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">CLOTHES</h1>
            <p className="text-xl max-w-2xl">
              Discover our signature CLOTHES collection – crafted for warmth, comfort, and attitude. 
              From minimalist cuts to bold prints, these pieces define contemporary streetwear.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 p-6 bg-gray-50 rounded-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
            <select 
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              {tags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Fabric</label>
            <select 
              value={selectedFabric}
              onChange={(e) => setSelectedFabric(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              {fabrics.map(fabric => (
                <option key={fabric} value={fabric}>{fabric}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
            <select 
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              {colors.map(color => (
                <option key={color} value={color}>{color}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Fit</label>
            <select 
              value={selectedFit}
              onChange={(e) => setSelectedFit(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              {fits.map(fit => (
                <option key={fit} value={fit}>{fit}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid with Focus on Details */}
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
                
                {/* Detail Badges */}
                <div className="absolute top-4 left-4 space-y-2">
                  {product.backPrint && (
                    <span className="bg-black text-white text-xs px-2 py-1 rounded">
                      Back Print
                    </span>
                  )}
                  {product.frontDetail && (
                    <span className="bg-white text-black text-xs px-2 py-1 rounded">
                      Front Detail
                    </span>
                  )}
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                    View Details
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-black">{product.name}</h3>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{product.tag} • {product.fabric}</span>
                  <span>{product.fit} Fit</span>
                </div>
                <p className="text-lg font-bold text-black">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-black text-white rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Can't Find Your Style?</h2>
          <p className="text-gray-300 mb-6">
            Explore our complete CLOTHES collection or get custom recommendations
          </p>
          <Button variant="outline" className="border-white text-black hover:bg-white hover:text-black">
            Browse All CLOTHES
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Hoodies;
