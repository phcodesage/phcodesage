import { Project } from '@/types/project';

const projects: Project[] = [
  {
    name: 'Shamus Coach Bus',
    slug: 'shamuscoachbus',
    description:
      'A bus company website to book buses with a simple form.',
    thumbnail: '/images/projects/shamuscoachbus/cover.jpg'
  },
  {
    slug: 'purpleroof',
    name: 'Purple Roof',
    description: 'A professional website built using modern web technologies to showcase projects and skills.',
    thumbnail: '/images/projects/purpleroof/cover.jpg',
    techstack: [
      { label: 'Next.js' },
      { label: 'React' },
      { label: 'Tailwind CSS' },
      { label: 'AWS S3' },
      { label: 'API Development' },
    ],
    role: 'Junior Front End Developer'
  },
  {
    name: 'Ibooky Hotel Reservation',
    slug: 'ibooky',
    description:
      'A hotel reservation website where the user can book and find hotels.',
    thumbnail: '/images/projects/ibooky/cover.jpg'
  }
];

export { projects };
