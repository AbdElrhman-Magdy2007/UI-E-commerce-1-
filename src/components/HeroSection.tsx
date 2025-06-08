
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                THE BEST
                <br />
                <span className="text-gray-600">FASHION</span>
                <br />
                FOR ALL TIME
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                Discover premium quality hoodies and streetwear that define modern style and comfort.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center group">
                SHOP NOW
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-black text-black px-8 py-4 font-semibold hover:bg-black hover:text-white transition-all duration-200">
                LOOKING FORWARD
              </button>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['HOODIE', 'T-SHIRT', 'FULLWEAR', 'WINTER'].map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 border border-gray-300 text-gray-700 hover:border-black hover:text-black transition-all duration-200 text-sm font-medium"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-gray-200 rounded-lg overflow-hidden aspect-[4/5]">
              <img 
                src="https://i.pinimg.com/736x/83/f9/25/83f9259a75d6fc0229107a9ca34dc5af.jpg"
                alt="Three people wearing stylish hoodies"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
