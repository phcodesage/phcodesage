'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, User, Mail, MessageSquare } from 'lucide-react';

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
  state: ValidationErrors;
  onSubmit: (data: {
    name: string;
    email: string;
    message: string;
  }) => Promise<ValidationErrors>;
  isSubmitting: boolean;
}

export default function ContactForm({
  state,
  onSubmit,
  isSubmitting
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<ValidationErrors | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors(null);
    setSuccessMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors(null);
    setSuccessMessage(null);

    try {
      const result = await onSubmit(formData);

      if (result && !result.success) {
        setErrors(result);
      } else if (result && result.success) {
        setSuccessMessage('Your message has been sent successfully!');
        resetForm(); // Reset the form after successful submission
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setErrors({
        success: false,
        message: 'An error occurred while sending the email.'
      });
    }
  };

  // useEffect to clear form when state indicates success
  useEffect(() => {
    if (state.success) {
      resetForm();
    }
  }, [state.success]);

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-lg transition-all hover:shadow-xl dark:bg-card/90">
      {successMessage && (
        <div className="mb-4 rounded-lg bg-green-50 p-4 text-green-600 dark:bg-green-900/30 dark:text-green-400">
          <p className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></span>
            {successMessage}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="relative">
            <Label
              htmlFor="name"
              className={cn(
                'mb-2 inline-block text-sm font-medium',
                errors?.errors?.name && 'text-red-500 dark:text-red-400'
              )}
            >
              Name
            </Label>
            <div className="relative">
              <Input
                id="name"
                name="name"
                placeholder="Jane Doe"
                required
                disabled={isSubmitting}
                value={formData.name}
                onChange={handleChange}
                className={cn(
                  'pl-10 transition-all',
                  errors?.errors?.name &&
                    'border-red-500 focus:border-red-500 dark:border-red-400 dark:focus:border-red-400'
                )}
              />
              <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
            {errors?.errors?.name && (
              <p className="mt-1 text-sm font-medium text-red-500 dark:text-red-400">
                {errors.errors.name}
              </p>
            )}
          </div>

          <div className="relative">
            <Label
              htmlFor="email"
              className={cn(
                'mb-2 inline-block text-sm font-medium',
                errors?.errors?.email && 'text-red-500 dark:text-red-400'
              )}
            >
              Email
            </Label>
            <div className="relative">
              <Input
                id="email"
                name="email"
                placeholder="jane@example.com"
                required
                type="email"
                disabled={isSubmitting}
                value={formData.email}
                onChange={handleChange}
                className={cn(
                  'pl-10 transition-all',
                  errors?.errors?.email &&
                    'border-red-500 focus:border-red-500 dark:border-red-400 dark:focus:border-red-400'
                )}
              />
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
            {errors?.errors?.email && (
              <p className="mt-1 text-sm font-medium text-red-500 dark:text-red-400">
                {errors.errors.email}
              </p>
            )}
          </div>

          <div className="relative">
            <Label
              htmlFor="message"
              className={cn(
                'mb-2 inline-block text-sm font-medium',
                errors?.errors?.message && 'text-red-500 dark:text-red-400'
              )}
            >
              Message
            </Label>
            <div className="relative">
              <Textarea
                id="message"
                name="message"
                placeholder="Hello! I'd love to connect with you..."
                required
                disabled={isSubmitting}
                value={formData.message}
                onChange={handleChange}
                className={cn(
                  'min-h-[120px] pl-10 transition-all',
                  errors?.errors?.message &&
                    'border-red-500 focus:border-red-500 dark:border-red-400 dark:focus:border-red-400'
                )}
              />
              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            </div>
            {errors?.errors?.message && (
              <p className="mt-1 text-sm font-medium text-red-500 dark:text-red-400">
                {errors.errors.message}
              </p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          className="relative w-full overflow-hidden transition-all hover:scale-[1.02]"
          disabled={isSubmitting}
          size="lg"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Sending...</span>
            </div>
          ) : (
            'Send Message'
          )}
        </Button>

        {errors && !errors.success && (
          <div className="mt-4 rounded-lg bg-red-50 p-4 text-red-600 dark:bg-red-900/30 dark:text-red-400">
            <p className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-red-600 dark:bg-red-400"></span>
              {errors.message}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
