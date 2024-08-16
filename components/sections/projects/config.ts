// config.ts
import { Project } from '@/types/project';

const projects: Project[] = [
  {
    name: 'Shamus Coach Bus Website',
    slug: 'shamuscoachbus',
    description:
      'Shamus Coach Bus has been providing top-notch transportation services for over 29 years. Family-owned and operated, they bring a personal touch with industry knowledge and experience to ensure comfortable and luxurious travel accommodations for groups and destinations.',
    thumbnail: '/images/projects/shamuscoachbus/cover.jpg'
  },
  {
    slug: 'purpleroof',
    name: 'Purple Roof',
    description:
      'A professional website built using modern web technologies to showcase projects and skills.',
    thumbnail: '/images/projects/purpleroof/cover.jpg'
  },
  {
    name: 'Ibooky Hotel Reservation',
    slug: 'ibooky',
    description:
      'A hotel reservation website where the user can book and find hotels.',
    thumbnail: '/images/projects/ibooky/cover.jpg'
  },
  {
    name: 'Dental Booking',
    slug: 'dentalbooking',
    description:
      'A dental appointment platform where clients can browse available dentists and schedule appointments.',
    thumbnail: '/images/projects/dentalbooking/cover.jpg'
  }
];

export { projects };
