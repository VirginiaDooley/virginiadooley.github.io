import { Code2, Palette, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Building responsive, performant web applications with modern frameworks and best practices.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces focused on exceptional user experiences.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Developing cross-platform mobile applications that work seamlessly across all devices.'
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
            Specialized services to bring your digital vision to life
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
