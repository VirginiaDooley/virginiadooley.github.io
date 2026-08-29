import { Code2, Users, Target } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Build civic tech solutions from scratch. React frontends, Python/Rails backends, data pipelines. Whatever your idea needs.'
  },
  {
    icon: Target,
    title: 'Launch and Scale',
    description: 'Help get civic tech from concept to working system. I work on product, fundraising, governance, and community.'
  },
  {
    icon: Users,
    title: 'Open Data Infrastructure',
    description: 'Create systems for civic participation. APIs for representative data, voter tools, infrastructure for democracy.'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-10 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-services-heading">
            What I Do
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            I build civic tech. From coding the platform to fundraising and governance. I help take ideas for democracy and community and make them real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="border rounded-lg p-8 hover-elevate active-elevate-2 transition-all duration-200"
                data-testid={`card-service-${index}`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium mb-3" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-service-description-${index}`}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
