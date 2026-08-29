import { Badge } from '@/components/ui/badge';
import aboutImage from '@assets/generated_images/Professional_developer_headshot_portrait_46a8b846.png';

const skills = [
  'Full-Stack Development', 'Python', 'React', 'JavaScript', 'Ruby on Rails',
  'Program Management', 'Fundraising', 'Community Engagement', 'Governance', 'Team Building', 'Civic Tech', 'Open Data'
];

const stats = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Organizations Led', value: '7+' },
  { label: 'Teams Built', value: '15+' }
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
                I've spent the last 15 years in international development and nonprofit work, and the last 6 in software engineering. I work at the intersection of these two worlds. Right now, I'm focused on civic technology. Over the past 18 months, I've been building Civic Data Tech, which provides free, permanent access to U.S. local representative data. I've contributed code, led operations, managed fundraising, and helped structure governance for the project.
              </p>
              <p data-testid="text-about-paragraph-2">
                I'm a full-stack engineer with experience in Python, Ruby on Rails, React, and AWS. But I'm most useful when there's a bigger organizational context. I can architect a system and write the code, and I also care about whether the project is sustainable, how it's governed, who's involved, and how to fund it. I think civic tech works best when it's built openly and with the people who will use it.
              </p>
              <p data-testid="text-about-paragraph-3">
                I'm looking for civic tech work that matters. Voter information, representative data, tools for participation, infrastructure for democracy. If you're working on something in that space, I'd like to talk.
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
