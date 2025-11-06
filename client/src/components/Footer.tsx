import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/VirginiaDooley' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/virginia-dooley/' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-6 md:py-8 px-4 md:px-6 text-center text-muted-foreground text-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground" data-testid="text-copyright">
            © 2025 Virginia Dooley
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open(link.href, '_blank')}
                  data-testid={`button-footer-social-${link.label.toLowerCase()}`}
                >
                  <Icon className="w-4 h-4" />
                </Button>
              );
            })}
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              data-testid="button-back-to-top"
              className="ml-2"
            >
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
