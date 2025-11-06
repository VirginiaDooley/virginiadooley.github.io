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
                I love thinking about big problems and how code might facilitate better understanding 
                and offer solutions. My work focuses on building tools that help communities engage 
                meaningfully with civic issues, support small businesses in their growth, and amplify women-led initiatives.
              </p>
              <p data-testid="text-about-paragraph-2">
                I enjoy supporting initiatives that help engage people in their communities and find 
                common ground. I'm particularly passionate about creating technology solutions that empower 
                women entrepreneurs and help small businesses thrive in their communities.
              </p>
              <p data-testid="text-about-paragraph-3">
                I'm open to new opportunities and available for project work. If you're working on 
                something that makes communities stronger, supports small business growth, or advances 
                women-led initiatives, I'd love to hear from you.
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

            <div className="grid grid-cols-3 gap-6">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
