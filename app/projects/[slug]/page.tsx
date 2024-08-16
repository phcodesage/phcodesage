import Image from 'next/image';
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPages, getPage, type ProjectMetadata } from '@/lib/mdx';
import Header from './header';

// Import icons from react-icons
import { IconType } from 'react-icons/lib';
import {
  FaAngular,
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaGithub,
  FaGitlab,
  FaJava,
  FaJs,
  FaNode,
  FaPython,
  FaReact,
  FaVuejs
} from 'react-icons/fa';
import {
  SiAmazondynamodb,
  SiAndroid,
  SiApollographql,
  SiBootstrap,
  SiCsharp,
  SiDart,
  SiDjango,
  SiElasticsearch,
  SiExpress,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiGo,
  SiGraphql,
  SiJavascript,
  SiJquery,
  SiKotlin,
  SiKubernetes,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiPostgresql,
  SiRubyonrails,
  SiRedis,
  SiRuby,
  SiRust,
  SiScala,
  SiSpring,
  SiSqlite,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebpack
} from 'react-icons/si';

type TechLabels =
  | 'Angular'
  | 'AWS'
  | 'CSS3'
  | 'Docker'
  | 'GitHub'
  | 'GitLab'
  | 'Java'
  | 'JavaScript'
  | 'Node.js'
  | 'Python'
  | 'React'
  | 'Vue.js'
  | 'DynamoDB'
  | 'Android'
  | 'Apollo'
  | 'Bootstrap'
  | 'C#'
  | 'Dart'
  | 'Django'
  | 'Elasticsearch'
  | 'Express'
  | 'Firebase'
  | 'Flask'
  | 'Flutter'
  | 'Go'
  | 'GraphQL'
  | 'jQuery'
  | 'Kotlin'
  | 'Kubernetes'
  | 'Laravel'
  | 'MongoDB'
  | 'MySQL'
  | 'NestJS'
  | 'Next.js'
  | 'Nginx'
  | 'PostgreSQL'
  | 'Ruby on Rails'
  | 'Redis'
  | 'Ruby'
  | 'Rust'
  | 'Scala'
  | 'Spring'
  | 'SQLite'
  | 'Swift'
  | 'Tailwind CSS'
  | 'TypeScript'
  | 'Vite'
  | 'Webpack';

const techIcons: Record<TechLabels, IconType> = {
  Angular: FaAngular,
  AWS: FaAws,
  CSS3: FaCss3Alt,
  Docker: FaDocker,
  GitHub: FaGithub,
  GitLab: FaGitlab,
  Java: FaJava,
  JavaScript: FaJs,
  'Node.js': FaNode,
  Python: FaPython,
  React: FaReact,
  'Vue.js': FaVuejs,
  DynamoDB: SiAmazondynamodb,
  Android: SiAndroid,
  Apollo: SiApollographql,
  Bootstrap: SiBootstrap,
  'C#': SiCsharp,
  Dart: SiDart,
  Django: SiDjango,
  Elasticsearch: SiElasticsearch,
  Express: SiExpress,
  Firebase: SiFirebase,
  Flask: SiFlask,
  Flutter: SiFlutter,
  Go: SiGo,
  GraphQL: SiGraphql,
  jQuery: SiJquery,
  Kotlin: SiKotlin,
  Kubernetes: SiKubernetes,
  Laravel: SiLaravel,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  NestJS: SiNestjs,
  'Next.js': SiNextdotjs,
  Nginx: SiNginx,
  PostgreSQL: SiPostgresql,
  'Ruby on Rails': SiRubyonrails,
  Redis: SiRedis,
  Ruby: SiRuby,
  Rust: SiRust,
  Scala: SiScala,
  Spring: SiSpring,
  SQLite: SiSqlite,
  Swift: SiSwift,
  'Tailwind CSS': SiTailwindcss,
  TypeScript: SiTypescript,
  Vite: SiVite,
  Webpack: SiWebpack
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
        <ul className="mt-4 flex list-none flex-wrap gap-4">
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
      <div className="dark:prose-dark prose">{content}</div>
    </div>
  );
};

export default ProjectPage;
