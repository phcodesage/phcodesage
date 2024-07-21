import Image from 'next/image';
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPages, getPage, type ProjectMetadata } from '@/lib/mdx';
import Header from './header';

// Import icons from react-icons
import { FaCss3Alt, FaJs, FaNode, FaReact } from 'react-icons/fa';
import { SiBootstrap, SiJquery, SiAmazonaws, SiApollographql, SiMongodb, SiExpress, SiNextui, SiTailwindcss } from 'react-icons/si';
import { IconType } from 'react-icons/lib';

// Define a type for the keys of techIcons
type TechLabels = 'Bootstrap' | 'jQuery' | 'Node.js' | 'AWS S3' | 'CSS3' | 'JavaScript' | 'REST API' | 'MongoDB' | 'Express' | 'React' | 'NEXT.js' | 'Tailwind CSS';

const techIcons: Record<TechLabels, IconType> = {
  'Bootstrap': SiBootstrap,
  'jQuery': SiJquery,
  'Node.js': FaNode,
  'AWS S3': SiAmazonaws,
  'CSS3': FaCss3Alt,
  'JavaScript': FaJs,
  'REST API': SiApollographql,
  'MongoDB': SiMongodb,
  'Express': SiExpress,
  'React': FaReact,
  'NEXT.js': SiNextui,
  'Tailwind CSS': SiTailwindcss
};

type ProjectPageProps = {
  params: {
    slug: string;
  };
  searchParams: Record<string, never>;
};

export const generateStaticParams = (): Array<ProjectPageProps['params']> => {
  return getAllPages<ProjectMetadata>('projects').map((project) => ({
    slug: project.slug
  }));
};

export const generateMetadata = async (
  props: ProjectPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { params } = props;

  const project = getPage<ProjectMetadata>(`projects/${params.slug}`);

  if (!project) {
    return {};
  }

  const {
    metadata: { name, description }
  } = project;
  const previousTwitter = (await parent)?.twitter ?? {};
  const previousOpenGraph = (await parent)?.openGraph ?? {};

  return {
    title: name,
    description: description,
    alternates: {
      canonical: `/projects/${params.slug}`
    },
    openGraph: {
      ...previousOpenGraph,
      url: `/projects/${params.slug}`,
      title: name,
      description: description,
      images: [
        {
          url: `/images/projects/${params.slug}/cover.png`,
          width: 1280,
          height: 832,
          alt: description,
          type: 'image/png'
        }
      ]
    },
    twitter: {
      ...previousTwitter,
      title: name,
      description: description,
      images: [
        {
          url: `/images/projects/${params.slug}/cover.png`,
          width: 1280,
          height: 832,
          alt: description
        }
      ]
    }
  };
};

const ProjectPage = (props: ProjectPageProps) => {
  const {
    params: { slug }
  } = props;

  const project = getPage<ProjectMetadata>(`projects/${slug}`);

  if (!project) {
    notFound();
  }

  const { metadata, content } = project;

  return (
    <div className="container mx-auto">
      <Header metadata={metadata} />
      <Image
        src={`/images/projects/${slug}/cover.jpg`}
        width={1280}
        height={832}
        alt={metadata.name}
        className="my-12 rounded-lg"
      />
      <div className="my-8">
        <h2 className="text-2xl font-bold">Tech Stack</h2>
        <ul className="list-none mt-4 flex flex-wrap gap-4">
          {(metadata.techstack ?? []).map((tech, index) => {
            const Icon = techIcons[tech.label as TechLabels];
            return (
              <li key={index} className="flex items-center space-x-2">
                <Icon className="text-2xl" />
                <span className="text-lg">{tech.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="prose dark:prose-dark">
        {content}
      </div>
    </div>
  );
};

export default ProjectPage;
