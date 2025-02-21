

const WhyChooseDocusense = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-blue-900 text-center ">Why Choose DocuSense?</h2>
        <h3 className="text-2xl text-blue-700 mb-10 text-center">AI-powered medical insights for better health tracking.</h3>
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0 text-left lg:pr-8">
            <p className="text-lg mb-6 text-blue-900">DocuSense leverages cutting-edge AI technology to help you gain meaningful insights from your medical reports. By using DocuSense, you can track your health more effectively and make informed decisions.</p>
            <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-2 px-6 rounded-full hover:bg-green-700 transition-all duration-200">Try DocuSense Now</button>
          </div>
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 mr-28">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h4 className="text-xl font-semibold mb-2 text-blue-900">Instant Report Summarization</h4>
              <p className="text-gray-700">Get concise summaries of your medical reports in seconds.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-6xl mb-4">📊</div>
              <h4 className="text-xl font-semibold mb-2 text-blue-900">Data Visualization</h4>
              <p className="text-gray-700">Visualize your health data with easy-to-understand charts and graphs.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-6xl mb-4">💬</div>
              <h4 className="text-xl font-semibold mb-2 text-blue-900">Expert Recommendations</h4>
              <p className="text-gray-700">Receive personalized health recommendations based on your data.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-6xl mb-4">🔒</div>
              <h4 className="text-xl font-semibold mb-2 text-blue-900">Secure Data Storage</h4>
              <p className="text-gray-700">Your health data is stored securely and privately.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseDocusense;