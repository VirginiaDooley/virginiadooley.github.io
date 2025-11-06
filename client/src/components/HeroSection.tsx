import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroImage from '@assets/generated_images/Professional_developer_headshot_portrait_46a8b846.png'
import heroImageThumbnail from '@assets/generated_images/vcd_profile.png'

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 md:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src={heroImageThumbnail}
            alt="Professional headshot"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto object-cover border-2 border-border"
            data-testid="img-hero-avatar"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6" data-testid="text-hero-title">
          Developer for
          <br />
          Public Interest
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed" data-testid="text-hero-description">
          I love thinking about big problems and how code might facilitate better 
          understanding and offer solutions for communities, small businesses, and women-led initiatives.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* <Button
            size="lg"
            onClick={() => scrollToSection('work')}
            data-testid="button-view-work"
            className="gap-2"
          >
            View My Work
            <ArrowRight className="w-4 h-4" />
          </Button> */}
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            data-testid="button-get-in-touch"
          >
            Get in Touch
          </Button>
        </div>

        <button
          onClick={() => scrollToSection('services')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hover-elevate active-elevate-2 p-2 rounded-full"
          data-testid="button-scroll-indicator"
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </button>
      </div>
    </section>
  );
}
