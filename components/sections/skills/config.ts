import {
  Code2,
  Database,
  Globe,
  Layout,
  Laptop,
  Server,
  Gamepad2,
  Video,
  Bot,
  Cpu,
  Cloud,
  Terminal
} from 'lucide-react';

export const skills = [
  {
    name: 'Frontend Development',
    description:
      'Building responsive and interactive web applications using React, Next.js, and modern CSS frameworks.',
    Icon: Layout
  },
  {
    name: 'Backend Development',
    description:
      'Creating robust server-side applications with Node.js, Express, Flask, and various databases.',
    Icon: Server
  },
  {
    name: 'Desktop Development',
    description:
      'Building cross-platform desktop applications using Electron and modern web technologies.',
    Icon: Laptop
  },
  {
    name: 'Game Development',
    description:
      'Creating interactive games and simulations using Godot Engine and GDScript.',
    Icon: Gamepad2
  },
  {
    name: 'Real-Time Communication',
    description:
      'Implementing WebRTC for video calls, screen sharing, and real-time data transfer.',
    Icon: Video
  },
  {
    name: 'API Development',
    description:
      'Designing and implementing RESTful APIs and GraphQL services with Node.js and Flask.',
    Icon: Code2
  },
  {
    name: 'Database Management',
    description:
      'Working with SQL and NoSQL databases including PostgreSQL, MongoDB, and Redis.',
    Icon: Database
  },
  {
    name: 'System Architecture',
    description: 'Designing scalable and maintainable software architectures.',
    Icon: Cpu
  },
  {
    name: 'Cloud Services',
    description: 'Deploying and managing applications on AWS, GCP, and Azure.',
    Icon: Cloud
  },
  {
    name: 'DevOps',
    description:
      'Implementing CI/CD pipelines, containerization, and infrastructure as code.',
    Icon: Terminal
  },
  {
    name: 'Web Performance',
    description: 'Optimizing applications for speed, accessibility, and SEO.',
    Icon: Globe
  },
  {
    name: 'AI Integration',
    description:
      'Integrating AI/ML services and implementing intelligent features.',
    Icon: Bot
  }
];
