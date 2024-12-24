import { defaults } from "autoprefixer";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-50">
      {/* Section 1: Testimonials */}
      <section className="py-16 px-6 bg-white">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          What do they say about us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Testimonial Card 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <p className="text-gray-600 mb-4">
              Wapi pai ini pokok a, at lo ay biruang angam poq kantan samuang galit.
            </p>
            <h3 className="text-lg font-semibold text-gray-800">
              Emily Putri
            </h3>
            <p className="text-gray-500 text-sm">CEO at Company</p>
          </div>
          {/* Testimonial Card 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <p className="text-gray-600 mb-4">
              Utoraly ini bisa pik tanan sampak on agens progo takam galit a taboh to adas.
            </p>
            <h3 className="text-lg font-semibold text-gray-800">
              Aldi Takar
            </h3>
            <p className="text-gray-500 text-sm">Founder of Agency</p>
          </div>
          {/* Testimonial Card 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <p className="text-gray-600 mb-4">
              Barang sesuai produk, seller ramah penjelasan nya super mantap.
            </p>
            <h3 className="text-lg font-semibold text-gray-800">
              Ayu Tanam
            </h3>
            <p className="text-gray-500 text-sm">Founder at Studio</p>
          </div>
        </div>
      </section>

      {/* Section 2: Call to Action */}
      <section className="py-16 px-6 bg-purple-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Try it for free join now
        </h2>
        <p className="mb-8 text-lg">
          Let’s join now and let’s see how this app works for your productivity.
        </p>
        <form className="max-w-md mx-auto flex items-center">
          <input
            type="email"
            placeholder="Enter email address"
            className="flex-1 p-3 rounded-l-lg text-gray-700 focus:outline-none"
          />
          <button className="bg-blue-500 px-6 py-3 rounded-r-lg text-white hover:bg-blue-600">
            Start try now
          </button>
        </form>
      </section>

      {/* Section 3: Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-white text-center">
        <h3 className="text-xl font-semibold mb-4">GoTask</h3>
        <ul className="flex justify-center space-x-6 mb-6">
          <li>
            <a href="#solution" className="text-gray-400 hover:text-white">
              Solution
            </a>
          </li>
          <li>
            <a href="#pricing" className="text-gray-400 hover:text-white">
              Pricing
            </a>
          </li>
          <li>
            <a href="#features" className="text-gray-400 hover:text-white">
              Features
            </a>
          </li>
          <li>
            <a href="#blog" className="text-gray-400 hover:text-white">
              Blog
            </a>
          </li>
        </ul>
        <div className="text-gray-500 text-sm">
          © 2024 GoTask. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;