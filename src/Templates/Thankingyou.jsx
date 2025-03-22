import React from "react";

const ThankingYou = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* Thank You Message */}
      <h1 className="text-5xl font-bold mb-4">
        <span className="text-red-400">T</span>
        <span className="text-yellow-400">h</span>
        <span className="text-green-400">a</span>
        <span className="text-blue-400">n</span>
        <span className="text-purple-400">k</span>
        <span className="text-pink-400"> </span>
        <span className="text-cyan-400">Y</span>
        <span className="text-orange-400">o</span>
        <span className="text-teal-400">u</span>  
        <span className="text-yellow-300"> for Your Visit</span>  
      </h1>

      {/* Website Creator */}
      <p className="text-2xl font-medium">
        This website is made by  
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-extrabold text-3xl"> Ayush Gupta </span>
      </p>

      {/* Contact Email */}
      <p className="mt-4 text-lg font-semibold">
        Contact me at:  
        <a 
          href="mailto:work10ayush@gmail.com" 
          className="text-yellow-400 animate-pulse hover:text-yellow-500 transition-all duration-300"
        >
          {" "}work10ayush@gmail.com
        </a>
      </p>
    </div>
  );
};

export default ThankingYou;