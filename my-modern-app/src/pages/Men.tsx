
import { useState } from 'react';
import { Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Men = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  const categories = ['All', 'Hoodies', 'T-Shirts', 'Winterwear'];
  const sizes = ['All', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['All', 'Black', 'White', 'Gray', 'Navy', 'Brown'];
  const priceRanges = ['All', '$0-$50', '$50-$100', '$100+'];

  const products = [
    {
      id: 1,
      name: "Essential Hoodie",
      price: 89,
      image: "https://i.pinimg.com/736x/90/a2/cc/90a2cce4a4d7f5fdda436bdfe1bec336.jpg",
      category: "Hoodies",
      color: "Black"
    },
    {
      id: 2,
      name: "Urban Zip-Up",
      price: 95,
      image: "https://i.pinimg.com/736x/b1/01/90/b10190eaae4be5d8b74a7ded9645a741.jpg",
      category: "Hoodies",
      color: "Gray"
    },
    {
      id: 3,
      name: "Graphic Print Tee",
      price: 45,
      image: "https://i.pinimg.com/736x/31/a8/6e/31a86ef15688e5a6829d88bf321785a1.jpg",
      category: "T-Shirts",
      color: "White"
    },
    {
      id: 4,
      name: "Winter Joggers",
      price: 75,
      image: "https://i.pinimg.com/736x/11/07/6b/11076b7205133d2c8059452f4d37dd37.jpg",
      category: "Winterwear",
      color: "Navy"
    },
    {
      id: 5,
      name: "Oversized Hoodie",
      price: 85,
      image: "https://i.pinimg.com/736x/ec/48/7e/ec487ec339cacc808f02b7ec830ab2c7.jpg",
      category: "Hoodies",
      color: "Brown"
    },
    {
      id: 6,
      name: "Basic Tee",
      price: 35,
      image: "https://i.pinimg.com/736x/0e/5e/89/0e5e89e31b2cf9e41b0d14eea69053a6.jpg",
      category: "T-Shirts",
      color: "Black"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Banner */}
      <div className="relative h-96 bg-gradient-to-r from-black to-gray-800">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Men's Collection</h1>
            <p className="text-xl max-w-2xl">
              Explore bold, modern streetwear designed for him. From oversized CLOTHES to graphic tees, 
              our men's collection is built for confidence and comfort — anytime, anywhere.
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
            <select 
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            >
              {priceRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>

          <div className="ml-auto flex items-end gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              onClick={() => setViewMode('grid')}
              size="icon"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              onClick={() => setViewMode('list')}
              size="icon"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-8`}>
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
                <p className="text-sm text-gray-600">{product.category}</p>
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

export default Men;
