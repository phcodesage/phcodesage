import { Skill } from '@/types/skill';
import {
  CodeIcon,
  DatabaseIcon,
  LayoutIcon,
  SmartphoneIcon
} from 'lucide-react';

const skills: Skill[] = [
  {
    name: 'Full Stack Development',
    description: 'Crafting web apps, mobile apps, and full stack websites.',
    Icon: CodeIcon
  },
  {
    name: 'UI/UX Design',
    description: 'Creating delightful user experiences.',
    Icon: LayoutIcon
  },
  {
    name: 'Database Management',
    description: 'Storing and organizing data efficiently.',
    Icon: DatabaseIcon
  },
  {
    name: 'Mobile Development',
    description: 'Crafting apps for smartphones and tablets.',
    Icon: SmartphoneIcon
  }
];

export { skills };
