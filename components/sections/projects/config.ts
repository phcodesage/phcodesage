// config.ts
import { Project } from '@/types/project';

const projects: Project[] = [
  {
    name: 'Shamus Coach Bus Website',
    slug: 'shamuscoachbus',
    description:
      'Shamus Coach Bus has been providing top-notch transportation services for over 29 years. Family-owned and operated, they bring a personal touch with industry knowledge and experience to ensure comfortable and luxurious travel accommodations for groups and destinations.',
    thumbnail: '/images/projects/shamuscoachbus/cover.jpg',
    techstack: [
      { label: 'Bootstrap' },
      { label: 'jQuery' },
      { label: 'Node.js' },
      { label: 'JavaScript' },
      { label: 'REST API' }
    ],
    role: 'Full Stack Developer',
    website: 'https://shamuscoachbus.com/',
    github: 'https://github.com/phcodesage/shamuscoachbus.git'
  },
  {
    slug: 'purpleroof',
    name: 'Purple Roof',
    description:
      'A professional website built using modern web technologies to showcase projects and skills.',
    thumbnail: '/images/projects/purpleroof/cover.jpg',
    techstack: [
      { label: 'Next.js' },
      { label: 'React' },
      { label: 'Tailwind CSS' },
      { label: 'AWS S3' },
      { label: 'API Development' }
    ],
    role: 'Junior Front End Developer'
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
