"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const HomePage: React.FC = () => {
  const router = useRouter();
  const [tooltip, setTooltip] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false); // Track if the page has loaded

  useEffect(() => {
    // Trigger the load animation after a delay or when page mounts
    setLoaded(true);
  }, []);

  const handleMailerClick = (mailerType: string): void => {
    router.push(`/mailer?subject=${encodeURIComponent(mailerType)}`);
  };

  const handleMouseEnter = (tooltipText: string) => {
    setTooltip(tooltipText);
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center relative p-4 sm:p-6 overflow-hidden transition-opacity duration-1000 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background: "linear-gradient(135deg, #2E073F 0%, #FFD7C4 50%, #2E073F 100%)",
      }}
    >
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden z-0">
  <div className="w-48 h-48 bg-gradient-to-r from-purple-600 to-pink-400 rounded-full absolute -top-16 left-16 animate-pulse-slow rotate-[260deg]"></div>
  <div className="w-72 h-72 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full absolute -bottom-24 right-24 blur-lg animate-float"></div>
  <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-teal-300 rounded-full absolute top-40 left-8 opacity-80 animate-fade"></div>

  <div className="w-40 h-40 bg-gradient-to-r from-green-300 to-blue-300 rounded-full absolute top-64 right-10 blur-md animate-pulse-slow"></div>
  <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-300 rounded-full absolute -bottom-12 right-48 animate-float"></div>
  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-teal-300 rounded-full absolute bottom-24 right-40 animate-pulse-fast"></div>
</div>

      <h1
        className="text-4xl sm:text-5xl font-extrabold text-red-700 mb-8 sm:mb-12 text-center z-10"
        style={{ color: "#000000" }}
      >
        Create Your Mail
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12 mt-6 sm:mt-10 z-10">
        <div
          className="group bg-gradient-to-r from-purple-800 to-purple-300 p-10 sm:p-16 rounded-lg shadow-lg border-2 border-black hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300 cursor-pointer relative"
          onClick={() => handleMailerClick("Cold Mail")}
          onMouseEnter={() => handleMouseEnter("Send a cold mail to make a connection.")}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-200 mb-4 sm:mb-6">Cold Mail</h2>
          <div className="group-hover:translate-x-2 transition-transform duration-200 text-white text-xl sm:text-2xl">
            →
          </div>
          {tooltip === "Send a cold mail to make a connection." && (
            <div className="absolute top-full mt-2 left-0 w-full text-center text-sm bg-black text-white p-2 rounded shadow-lg">
              Send a cold mail to make a connection.
            </div>
          )}
        </div>

        <div
          className="group bg-gradient-to-r from-purple-800 to-purple-300 p-10 sm:p-16 rounded-lg shadow-lg border-2 border-black hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300 cursor-pointer relative"
          onClick={() => handleMailerClick("Persuasive Mail")}
          onMouseEnter={() => handleMouseEnter("Craft a persuasive mail to convince someone.")}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-200 mb-4 sm:mb-6">Persuasive Mail</h2>
          <div className="group-hover:translate-x-2 transition-transform duration-200 text-white text-xl sm:text-2xl">
            →
          </div>
          {tooltip === "Craft a persuasive mail to convince someone." && (
            <div className="absolute top-full mt-2 left-0 w-full text-center text-sm bg-black text-white p-2 rounded shadow-lg">
              Craft a persuasive mail to convince someone.
            </div>
          )}
        </div>

        <div
          className="group bg-gradient-to-r from-purple-800 to-purple-300 p-10 sm:p-16 rounded-lg shadow-lg border-2 border-black hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300 cursor-pointer relative"
          onClick={() => handleMailerClick("Leave Mail")}
          onMouseEnter={() => handleMouseEnter("Request leave with this mail template.")}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-200 mb-4 sm:mb-6">Leave Mail</h2>
          <div className="group-hover:translate-x-2 transition-transform duration-200 text-white text-xl sm:text-2xl">
            →
          </div>
          {tooltip === "Request leave with this mail template." && (
            <div className="absolute top-full mt-2 left-0 w-full text-center text-sm bg-black text-white p-2 rounded shadow-lg">
              Request leave with this mail template.
            </div>
          )}
        </div>
      </div>

      <footer className="mt-12 sm:mt-16 text-center text-purple-900 z-10">
        Made with 💜 by Adrita
      </footer>
    </div>
  );
};

export default HomePage;
