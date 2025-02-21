import Header from "../components/Header";
import Footer from "../components/Footer";
import LandAnimation from "../components/LandAnimation";
import WhyChooseDocusense from "../components/WhyChooseDocusense";

const LandingPage = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="bg-gray-900 min-h-screen">
        <div className="bg-gradient-to-b from-blue-700 via-blue-500 to-blue-300 text-white w-screen min-h-screen flex justify-center items-center">
          <div className="flex flex-col md:flex-row items-center justify-center w-11/12 max-w-6xl gap-8 p-6 md:p-12">
            <div className="text-white w-full md:w-1/2 text-center md:text-left font-primary">
              <h1 className="text-4xl md:text-5xl font-bold leading-snug">
                AI-Powered Healthcare Insights at Your Fingertips
              </h1>
              <p className="text-lg mt-4 font-light">
                Upload your medical reports, track health trends, and receive AI-driven insights. Whether you&apos;re a patient monitoring your vitals or a doctor analyzing reports, <span className="font-semibold">DocuSense</span> helps you make informed decisions.
              </p>
              <div className="flex flex-col md:flex-row mt-6 gap-4 md:gap-6">
                <button className="bg-gradient-to-r from-green-500 to-teal-500 px-6 py-3 text-lg rounded-full text-white cursor-pointer transition-all duration-200 shadow-lg w-full md:w-auto border border-transparent hover:border-white">
                  Upload Reports
                </button>
                <button className="border border-white text-white px-6 py-3 text-lg rounded-full cursor-pointer transition-all duration-200 hover:bg-white hover:text-blue-700 w-full md:w-auto">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <LandAnimation />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-screen min-h-screen flex justify-center items-center">
        <WhyChooseDocusense />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;