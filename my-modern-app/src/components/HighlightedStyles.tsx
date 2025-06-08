
const HighlightedStyles = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* 01 Sweatshirt */}
          <div className="relative group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-gray-100">
              <img 
                src="https://i.pinimg.com/736x/57/6e/ef/576eefe23318e35580853471036bbc8d.jpg"
                alt="Premium Sweatshirt"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
              
              {/* Number Badge */}
              <div className="absolute top-6 left-6">
                <div className="bg-white text-black px-4 py-2 font-bold text-lg">
                  01
                </div>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl font-bold mb-2">SWEATSHIRT</h3>
                <p className="text-sm opacity-90 max-w-xs">
                  Premium comfort meets minimalist design in our signature collection
                </p>
              </div>
            </div>
          </div>

          {/* 02 Athletic */}
          <div className="relative group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-gray-900">
              <img 
                src="https://i.pinimg.com/736x/54/1d/c2/541dc2ed7e5a8845b01a86c2738dd870.jpg"
                alt="Athletic Hoodie"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
              
              {/* Number Badge */}
              <div className="absolute top-6 left-6">
                <div className="bg-white text-black px-4 py-2 font-bold text-lg">
                  02
                </div>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl font-bold mb-2">ATHLETIC</h3>
                <p className="text-sm opacity-90 max-w-xs">
                  Performance meets street style in our athletic collection
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightedStyles;
