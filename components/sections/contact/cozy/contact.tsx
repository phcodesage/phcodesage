'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import MotionWrap from '@/components/motion-wrap';
import { toast } from '@/components/ui/use-toast';
import {
  YoutubeIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon
} from 'lucide-react';
import ContactForm from './contact-form';
import { contact } from '@/components/sections/contact/config';
import { contactSubmit } from '@/app/actions';
import { useFormState } from 'react-dom';
import SectionTitle from '@/components/section-title';

interface ValidationErrors {
  success: boolean;
  message: string;
  errors?: {
    name?: string[] | undefined;
  };
}

const initialState: ValidationErrors = {
  success: false,
  errors: {},
  message: ''
};

function Contact() {
  const [state, formAction] = useFormState(contactSubmit, initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (state?.message === '') return;

    toast({
      title: state?.success ? 'Success!' : 'Error',
      description: state?.message,
      variant: state?.success ? 'default' : 'destructive'
    });
  }, [state]);

  const handleSubmit = async (formData: {
    name: string;
    email: string;
    message: string;
  }): Promise<ValidationErrors> => {
    setIsSubmitting(true);
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('message', formData.message);

    try {
      const result = await formAction(data);
      return result as unknown as ValidationErrors;
    } catch (error) {
      console.error('Error during form submission:', error);
      return {
        success: false,
        message: 'An error occurred while submitting the form.',
        errors: {}
      };
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MotionWrap
      className="flex min-h-full w-full items-center justify-center"
      id="contact"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Let&apos;s Connect
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Have a question or want to work together? Send me a message
                using the form or connect with me on social media.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              {contact.socials?.youtube && (
                <Button variant="outline" size="icon" asChild>
                  <a target="_blank" href={contact.socials.youtube}>
                    <YoutubeIcon className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {contact.socials?.twitter && (
                <Button variant="outline" size="icon" asChild>
                  <a target="_blank" href={contact.socials.twitter}>
                    <TwitterIcon className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {contact.socials?.github && (
                <Button variant="outline" size="icon" asChild>
                  <a target="_blank" href={contact.socials.github}>
                    <GithubIcon className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {contact.socials?.linkedin && (
                <Button variant="outline" size="icon" asChild>
                  <a target="_blank" href={contact.socials.linkedin}>
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-6 shadow-lg transition-all hover:shadow-xl dark:bg-card/90">
            <ContactForm
              onSubmit={handleSubmit}
              state={state}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Contact;
