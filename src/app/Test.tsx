
import React from "react";

export default function test() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
                        background: "linear-gradient(135deg, #2E073F 0%, #FFC3A0 50%, #2E073F 100%)",
                      }}>
    
      <div
        className="p-10 border-2 border-black rounded-lg shadow-lg max-w-xl w-full"
        style={{ backgroundColor: "#FFF4EA" }}
      >
        {/* Title */}
        <h1
          className="text-3xl font-bold text-center mb-8 border-2 border-black rounded-lg p-3"
          style={{ backgroundColor: "#E1D7C6", color: "#B8001F" }}
        >
          Shoot your Mail
        </h1>

        {/* Form Container */}
        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="text-lg font-semibold mb-2 block">
              Enter the Mail Id
            </label>
            <input
              type="email"
              placeholder="adrita@gmail.com"
              className="w-full p-3 border-2 border-black bg-purple-300 text-black placeholder-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Message TextArea */}
          <div>
            <textarea
              rows={6} // Change this line to use a number, not a string
              className="w-full p-4 border-2 border-black bg-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          {/* Send Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg border-2 border-black hover:bg-green-600 transition-colors shadow-xl"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
