import { Hero } from '@/types/hero';
import { metadata as meta } from '@/app/config';

const hero: Hero = {
  name: meta.author.name,
  label: meta.author.label,
  description: 'I craft fullstack web and mobile apps. Welcome to my portfolio.'
};

export { hero };
