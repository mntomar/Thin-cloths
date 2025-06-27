import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Think Cloths</h2>
          <p className="text-sm text-gray-400">
            Bringing you the best in fashion and lifestyle at affordable prices.
          </p>
        </div>

        
        <div>
          <h3 className="text-md font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-md font-semibold mb-2">Customer Service</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-md font-semibold mb-2">Contact</h3>
          <p className="text-sm text-gray-400">Email: support@Think Cloths.shop</p>
          <p className="text-sm text-gray-400">Phone: +91 9876555670</p>
          <div className="flex space-x-3 mt-2">
            <a href="#" className="hover:text-white">📘</a>
            <a href="#" className="hover:text-white">📷</a>
            <a href="#" className="hover:text-white">🐦</a>
          </div>
        </div>
      </div>

      
      <div className="text-center text-xs text-gray-500 mt-6">
        © 2025 Think Cloths. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
