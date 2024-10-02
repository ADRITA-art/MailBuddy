// app/mailer/page.tsx

import React, { Suspense } from "react";
import MailForm from "../MailForm"; // Adjust the path if necessary

export default function MailerPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MailForm />
    </Suspense>
  );
}
