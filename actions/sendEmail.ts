//This code snippet defines a server-side function in a Next.js application that sends an email using the Resend service.
"use server";
//"use server";: This directive indicates that the code is intended to run on the server side. It is specific to Next.js and enables server actions.
import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email.tsx"; //

// Resend: A package for sending emails via the Resend API.
// ContactFormEmail: A React component representing the email template to be sent.

const resend = new Resend(process.env.RESEND_API_KEY);
// Creates an instance of the Resend client using an API key
//This API key is required to authenticate requests to the Resend service.

//It takes formData, which is an instance of FormData typically containing the data submitted from a contact form.
export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "amzicom123@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
