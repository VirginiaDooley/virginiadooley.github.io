import { Badge } from '@/components/ui/badge';
import aboutImage from '@assets/generated_images/Professional_developer_headshot_portrait_46a8b846.png';

const skills = [
  'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
  'Data Visualization', 'D3.js', 'Open Data', 'Public Interest Tech', 'Community Building'
];

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Completed', value: '50+' },
  { label: 'Happy Clients', value: '30+' }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <img
              src={aboutImage}
              alt="About me"
              className="w-full aspect-square object-cover rounded-lg"
              data-testid="img-about"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6" data-testid="text-about-heading">
              About Me
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p data-testid="text-about-paragraph-1">
                I'm passionate about using technology to tackle big problems and turn ideas into reality. My work focuses on building open-source tools and launching MVPs that help communities engage more meaningfully, support small business growth, and amplify women-led initiatives.
              </p>
              <p data-testid="text-about-paragraph-2">
                I love creating automation and digital solutions that reduce heavy workloads, freeing people to focus on what matters most. From launching websites to building community-driven platforms, I enjoy growing ideas into impactful, scalable projects.
              </p>
              <p data-testid="text-about-paragraph-3">
                I'm open to new opportunities and collaborations — especially those that strengthen communities, empower women entrepreneurs, or make it easier for small businesses to thrive. If you're working on something that moves those goals forward, let's connect.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-medium mb-4 text-foreground">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" data-testid={`badge-skill-${index}`}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} data-testid={`stat-${index}`}>
                  <div className="text-2xl md:text-3xl font-bold mb-1" data-testid={`text-stat-value-${index}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid={`text-stat-label-${index}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
