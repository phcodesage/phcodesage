'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { LoaderCircleIcon } from 'lucide-react';

interface ValidationErrors {
  success: boolean;
  message: string;
  errors?: {
    name?: string[] | undefined;
    email?: string[] | undefined;
    message?: string[] | undefined;
  };
}

interface ContactFormProps {
  state?: ValidationErrors;
  onSubmit: (formData: { name: string; email: string; message: string }) => Promise<ValidationErrors | undefined>;
}

export default function ContactForm({ state, onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    setErrors(null);
    setSuccessMessage(null);

    console.log('Submitting form with data:', formData);

    try {
      const result = await onSubmit(formData);

      if (result && !result.success) {
        console.log('Form submission failed:', result);
        setErrors(result);
      } else if (result && result.success) {
        console.log('Email sent successfully:', result);
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setErrors({
        success: false,
        message: 'An error occurred while sending the email.',
      });
    } finally {
      setPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {successMessage && (
        <div className="text-green-500">
          {successMessage}
        </div>
      )}
      <div className="grid gap-3">
        <Label
          htmlFor="name"
          className={cn(
            'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
            errors?.errors?.name && 'text-red-500 dark:text-red-900'
          )}
        >
          Name
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="Jane Doe"
          required
          disabled={pending}
          value={formData.name}
          onChange={handleChange}
        />
        {errors?.errors?.name && (
          <p className="text-sm font-medium text-red-500 dark:text-red-900">
            {errors.errors.name}
          </p>
        )}
      </div>
      <div className="grid gap-3">
        <Label
          htmlFor="email"
          className={cn(
            'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
            errors?.errors?.email && 'text-red-500 dark:text-red-900'
          )}
        >
          Email
        </Label>
        <Input
          id="email"
          name="email"
          placeholder="jane@example.com"
          required
          type="email"
          disabled={pending}
          value={formData.email}
          onChange={handleChange}
        />
        {errors?.errors?.email && (
          <p className="text-sm font-medium text-red-500 dark:text-red-900">
            {errors.errors.email}
          </p>
        )}
      </div>
      <div className="grid gap-3">
        <Label
          htmlFor="message"
          className={cn(
            'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
            errors?.errors?.message && 'text-red-500 dark:text-red-900'
          )}
        >
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Hello! This is Jane Doe, from Example. Just wanted to say hi!"
          required
          disabled={pending}
          value={formData.message}
          onChange={handleChange}
        />
        {errors?.errors?.message && (
          <p className="text-sm font-medium text-red-500 dark:text-red-900">
            {errors.errors.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={pending}>
        {pending && <LoaderCircleIcon className="mr-2 h-4 w-4 animate-spin" />}
        Submit
      </Button>

      {errors && !errors.success && (
        <p className="text-sm font-medium text-red-500 dark:text-red-900">
          {errors.message}
        </p>
      )}
    </form>
  );
}
