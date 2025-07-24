import React from 'react';
import './index.css';
import Hero from "./components/Hero";
import About from "./components/About"

function App() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 fixed w-full top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-green-700">ZeroWaste Connect</div>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li><a href="#home" className="hover:text-green-700">Home</a></li>
            <li><a href="#about" className="hover:text-green-700">About</a></li>
            <li><a href="#login" className="hover:text-green-700">Login/Signup</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero / Home */}
      <Hero />
      {/* <section id="home" className="h-screen bg-green-100 flex items-center justify-center pt-20">
        <h1 className="text-5xl font-extrabold text-green-800 text-center max-w-3xl">
          Turning Leftovers into Love – Bridging Restaurants & NGOs to Eliminate Food Waste.
        </h1>
      </section> */}

      {/* About Section */}
      {/* <section id="about" className="bg-white py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-8">How it Works</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg">
          <p>🍴 Restaurants register and list surplus food packets.</p>
          <p>🏥 NGOs register and view available food nearby.</p>
          <p>🚚 NGOs place orders and coordinate pickup.</p>
          <p>✅ Restaurant confirms, packet count updates automatically.</p>
        </div>
      </section> */}
      <About />

      {/* Login / Signup Section */}
      <section id="login" className="bg-green-50 py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-8">Join Us</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          <div className="bg-white shadow-md rounded-xl p-6 w-64 hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Restaurant</h3>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Login</button>
            <p className="text-sm mt-2">or <a href="#signup" className="text-green-600 underline">Sign Up</a></p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 w-64 hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-4">NGO</h3>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Login</button>
            <p className="text-sm mt-2">or <a href="#signup" className="text-green-600 underline">Sign Up</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-4 text-center">
        <p>&copy; 2025 ZeroWaste Connect. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
