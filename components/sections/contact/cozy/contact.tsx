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
    <MotionWrap className="w-full py-24 lg:py-32" id="contact">
      <div className="px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <SectionTitle
              title="Let's Connect"
              subtitle="Have a question or want to work together? Send me a message using the form or connect with me on social media."
            />

            <div className="flex items-center justify-center space-x-2 pt-2">
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
          <ContactForm
            state={state}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        </div>
      </div>
    </MotionWrap>
  );
}

export default Contact;
