
import { useState } from 'react';
import { Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Women = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStyle, setSelectedStyle] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');

  const categories = ['All', 'Cropped Hoodies', 'T-Shirts', 'Accessories'];
  const styles = ['All', 'Casual', 'Oversized', 'Minimalist'];
  const sizes = ['All', 'XS', 'S', 'M', 'L', 'XL'];

  const products = [
    {
      id: 1,
      name: "Cropped Hoodie",
      price: 75,
      image: "https://i.pinimg.com/736x/a5/bc/e3/a5bce329d8124df43e17d02593ce12c4.jpg",
      category: "Cropped Hoodies",
      style: "Casual"
    },
    {
      id: 2,
      name: "Oversized Tee",
      price: 45,
      image: "https://i.pinimg.com/474x/04/4b/e6/044be693ebeb0a766abf3fd9dc39c3cf.jpg",
      category: "T-Shirts",
      style: "Oversized"
    },
    {
      id: 3,
      name: "Minimalist Hoodie",
      price: 85,
      image: "https://i.pinimg.com/1200x/5f/3f/c2/5f3fc2e8f5f3b6106be2ac23708dfa86.jpg",
      category: "Cropped Hoodies",
      style: "Minimalist"
    },
    {
      id: 4,
      name: "Statement Tee",
      price: 50,
      image: "https://i.pinimg.com/736x/7c/85/47/7c854782735a556a0eadad3b73fbe002.jpg",
      category: "T-Shirts",
      style: "Casual"
    },
    {
      id: 5,
      name: "Designer Tote",
      price: 65,
      image: "https://i.pinimg.com/736x/22/61/62/226162acc13b44f0afcdeafd425260ba.jpg",
      category: "Accessories",
      style: "Minimalist"
    },
    {
      id: 6,
      name: "Soft Hoodie",
      price: 80,
      image: "https://i.pinimg.com/736x/37/f8/7b/37f87b06fd5a7ee5de260f9798a6ead4.jpg",
      category: "Cropped Hoodies",
      style: "Oversized"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Banner */}
      <div className="relative h-96 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-black">
            <h1 className="text-5xl font-bold mb-4">Women's Collection</h1>
            <p className="text-xl max-w-2xl">
              Elevate your everyday look with stylish, comfortable, and empowering pieces made for women. 
              Find your next favorite CLOTHES, tee, or fullwear with a modern touch.
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
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Style</label>
            <select 
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            >
              {styles.map(style => (
                <option key={style} value={style}>{style}</option>
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
        </div>

        {/* Seasonal Offers Section */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Seasonal Offers</h2>
          <p className="text-gray-600 mb-6">
            Get 20% off on all cropped CLOTHES and oversized tees this month!
          </p>
          <Button className="bg-black text-white px-8 py-3 rounded-none hover:bg-gray-800">
            Shop Seasonal Sale
          </Button>
        </div>

        {/* Products Grid */}
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
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                    Quick Add
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-black">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.style} • {product.category}</p>
                <p className="text-lg font-bold text-black">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Women;
