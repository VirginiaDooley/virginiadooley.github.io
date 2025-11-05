import { Globe, Users, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Civic Engagement Tools',
    description: 'Building platforms and tools that help engage people in their communities and find common ground.'
  },
  {
    icon: BarChart3,
    title: 'Data Visualization',
    description: 'Creating clear, accessible visualizations that help communities understand complex civic data and issues.'
  },
  {
    icon: Users,
    title: 'Community Platforms',
    description: 'Developing digital spaces that facilitate meaningful dialogue and collaborative problem-solving.'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-services-heading">
            What I Do
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Building civic participation tools and helping communities maintain focus in a chaotic world
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
