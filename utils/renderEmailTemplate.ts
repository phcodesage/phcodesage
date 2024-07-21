import ContactEmail from '@/components/emails/contact-template';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const renderEmailTemplate = ({ name, email, message }: ContactEmailProps): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Email</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: sans-serif;">
        <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2>Message from ${name} on Portfolio</h2>
          <p>Hello,</p>
          <p>
            <strong>${name}</strong> (<a href="mailto:${email}">${email}</a>) has left you a message on your
            <strong>Portfolio</strong>.
          </p>
          <p>This is the message sent: ${message}</p>
          <hr />
          <p>This message was automatically generated and sent from your Portfolio Website.</p>
        </div>
      </body>
    </html>
  `;
};
