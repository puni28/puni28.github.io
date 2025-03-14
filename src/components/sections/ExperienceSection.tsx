
import React, { useEffect, useRef } from 'react';
import AnimatedSeparator from '../ui/AnimatedSeparator';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Associate Technical Consultant',
    company: 'Highradius',
    location: 'Bhubaneswar, India',
    period: 'July 2022 – August 2023',
    description: [
      'Developed scalable backend services for enterprise solutions using Java, Spring Boot, and MySQL.',
      'Designed and optimized REST APIs, improving system performance by 30%.',
      'Implemented CI/CD pipelines for automated deployment, reducing release cycle time by 40%.',
      'Resolved 200+ Jira tickets, improving client system efficiency and reducing backlog by 40%.',
      'Debugged and optimized multiple agent functionalities using Eclipse IDE, improving processing speed by 25%.',
      'Documented software enhancements and troubleshooting procedures, reducing debugging time by 20%.',
      'Led cloud migration efforts by implementing AWS Lambda functions and DynamoDB, improving system scalability.'
    ]
  },
  {
    title: 'Trainee',
    company: 'Highradius',
    location: 'Bhubaneswar, India',
    period: 'August 2021– June 2022',
    description: [
      'Developed and automated the company\'s Preplacement Offer (PPO) approval process using Google AppScript, reducing manual efforts by 50%.',
      'Developed a real-time dashboard for intern training schedules using Google Cloud Functions.',
      'Investigated and resolved client-reported software issues and achieved a 90% resolution rate.',
      'Worked on Java-based functionalities to streamline internal company processes.',
      'Engineered an internal reporting tool to track intern performance and progress, accelerating efficiency by 25%.'
    ]
  }
];

const ExperienceSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.timeline-item');
            elements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in');
              }, i * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="section">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="font-bold">Professional Experience</h2>
          <AnimatedSeparator className="mx-auto" />
        </div>

        <div ref={timelineRef} className="mt-12">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="mb-3">
                <span className="inline-flex items-center gap-2 font-medium text-sm text-muted-foreground">
                  <Briefcase className="h-4 w-4" /> {exp.period}
                </span>
              </div>
              <div className="card-highlight p-6 space-y-4">
                <div>
                  <h3 className="font-semibold">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-x-3 text-muted-foreground">
                    <span>{exp.company}</span>
                    <span className="text-muted-foreground/50">•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
