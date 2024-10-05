// This code defines a React component called ContactFormEmail,
// which uses the @react-email/components and @react-email/tailwind libraries to structure and style an email template.
import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border-black my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

{
  /* <Html>: The root component that wraps the email.
<Head>: A placeholder for metadata (though empty in this case).
<Preview>: A short summary (preview text) that will appear as a snippet in email inboxes.
<Tailwind>: Wraps the component to enable the use of Tailwind CSS styles.
<Body>: The main container for the email content, with some basic Tailwind classes (bg-gray-100, text-black) to set the background and text color.
<Container>: A wrapper for the content that centers the email body.
<Section>: A section within the email that contains the message and sender's email. */
}
