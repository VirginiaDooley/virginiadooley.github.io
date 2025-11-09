import { Badge } from '@/components/ui/badge';
import aboutImage from '@assets/generated_images/Professional_developer_headshot_portrait_46a8b846.png';

const skills = [
  'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
  'Data Visualization', 'Open Data', 'Civic Tech', 'Fundraising', 'CRM', 'Mobile Apps'
];

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Completed', value: '50+' },
  { label: 'Happy Clients', value: '30+' }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-10 md:py-16 px-4 md:px-6">
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
                I'm passionate about using technology to solve real-world challenges and bring ideas to life. With a background in programme management, fundraising, and business operations, I’ve seen firsthand how the right tools and systems can empower people and strengthen communities.
              </p>
              <p data-testid="text-about-paragraph-2">
                These days, I focus on building open-source tools and MVPs that help communities connect, support small business growth, and amplify women-led initiatives. I love creating automations and digital solutions that lighten workloads and let people focus on what truly matters.
              </p>
              <p data-testid="text-about-paragraph-3">
                Whether it's launching websites, streamlining operations, or building community-driven platforms, I enjoy growing ideas into projects that make a lasting impact. I'm always open to collaborations — especially ones that support communities, empower women entrepreneurs, or help small businesses thrive. If that's something you're working on, let's connect!
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
