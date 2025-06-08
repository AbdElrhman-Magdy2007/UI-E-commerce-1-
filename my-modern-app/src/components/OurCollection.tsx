
const OurCollection = () => {
  const filters = ['ALL', 'T-SHIRTS', 'HOODIES', 'CREWNECK', 'FULLWEAR', 'WINTERWEAR'];
  
  const products = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/13/16/9e/13169ec94fe06d5a9fd79fd414a0655f.jpg",
      title: "Essential Hoodie",
      price: "$89"
    },
    {
      id: 2,
      image: "https://i.pinimg.com/1200x/be/6f/a0/be6fa0bf95914f16e349ad77ef851743.jpg",
      title: "Vintage Crew",
      price: "$75"
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/b1/01/90/b10190eaae4be5d8b74a7ded9645a741.jpg",
      title: "Urban Zip-Up",
      price: "$95"
    },
    {
      id: 4,
      image: "https://i.pinimg.com/736x/2b/42/4f/2b424f3a124d932c206194c3d9885c03.jpg",
      title: "Classic Black",
      price: "$82"
    },
    {
      id: 5,
      image: "https://i.pinimg.com/736x/45/48/e7/4548e760079de66994e1db9225904cd2.jpg",
      title: "Graphic Print",
      price: "$92"
    },
    {
      id: 6,
      image: "https://i.pinimg.com/736x/85/27/fc/8527fc8ca46e9f8e1515b0fa97a89230.jpg",
      title: "Oversized Fit",
      price: "$88"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4 tracking-wider">
            OUR COLLECTION
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Curated pieces that blend contemporary design with timeless comfort
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              className="px-6 py-2 text-sm font-medium text-gray-600 hover:text-black border-b-2 border-transparent hover:border-black transition-all duration-200"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-white mb-4">
                <img 
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-black mb-2">{product.title}</h3>
                <p className="text-gray-600 font-medium">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCollection;
