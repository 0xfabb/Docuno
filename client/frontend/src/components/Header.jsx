import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="fixed w-3/4 md:w-2/3 left-1/2 top-5 transform -translate-x-1/2 px-6 py-3 flex items-center justify-between shadow-lg z-50 bg-black/40 backdrop-blur-md rounded-full transition-all duration-300">
        <div className="text-2xl font-bold text-white-3 whitespace-nowrap">
          <Link to="/">DocuSense</Link>
        </div>

        <ul className="hidden md:flex gap-8 text-lg font-semibold text-white">
          <li className="hover:text-green-600 transition duration-200">
            <Link to="/home">Home</Link>
          </li>
          <li className="hover:text-green-600 transition duration-200 cursor-pointer">
            Features
          </li>
          <li className="hover:text-green-600 transition duration-200 cursor-pointer">
            Explore
          </li>
          <li className="hover:text-green-600 transition duration-200 cursor-pointer">
            Services
          </li>
        </ul>

        <button className="bg-gradient-to-r from-green-600 to-blue-700 px-6 py-2 text-white rounded-full font-semibold transition-all duration-200 hover:from-blue-600 hover:to-green-700 shadow-md">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
