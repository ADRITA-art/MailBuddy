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
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #2E073F 0%, #FFC3A0 50%, #2E073F 100%)",
      }}
    >
      {/* Copilot Sidebar */}
      <CopilotSidebar
        defaultOpen={true}
        instructions={`You are an assistant that helps users compose professional emails.

When the user provides a subject, generate a professional email content based on the subject.

Use the "generateEmailContent" action to set the generated email content by providing the "content" parameter.`}
        labels={{
          title: "Email Assistant",
          initial: "Provide a subject to generate an email message.",
        }}
      />

      <div
        className="p-10 border-2 border-black rounded-lg shadow-lg max-w-xl w-full"
        style={{ backgroundColor: "#FFF4EA" }}
      >
        <h1
          className="text-3xl font-bold text-center mb-8 border-2 border-black rounded-lg p-3"
          style={{ backgroundColor: "#E1D7C6", color: "#B8001F" }}
        >
          Create Your Email
        </h1>

        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Email Sent!");
          }}
        >
          {/* Email Input */}
          <div>
            <label className="text-lg font-semibold mb-2 block">
              Enter the Recipient's Email
            </label>
            <input
              type="email"
              className="w-full p-3 border-2 border-black bg-purple-300 text-black rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Subject Input */}
          <div>
            <label className="text-lg font-semibold mb-2 block">
              Enter the Subject
            </label>
            <input
              type="text"
              className="w-full p-3 border-2 border-black bg-purple-300 text-black rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
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
            <label className="text-lg font-semibold mb-2 block">
              Generated Email Content
            </label>
            <CopilotTextarea
              className="w-full p-4 border-2 border-black bg-purple-100 rounded"
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
              className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg border-2 border-black hover:bg-green-600 transition-colors shadow-xl"
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