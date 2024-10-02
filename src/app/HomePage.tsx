"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const HomePage: React.FC = () => {
  const router = useRouter();
  const [tooltip, setTooltip] = useState<string | null>(null);

  const handleMailerClick = (mailerType: string): void => {
    const query = new URLSearchParams({ type: mailerType }).toString();
    router.push(`/mailer`);
  };

  const handleMouseEnter = (tooltipText: string) => {
    setTooltip(tooltipText);
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  return (
    <div
      className="min-h-screen bg-purple-200 flex flex-col justify-center items-center relative p-4 sm:p-6"
      style={{
        background: "linear-gradient(135deg, #2E073F 0%, #FFD7C4 50%, #2E073F 100%)",
      }}
    >
      {/* Title Section */}
      <h1
        className="text-4xl sm:text-5xl font-extrabold text-red-700 mb-8 sm:mb-12 text-center"
        style={{ color: "#26355D" }}
      >
        Create Your Mail
      </h1>

      {/* Mailer Options Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12 mt-6 sm:mt-10">
        {/* Cold Mailer */}
        <div
          className="group bg-gradient-to-r from-purple-800 to-purple-300 p-10 sm:p-16 rounded-lg shadow-lg border-2 border-black hover:scale-105 transition-all duration-300 cursor-pointer relative"
          onClick={() => handleMailerClick("Cold Mailer")}
          onMouseEnter={() => handleMouseEnter("Send a cold mail to make a connection.")}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-200 mb-4 sm:mb-6">Cold Mailer</h2>
          <div className="group-hover:translate-x-2 transition-transform duration-200 text-white text-xl sm:text-2xl">
            →
          </div>
          {tooltip === "Send a cold mail to make a connection." && (
            <div className="absolute top-full mt-2 left-0 w-full text-center text-sm bg-black text-white p-2 rounded shadow-lg">
              Send a cold mail to make a connection.
            </div>
          )}
        </div>

        {/* Persuasive Mailer */}
        <div
          className="group bg-gradient-to-r from-purple-800 to-purple-300 p-10 sm:p-16 rounded-lg shadow-lg border-2 border-black hover:scale-105 transition-all duration-200 cursor-pointer relative"
          onClick={() => handleMailerClick("Persuasive Mailer")}
          onMouseEnter={() => handleMouseEnter("Craft a persuasive mail to convince someone.")}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-200 mb-4 sm:mb-6">Persuasive Mailer</h2>
          <div className="group-hover:translate-x-2 transition-transform duration-200 text-white text-xl sm:text-2xl">
            →
          </div>
          {tooltip === "Craft a persuasive mail to convince someone." && (
            <div className="absolute top-full mt-2 left-0 w-full text-center text-sm bg-black text-white p-2 rounded shadow-lg">
              Craft a persuasive mail to convince someone.
            </div>
          )}
        </div>

        {/* Leave Mailer */}
        <div
          className="group bg-gradient-to-r from-purple-800 to-purple-300 p-10 sm:p-16 rounded-lg shadow-lg border-2 border-black hover:scale-105 transition-all duration-200 cursor-pointer relative"
          onClick={() => handleMailerClick("Leave Mailer")}
          onMouseEnter={() => handleMouseEnter("Request leave with this mail template.")}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-200 mb-4 sm:mb-6">Leave Mailer</h2>
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

      {/* Footer Section */}
      <footer className="mt-12 sm:mt-16 text-center text-purple-900">
        Made with 💜 by Adrita
      </footer>
    </div>
  );
};

export default HomePage;
