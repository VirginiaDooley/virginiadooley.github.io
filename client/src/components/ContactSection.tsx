import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' }
];

export default function ContactSection() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:hello@example.com';
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-8 bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6" data-testid="text-contact-heading">
          Let's Work Together
        </h2>
        
        <p className="text-muted-foreground text-base md:text-lg mb-12 leading-relaxed" data-testid="text-contact-description">
          Have a project in mind or just want to chat? I'd love to hear from you. 
          Drop me a message and let's create something amazing together.
        </p>

        <Button
          size="lg"
          onClick={handleEmailClick}
          className="gap-2 mb-12"
          data-testid="button-email"
        >
          <Mail className="w-4 h-4" />
          hello@example.com
        </Button>

        <div className="flex items-center justify-center gap-4">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                onClick={() => window.open(link.href, '_blank')}
                data-testid={`button-social-${link.label.toLowerCase()}`}
              >
                <Icon className="w-5 h-5" />
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
