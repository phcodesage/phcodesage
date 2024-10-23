// config.ts
import { Project } from '@/types/project';

const projects: Project[] = [
  {
    name: 'Shamus Coach Bus Website',
    slug: 'shamuscoachbus',
    description:
      'A professional website built for the family who owns a coach bus business.',
    thumbnail: '/images/projects/shamuscoachbus/cover.jpg'
  },
  {
    slug: 'purpleroof',
    name: 'Purple Roof',
    description:
      'A professional website built for the property management company.',
    thumbnail: '/images/projects/purpleroof/cover.jpg'
  },
  {
    name: 'Dental Booking',
    slug: 'dentalbooking',
    description:
      'A dental appointment web app where clients can browse available dentists and schedule appointments.',
    thumbnail: '/images/projects/dentalbooking/cover.jpg'
  }
];

export { projects };
