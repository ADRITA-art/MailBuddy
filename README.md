# ✉️ Email Generator with CopilotKit Integration

This project is a **React-based email generator** built with **Next.js**. It allows users to enter an email subject, interact with an AI assistant (via **CopilotKit Sidebar**), generate personalized email content, and send the email—all through a simple, user-friendly form.
![image](https://github.com/user-attachments/assets/e2a8348e-04cf-40bb-8004-84e30dbe351d)

![image](https://github.com/user-attachments/assets/6abe08c4-282f-45ee-b0af-e994320b5ee1)



## 🌟 Features

- **💡 Copilot Sidebar**: AI-powered sidebar that generates professional email content based on the provided subject.
- **📝 Copilot Textarea**: Editable textarea with autosuggestions to help users refine the generated email content.
- **📊 useCopilotReadable**: Keeps the email subject and content readable for Copilot, ensuring better AI responses.
- **⚙️ useCopilotAction**: Register and trigger actions, allowing the Copilot assistant to interact with the app.
- **📧 Email Sending**: Form to input recipient email, subject, and generated content, then send the email via a custom API.

## 🛠️ Technologies Used

- **Next.js**: A React framework for building server-side rendered and full-stack applications.
- **CopilotKit**: Integrating AI-driven assistance with Copilot Sidebar and Textarea components.
- **React**: For building dynamic UI components.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Node.js & API**: Backend for sending emails.

## 🧩 Key Components

### 1. **💬 Copilot Sidebar**

The Copilot Sidebar is integrated into the email creation page, offering users an AI assistant to generate email content based on the subject.

#### 📌 Key Features:
- Instructions provided to Copilot for generating professional emails.
- Users input a subject and trigger the generation of relevant content.

### 2. **📝 Copilot Textarea**

Displays the generated email content and allows users to edit it. It also provides autosuggestions to refine email content.

#### 📌 Key Features:
- AI-powered suggestions for sentence completion and content fine-tuning.
- Editable content with autosuggestion capabilities.

### 3. **🔍 useCopilotReadable**

The `useCopilotReadable` hook helps keep the state (like the subject of the email) "readable" for the AI, making it more context-aware and improving its responses.

#### Example:
```
useCopilotReadable({
  description: "The current subject of the email",
  value: subject,
});
```

### 4. **⚙️ useCopilotAction**

The `useCopilotAction` hook registers actions with the Copilot assistant, allowing dynamic interactions between the user and AI.

#### Example:
```
useCopilotAction({
  name: "generateEmailContent",
  description: "Generate email content based on the subject.",
  parameters: [
    {
      name: "content",
      type: "string",
      description: "Generated email content.",
      required: true,
    },
  ],
  handler: async ({ content }) => {
    setGeneratedMessage(content);
    return "Email content generated successfully!";
  },
});
```

## 📂 Key Files

- **`app/MailForm.tsx`**: Main component where users interact with Copilot Sidebar and view the generated email content.
- **`app/mailer/page.tsx`**: Wraps `MailForm` with a `Suspense` boundary for better loading states.
- **`pages/api/sendEmail.ts`**: Backend API that sends the email with the recipient's email, subject, and generated content.

## ✨ Email Form Flow

1. **Recipient Email**: Input field for the recipient's email address.
2. **Subject**: A brief description of the email's purpose. The AI will generate content based on this.
3. **Generated Message**: The content created by Copilot, displayed in a Copilot Textarea. Users can edit this content.
4. **Send**: Once all fields are filled, click the **Send** button to submit the form and send the email.

## 🚀 Getting Started

To run the project locally:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd email-generator
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open the app**:
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 🧑‍💻 CopilotKit Integration

To integrate CopilotKit components, install the following packages:

```bash
npm install @copilotkit/react-ui @copilotkit/react-core @copilotkit/react-textarea
```

Then, import the necessary styles:

```javascript
import "@copilotkit/react-ui/styles.css";
import "@copilotkit/react-textarea/styles.css";
```

## 📧 Email Sending API

The `sendEmail.ts` file contains the API logic for sending emails. It handles a POST request with the following JSON body:

- **`email`**: The recipient's email address.
- **`subject`**: The subject of the email.
- **`message`**: The content generated by Copilot.

### Example Request:
```json
{
  "email": "recipient@example.com",
  "subject": "Subject of the Email",
  "message": "Generated email content here..."
}
```

## 📈 Future Improvements

- **Better Email Validation**: Add validation for email addresses and better error handling.
- **Advanced AI Generation**: Implement suggestions for different email tones (e.g., formal, casual).
- **File Attachments**: Allow users to attach files to their emails.

## 🌍 Deployment

This project can be deployed easily using platforms like **Vercel**. Simply follow these steps:

1. **Push your project to GitHub**.
2. **Link the repository to Vercel** for automatic deployment.

For more details, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📚 Learn More

To learn more about Next.js and CopilotKit, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [CopilotKit Documentation](https://copilotkit.io/docs)

---

⚡ Built with passion using Next.js, React, and CopilotKit ⚡
```

### Key Enhancements:
- **Clearer formatting** with icons and section headings.
- **Improved structure** to make the document flow better.
- **Added a "Getting Started"** and **"Deployment"** section for clarity.
- **Highlighted key features** of CopilotKit (e.g., `useCopilotAction` and `useCopilotReadable` hooks).
