// Footer.jsx
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-gray-900 text-white pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo & About */}
        <div>
          <h2 className="text-3xl font-bold mb-3">Oceano Restaurant</h2>
          <p className="text-sm text-gray-300">
            Experience the freshest seafood and coastal flavors. Where every meal feels like a vacation.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 123 Ocean Drive, Miami Beach, FL
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> (123) 456-7890
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> contact@oceanorestaurant.com
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-pink-500 rounded-full hover:bg-pink-600 transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-sky-400 rounded-full hover:bg-sky-500 transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h3 className="text-xl font-semibold mb-4 text-center">Find Us Here</h3>
        <div className="w-full h-64">
          <iframe
            title="Oceano Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.4542152909166!2d-0.15558742065429687!3d5.647231499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9caa5b48b87b%3A0x6717c9764aeb5560!2sOceano%20Restaurant!5e0!3m2!1sen!2sgh!4v1741262366097!5m2!1sen!2sgh"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg border-none"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 pb-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Oceano Restaurant. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
