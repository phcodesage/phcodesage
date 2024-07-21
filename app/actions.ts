'use server';
import { Resend } from 'resend';
import { z } from 'zod';
import { renderEmailTemplate } from '@/utils/renderEmailTemplate';

interface ValidationErrors {
  success: boolean;
  message: string;
  errors?: {
    name?: string[] | undefined;
    email?: string[] | undefined;
    message?: string[] | undefined;
  };
}

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.'
    })
    .max(30, {
      message: 'Name must not be longer than 30 characters.'
    }),
  email: z
    .string({
      required_error: 'Please enter a valid email.'
    })
    .email(),
  message: z.string().max(380).min(4)
});

const EMAIL_FROM = process.env.EMAIL_FROM;
const EMAIL_TO = process.env.EMAIL_TO;

export async function contactSubmit(prevState: any, formData: FormData): Promise<ValidationErrors> {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const validatedFields = contactFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    });

    if (!validatedFields.success) {
      console.log('Validation failed:', validatedFields.error.flatten().fieldErrors);
      return {
        success: false,
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Please check your entries and try again.'
      };
    }

    const { name, email, message } = validatedFields.data;

    if (!EMAIL_FROM || !EMAIL_TO) {
      console.log('Email configuration error');
      return {
        success: false,
        message: 'Oops! Something went wrong. Please try again later.'
      };
    }

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
      console.log('Error sending email:', error);
      return {
        success: false,
        message: 'Oops! Something went wrong. Please try again later.'
      };
    }

    console.log('Email sent successfully:', data);
    return {
      success: true,
      message: 'Thank you for reaching out! Your message has been sent.'
    };
  } catch (error) {
    console.error('Server error:', error);
    return {
      success: false,
      message: 'Oops! Something went wrong. Please try again later.'
    };
  }
}
