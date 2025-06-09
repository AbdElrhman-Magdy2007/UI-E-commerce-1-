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
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
          <div className="space-y-4 md:space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Join Our Newsletter
              </h2>
              <p className="mt-2 text-sm md:text-base text-gray-600">
                Get exclusive updates on new collections and special offers
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-200"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>

            <p className="text-xs text-gray-500 mt-3">
              By subscribing, you agree to our Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
