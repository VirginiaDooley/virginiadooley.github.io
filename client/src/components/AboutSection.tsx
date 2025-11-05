import { Badge } from '@/components/ui/badge';
import aboutImage from '@assets/generated_images/Professional_developer_headshot_portrait_46a8b846.png';

const skills = [
  'React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS',
  'Figma', 'UI/UX Design', 'PostgreSQL', 'Git', 'AWS'
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
                I'm a passionate freelance developer and designer with a focus on creating 
                exceptional digital experiences. With over 5 years of experience, I've helped 
                businesses and individuals bring their ideas to life.
              </p>
              <p data-testid="text-about-paragraph-2">
                My approach combines technical expertise with creative problem-solving, 
                ensuring every project is both beautiful and functional. I believe in clean 
                code, intuitive design, and delivering solutions that exceed expectations.
              </p>
              <p data-testid="text-about-paragraph-3">
                When I'm not coding, you'll find me exploring new design trends, contributing 
                to open-source projects, or sharing knowledge with the developer community.
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
