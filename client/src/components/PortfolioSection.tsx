import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import project1 from '@assets/generated_images/uk-voter-app.png';
import project2 from '@assets/generated_images/civicdatatech-screenshot.png';
import project3 from '@assets/generated_images/civicpatch-screenshot.png';
import project4 from '@assets/generated_images/civicaction.png';

const projects = [
  {
    title: 'Voter Information App',
    category: 'Mobile App',
    description: 'A mobile app providing personalized U.K. voter information, polling locations, and election reminders to increase voter turnout.',
    tags: ['React', 'Expo', 'ios/Android'],
    image: project1,
    slug: 'voter-information-app',
    detailPath: '/portfolio/voter-info'
  },
  {
    title: 'Local Representative Data',
    category: 'Open Data APIs',
    description: 'Collaborative intiative to develop a data pipeline of local U.S. representatives.',
    tags: ['Ruby', 'Python', 'Tailwind'],
    image: project2, 
    slug: 'civic0-data-tech',
    detailPath: '/portfolio/civic-data-tech'
  },
  {
    title: 'CivicPatch',
    category: 'Data Visualization',
    description: 'Front end address search and interactive visualizations making civic data more accessible and understandable.',
    tags: ['D3.js', 'Next.js', 'Rails'],
    image: project3, 
    slug: 'civic-patch',
    detailPath: '/portfolio/civic-patch'
  },
  {
    title: 'Civic Action',
    category: 'Mobile App',
    description: 'Coming soon: A mobile app encouraging individuals to strengthen civic engagement.',
    tags: ['React', 'Expo', 'ios/Android'],
    image: project4, 
    // slug: 'civic-action',
    detailPath: '/portfolio/civic-action-tool'
  },
];

export default function PortfolioSection() {
  return (
    <section id="work" className="py-20 md:py-32 px-6 md:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-portfolio-heading">
            Featured Work
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Projects supporting civic participation and community engagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border rounded-lg overflow-hidden hover-elevate active-elevate-2 transition-all duration-200"
              data-testid={`card-project-${index}`}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-opacity duration-200 group-hover:opacity-90"
                  data-testid={`img-project-${index}`}
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <Badge variant="secondary" data-testid={`badge-category-${index}`}>
                  {project.category}
                  </Badge>
                  <Link href={project.detailPath} data-testid={`icon-internal-link-${index}`}
                    className="inline-flex items-center text-blue-600 hover:underline"
                  >
                    <ArrowUpRight className="w-4 h-4 cursor-pointer" />
                  </Link>
                </div>
                <h3 className="text-xl md:text-2xl font-medium mb-2" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`text-project-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" data-testid={`badge-tag-${index}-${tagIndex}`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
