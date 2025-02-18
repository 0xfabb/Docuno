import Header from "../components/Header";
import Footer from "../components/Footer";
import LandAniamtion from "../components/LandAnimation";

const LandingPage = () => {
  return (
    <div className="overflow-hidden hide-scrollbar">
      <Header />
      <div className="bg-black bg-opacity-75 backdrop-blur-md min-h-screen">
        <div className="overflow-hidden bg-gradient-to-b from-blue-600 via-blue-400 to-white text-white w-screen min-h-screen flex justify-center items-center">
          <div className="flex flex-col-reverse md:flex-row items-center justify-center w-11/12 max-w-6xl gap-8 p-6 md:p-12">
            <div className="text-white w-full md:w-1/2 text-center md:text-left font-primary">
              <h1 className="text-3xl md:text-4xl font-bold leading-snug">
                AI-Powered Healthcare Insights at Your Fingertips
              </h1>
              <p className="text-lg mt-4 font-light">
                Upload your medical reports, track health trends, and receive
                AI-driven insights. Whether you&apos;re a patient monitoring
                your vitals or a doctor analyzing reports,
                <span className="font-semibold"> DocuSense </span> helps you
                make informed decisions.
              </p>

              <div className="flex flex-col md:flex-row mt-6 gap-4 md:gap-6">
                <button className="bg-gradient-to-r from-green-600 to-teal-700 px-6 py-3 text-lg rounded-full text-white-2 cursor-pointer transition-all duration-200 shadow-lg w-full md:w-auto border-white border-[1px]">
                  Upload Reports
                </button>
                <button className="border-white text-white-2 border-2 px-6 py-3 text-lg rounded-full cursor-pointer transition-all duration-200 hover:bg-white hover:text-blue-600 w-full md:w-auto">
                  Learn More
                </button>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <LandAniamtion />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-gradient-to-b 0 from white to-white-1 text-white w-screen min-h-screen flex justify-center items-center">
        Hello
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
