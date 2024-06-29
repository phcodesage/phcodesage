import { Hero } from '@/types/hero';
import { metadata as meta } from '@/app/config';

const hero: Hero = {
  name: meta.author.name,
  label: meta.author.label,
  description: 'I craft web apps and mobile apps, and build some full stack websites. Welcome to my portfolio.'
};

export { hero };
