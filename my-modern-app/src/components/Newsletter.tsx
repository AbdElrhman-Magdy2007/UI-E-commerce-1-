
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              SUBSCRIBE TO OUR NEWSLETTER
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest drops, exclusive offers, and style inspiration. 
              Be the first to know about new arrivals and special collections.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black transition-colors duration-200"
                required
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </form>

          <p className="text-sm text-gray-500">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
