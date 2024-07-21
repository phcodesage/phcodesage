import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { renderEmailTemplate } from '@/utils/renderEmailTemplate';

// Define EMAIL_FROM and EMAIL_TO from environment variables
const EMAIL_FROM = process.env.EMAIL_FROM;
const EMAIL_TO = process.env.EMAIL_TO;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  try {
    if (!EMAIL_FROM || !EMAIL_TO) {
      return res.status(500).json({ success: false, message: 'Server configuration error.' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Render the email template
    const emailString = renderEmailTemplate({ name, email, message });

    const textContent = `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `;

    const { data, error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: `Message from ${name} on Portfolio`,
      html: emailString,
      text: textContent
    });

    if (error) {
      return res.status(500).json({ success: false, message: 'Failed to send email.' });
    }

    return res.status(200).json({ success: true, message: 'Email sent successfully.' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Internal server error.' });
  }
}
