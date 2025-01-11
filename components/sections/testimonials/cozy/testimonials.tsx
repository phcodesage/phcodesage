import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import TestimonialCard from './testimonial-card';
import Reveal from '@/components/reveal';
import { testimonials } from '@/components/sections/testimonials/config';
import Image from 'next/image';

function Testimonials() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="testimonials">
      <div className="px-4 md:px-6">
        <div className="mb-12">
          <h3 className="mb-6 text-center text-lg">Trusted By</h3>
          <div className="flex justify-center gap-8 opacity-70">
            {/* Add your client logos here */}
            <Image
              src="/logos/client1.png"
              alt="Client 1"
              width={120}
              height={40}
            />
            <Image
              src="/logos/client2.png"
              alt="Client 2"
              width={120}
              height={40}
            />
            <Image
              src="/logos/client3.png"
              alt="Client 3"
              width={120}
              height={40}
            />
          </div>
        </div>

        <div className="grid gap-10">
          <div className="flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <Reveal>
                <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                  My Testimonials
                </h2>
              </Reveal>
            </div>
            <p className="mt-4 text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]">
              Here are some testimonials where clients and colleagues share
              their experiences working with me.
            </p>
          </div>

          <div className="flex items-center justify-center overflow-hidden lg:px-12">
            <Carousel opts={{ align: 'start' }} className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full p-1">
                      <TestimonialCard
                        name={testimonial.name}
                        image={testimonial.image}
                        username={testimonial.username}
                        testimonial={testimonial.testimonial}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Testimonials;
