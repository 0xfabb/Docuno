import { Link } from "react-router-dom";
import { Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-90 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
            DocuSense
          </h2>
          <p className="mt-3 text-gray-400">
            DocuSense helps you make informed decisions.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-300">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            {["Home", "About", "Events", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-blue-400 transition-all duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-300">Follow Us</h3>
          <div className="mt-3 flex space-x-4">
            {[
              { icon: <Twitter size={24} />, link: "https://twitter.com" },
              { icon: <Instagram size={24} />, link: "https://instagram.com" },
              { icon: <Linkedin size={24} />, link: "https://linkedin.com" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} CampusCompass. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
