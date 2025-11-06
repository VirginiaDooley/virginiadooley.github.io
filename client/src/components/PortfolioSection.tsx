import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import project1 from '@assets/generated_images/Web_dashboard_project_mockup_1a6249de.png';
import project2 from '@assets/generated_images/Mobile_ecommerce_app_mockup_d29457e7.png';
import project3 from '@assets/generated_images/Creative_agency_website_mockup_ebc387d4.png';
import project4 from '@assets/generated_images/Brand_identity_design_showcase_036d156f.png';

const projects = [
  {
    title: 'Community Participation Platform',
    category: 'Public Interest',
    description: 'A comprehensive platform enabling local communities to engage with civic issues and track municipal decisions.',
    tags: ['React', 'TypeScript', 'PostgreSQL'],
    image: project1
  },
  {
    title: 'Women-Led Business Network',
    category: 'Community Platform',
    description: 'Platform connecting women entrepreneurs, facilitating mentorship, resource sharing, and collaborative growth opportunities.',
    tags: ['React Native', 'Node.js', 'GraphQL'],
    image: project2
  },
  {
    title: 'Open Data Visualization Hub',
    category: 'Data Platform',
    description: 'Interactive visualizations making complex civic data accessible and understandable for all community members.',
    tags: ['D3.js', 'Next.js', 'Open Data APIs'],
    image: project3
  },
  {
    title: 'Participatory Budgeting Tool',
    category: 'Democracy Platform',
    description: 'Digital platform enabling residents to propose and vote on community budget priorities democratically.',
    tags: ['Vue.js', 'Python', 'PostgreSQL'],
    image: project4
  }
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
                  <button 
                    className="hover-elevate active-elevate-2 p-1.5 rounded-md"
                    onClick={() => console.log(`View project: ${project.title}`)}
                    data-testid={`button-view-project-${index}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
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
