import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { projects } from '@/components/sections/projects/config';
import { notFound } from 'next/navigation';
import { getProjectContent } from '@/lib/mdx';

export default async function ProjectPage({
  params: { slug }
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const content = await getProjectContent(slug);

  return (
    <main className="container relative mx-auto min-h-screen max-w-7xl overflow-y-auto px-4 py-8">
      {/* Back Button */}
      <div className="sticky top-4 z-10 mb-8 w-full">
        <Link href="/#projects">
          <Button
            variant="secondary"
            size="lg"
            className="group flex items-center gap-2 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Projects</span>
          </Button>
        </Link>
      </div>

      <div className="space-y-8 pb-16 lg:space-y-12">
        {/* Project Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {content.frontmatter.name || project.name}
          </h1>
          {content.frontmatter.description && (
            <p className="text-base text-muted-foreground sm:text-lg lg:text-xl">
              {content.frontmatter.description}
            </p>
          )}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content Column */}
          <div className="space-y-8 lg:col-span-2">
            {/* Project Image */}
            {project.thumbnail && (
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={project.thumbnail}
                  alt={project.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Project Content */}
            <div className="prose max-w-none break-words dark:prose-invert">
              <div
                dangerouslySetInnerHTML={{ __html: content.content }}
                className="space-y-4"
              />
            </div>

            {/* Project Gallery */}
            {project.images && project.images.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Gallery</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-video overflow-hidden rounded-lg"
                    >
                      <Image
                        src={image}
                        alt={`${project.name} gallery image ${index + 1}`}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-lg border bg-card p-6 shadow-lg">
              {/* Project Meta */}
              <div className="space-y-6">
                {content.frontmatter.role && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Role
                    </h3>
                    <p className="mt-1 text-base">{content.frontmatter.role}</p>
                  </div>
                )}

                {/* Tech Stack */}
                {content.frontmatter.techstack &&
                  content.frontmatter.techstack.length > 0 && (
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Technologies Used
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {content.frontmatter.techstack.map(
                          (tech: { label: string }, index: number) => (
                            <span
                              key={index}
                              className="rounded-full bg-secondary px-3 py-1 text-sm"
                            >
                              {tech.label}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}

                {/* Project Links */}
                <div className="flex flex-col gap-2 pt-2">
                  {content.frontmatter.website && (
                    <Button asChild className="w-full">
                      <a
                        href={content.frontmatter.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </a>
                    </Button>
                  )}
                  {content.frontmatter.github && (
                    <Button asChild variant="outline" className="w-full">
                      <a
                        href={content.frontmatter.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Source
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
