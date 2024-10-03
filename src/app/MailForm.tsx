"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CopilotSidebar } from "@copilotkit/react-ui";
import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";
import { CopilotTextarea } from "@copilotkit/react-textarea";
import "@copilotkit/react-ui/styles.css";
import "@copilotkit/react-textarea/styles.css";

export default function MailForm() {

  const searchParams = useSearchParams();
  const initialSubject = searchParams.get("subject") || "";

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(initialSubject);
  const [generatedMessage, setGeneratedMessage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  // Make the subject readable to Copilot
  useCopilotReadable({
    description: "The current subject of the email",
    value: subject,
  });

  // Copilot Action to set the generated email content
  useCopilotAction({
    name: "generateEmailContent",
    description: "Set the generated email content based on the subject provided.",
    parameters: [
      {
        name: "content",
        type: "string",
        description: "The generated email content.",
        required: true,
      },
    ],
    handler: async ({ content }) => {
      setIsGenerating(true);
      setGeneratedMessage(content);
      setIsGenerating(false);
      return "Email content generated successfully!";
    },
  });

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16"
      style={{
        background: "linear-gradient(135deg, #2E073F 0%, #FFD7C4 50%, #2E073F 100%)",
      }}

    >
<div className="absolute inset-0 overflow-hidden z-0">
  <div className="w-48 h-48 bg-gradient-to-r from-purple-600 to-pink-400 rounded-full absolute -top-16 left-16 animate-pulse-slow rotate-[260deg]"></div>
  <div className="w-72 h-72 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full absolute -bottom-24 right-24 blur-lg animate-float"></div>
  <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-teal-300 rounded-full absolute top-40 left-8 opacity-80 animate-fade"></div>

  <div className="w-40 h-40 bg-gradient-to-r from-green-300 to-blue-300 rounded-full absolute top-64 right-10 blur-md animate-pulse-slow"></div>
  <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-300 rounded-full absolute -bottom-12 right-48 animate-float"></div>
  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-teal-300 rounded-full absolute bottom-24 right-40 animate-pulse-fast"></div>
</div>
      {/* Page Title */}
      <h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-6 transition-all duration-300 hover:text-red-700"
        style={{
          background: "linear-gradient(135deg, #FFB0B0 0%, #F6F5F2 50%, #FFB0B0 100%)",
          color: "#070F2B",
          letterSpacing: "2px",
        }}
      >
        Create Your Email
      </h1>

      {/* Copilot Sidebar */}
      <CopilotSidebar
        defaultOpen={false}
        instructions={`You are an assistant that helps users compose professional emails. When the user provides a subject, generate professional email content based on the subject. Use the "generateEmailContent" action to set the generated email content by providing the "content" parameter.`}
        labels={{
          title: "Email Assistant",
          initial: "Hit generate to create email content",
        }}
      />

      {/* Form Container */}
      <div
        className="p-6 sm:p-8 md:p-10 border-2 border-gray-300 rounded-lg shadow-lg max-w-lg md:max-w-xl w-full transition-all duration-300 hover:shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #FFF4EA, #FFE0CC)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        <form
          className="space-y-6"
          onSubmit={async (e) => {
            e.preventDefault();

            try {
              const response = await fetch("/api/sendEmail", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email,
                  subject,
                  message: generatedMessage,
                }),
              });

              if (response.ok) {
                setEmailSent(true);
              } else {
                console.error("Failed to send email:", await response.json());
              }
            } catch (error) {
              console.error("Error submitting the form:", error);
            }
          }}
        >
          {/* Email Input */}
          <div>
            <label className="text-sm font-semibold mb-2 block text-gray-700">
              Enter the Recipient's Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-400 rounded-lg text-gray-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Subject Input */}
          <div>
            <label className="text-sm font-semibold mb-2 block text-gray-700">
              Enter the Subject and use Copilot to generate content
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-400 rounded-lg text-gray-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>

          <div className="mt-4 text-center text-blue-700">
            <p>Please interact with the Copilot sidebar to generate the email content.</p>
          </div>

          {/* Generated Email Content */}
          <div className="mt-4">
            <label className="text-lg font-semibold mb-2 block">
              Generated Email Content
            </label>
            <CopilotTextarea
              className="w-full p-4 border-2 border-gray-400 bg-purple-50 rounded h-40 overflow-y-auto"
              value={generatedMessage}
              onValueChange={(value) => setGeneratedMessage(value)}
              placeholder="Generated email content will appear here..."
              autosuggestionsConfig={{
                textareaPurpose: "the body of an email message",
                chatApiConfigs: {
                  suggestionsApiConfig: {
                    maxTokens: 50,
                    stop: [".", "?", "!"],
                  },
                },
              }}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold rounded-full border border-transparent hover:border-green-700 hover:from-green-500 hover:to-green-700 transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl transform hover:scale-105"
              disabled={!generatedMessage}
            >
              Send
            </button>
          </div>

          {/* Success Message */}
          {emailSent && (
            <div className="mt-4 p-4 border border-green-500 bg-green-100 text-green-700 rounded">
              Your email has been sent successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
