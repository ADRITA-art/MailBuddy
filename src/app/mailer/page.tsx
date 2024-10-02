// app/MailForm.tsx

"use client";

import React, { useState } from "react";
import { CopilotSidebar } from "@copilotkit/react-ui";
import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";
import { CopilotTextarea } from "@copilotkit/react-textarea";
import "@copilotkit/react-ui/styles.css";
import "@copilotkit/react-textarea/styles.css";

export default function MailForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [generatedMessage, setGeneratedMessage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

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
  className="min-h-screen flex flex-col items-center justify-center border px-4 md:px-8 lg:px-16"
  style={{
    background: "linear-gradient(135deg, #2E073F 0%, #FFD7C4 50%, #2E073F 100%)",
  }}
>
  {/* Heading outside of the box */}
  <h1
    className="text-4xl md:text-5xl font-extrabold text-center mb-6 transition-all duration-300 hover:text-red-700"
    style={{
      color: "#B8001F",
      letterSpacing: "2px",
    }}
  >
    Create Your Email
  </h1>

      {/* Copilot Sidebar */}
      <CopilotSidebar
        defaultOpen={false}
        instructions={`You are an assistant that helps users compose professional emails.

When the user provides a subject, generate a professional email content based on the subject.

Use the "generateEmailContent" action to set the generated email content by providing the "content" parameter.`}
        labels={{
          title: "Email Assistant",
          initial: "ENTER THE SUBJECT TO GENERATE EMAIL CONTENT",
        }}
      />

<div
    className="p-6 sm:p-8 md:p-10 border-2 border-black-200 rounded-lg shadow-2xl max-w-lg md:max-w-xl w-full transition-all duration-300 hover:shadow-3xl"
    style={{
      background: "linear-gradient(135deg, #FFF4EA, #FFE0CC)",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
    }}
  >
       

        <form
          className="space-y-6 "
          onSubmit={(e) => {
            e.preventDefault();
            alert("Email Sent!");
          }}
        >
          {/* Email Input */}
          <div>
        <label className="text-sm font-semibold mb-2 block text-gray-700">
          Enter the Recipient's Email
        </label>
        <input
          type="email"
          className="w-full px-4 py-2 border border-gray-500 rounded-lg text-gray-700 bg-purple focus:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>


          {/* Subject Input */}
          <div>
        <label className="text-sm font-semibold mb-2 block text-gray-700">
          Enter the Subject and ask Copilot sidebar to generate the content
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-500 rounded-lg text-gray-700 bg-purple focus:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>

          {/* Instructions for the user to interact with Copilot */}
          <div className="mt-4 text-center text-blue-700">
            <p>Please interact with the Copilot sidebar to generate the email content.</p>
          </div>

          {/* Generated Message Textarea */}
          <div className="mt-4">
          <label className="text-sm font-semibold mb-2 block text-gray-700">
              Generated Email Content
            </label>
            <CopilotTextarea
              className="w-full p-4 border border-gray-500 bg-purple-100 rounded"
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
        </form>
      </div>
    </div>
  );
}