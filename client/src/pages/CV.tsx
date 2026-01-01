import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function CV() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2" data-testid="text-cv-name">
            Virginia Dooley
          </h1>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4" data-testid="text-cv-summary-heading">
            Summary
          </h2>
          <p className="text-muted-foreground leading-relaxed" data-testid="text-cv-summary">
            Virginia is a full-stack software engineer with over six years of experience, specialising in Python, Ruby on Rails, JavaScript, and React. With a 15-year career in international development, she has gained expertise in people-centred management, effective communication, critical decision-making, public speaking, and fundraising. Passionate about leveraging technology for social impact, she transitioned from non-profit work to software development after assisting startups and grassroots organizations with digital tools. Virginia excels in building impactful solutions, from automated data systems to customer-facing platforms, all while fostering collaboration and continuous improvement.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4" data-testid="text-cv-skills-heading">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground">
            <p><span className="font-medium text-foreground">Languages:</span> Python, JavaScript, Ruby</p>
            <p><span className="font-medium text-foreground">Frameworks:</span> Django, Ruby on Rails</p>
            <p><span className="font-medium text-foreground">Databases:</span> SQL, Postgres</p>
            <p><span className="font-medium text-foreground">DevOps:</span> Docker, AWS, CircleCI</p>
            <p><span className="font-medium text-foreground">Frontend:</span> React, HTML, CSS</p>
            <p><span className="font-medium text-foreground">Tools:</span> Git, GitHub, Jira, Trello</p>
            <p><span className="font-medium text-foreground">Data Analysis:</span> Pandas, NumPy, Matplotlib</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4" data-testid="text-cv-education-heading">
            Education
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p><span className="font-medium text-foreground">Flatiron School</span> | Full-Stack Software Engineering | London | Sept 2018-2019</p>
            <p><span className="font-medium text-foreground">Startup Leadership Programme</span> | London | Sept 2017-Apr 2018</p>
            <p><span className="font-medium text-foreground">SOAS, University of London</span> | MSc in International Development</p>
            <p><span className="font-medium text-foreground">Georgetown University</span> | BS in Russian Language; minor in Government</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6" data-testid="text-cv-experience-heading">
            Experience
          </h2>
          
          <div className="space-y-8">
            <div>
              <p className="font-medium mb-2">
                <p>Freelance Software Developer | Nov 2024 - Present</p>
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Helped Talli Baby regain control of their mobile app development after outsourcing work abroad.</li>
				        <li>Collaborated on the development of a new product to provide permanent and free access to U.S. representative data.</li>
				        <li>Developed a mobile app for U.K. voters to access personalized voting information.</li>
              </ul>
            </div>
            
            <div>
              <p className="font-medium mb-2">
                Full Stack Developer | <a href="https://democracyclub.org.uk/" className="text-foreground hover:underline" target="_blank" rel="noopener noreferrer">Democracy Club</a> | Jan 2021-October 2024
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Reduced technical debt, resulting in improved system performance, scalability, and long-term maintainability.</li>
                <li>Enhanced and maintained core features across multiple platforms using AWS, React, and Python, streamlining functionality and user experience.</li>
                <li>Integrated AWS Textract to automate data extraction and optimize the processing and aggregation of official documents, significantly improving efficiency.</li>
                <li>Collaborated on organizational strategy and contributed to enhancing digital service delivery, aligning technical solutions with broader business goals.</li>
              </ul>
            </div> 

            <div>
              <p className="font-medium mb-2">
                Junior Developer | <a href="https://www.mtvh.co.uk/" className="text-foreground hover:underline" target="_blank" rel="noopener noreferrer">Metropolitan Thames Valley Housing</a> | Jan 2020-Present
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Implemented new features for a customer service platform using Ruby on Rails, JavaScript, Docker, and AWS.</li>
                <li>Collaborated in two-week sprint cycles, contributing to sprint planning, daily stand-ups, and product demos.</li>
              </ul>
            </div>

            <div>
              <p className="font-medium mb-2">
                Independent Consultant | Freelance | Aug 2014-Sept 2018
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Crafted and developed custom websites to enhance clients' online presence and brand visibility.</li>
                <li>Designed and implemented CRM systems and digital strategies to build and grow vibrant virtual communities.</li>
                <li>Collaborated with UK-based clients, including Nova New Opportunities, KitchinTable, Mums in Tech, MAMACodes, Bindi Karia, Structur3dPeople, and WonderWomenTV, providing business strategy consulting and digital solutions.</li>
              </ul>
            </div>

            <div>
              <p className="font-medium mb-2">
                Senior Programme Officer | <a href="https://www.empowerweb.org/" className="text-foreground hover:underline" target="_blank" rel="noopener noreferrer">EMpower - The Emerging Markets Foundation</a> | Oct 2004-Aug 2014
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Managed a $1.2M grant portfolio supporting at-risk youth in Ghana, Nigeria, South Africa, Russia, and Turkey.</li>
                <li>Developed a donor management and impact assessment system using Salesforce.com.</li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="border-t pt-8 mt-12">
          <div className="flex flex-wrap gap-4 items-center justify-center text-sm text-muted-foreground">
            <Link href="/">
              <a className="hover:text-foreground transition-colors" data-testid="link-footer-home">home</a>
            </Link>
            <a href="https://www.linkedin.com/in/virginia-dooley/" className="hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer" data-testid="link-footer-linkedin">
              linkedin
            </a>
            <a href="https://www.github.com/VirginiaDooley" className="hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer" data-testid="link-footer-github">
              github
            </a>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">&copy; 2025 Virginia Dooley</p>
        </footer>
      </div>
    </div>
  );
}
