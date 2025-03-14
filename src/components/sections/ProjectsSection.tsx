
import React, { useEffect, useRef } from 'react';
import AnimatedSeparator from '../ui/AnimatedSeparator';
import { BookOpen, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Academify',
    tags: ['React', 'MySQL', 'Laravel', 'AWS'],
    description: 'Full-stack educational platform enabling real-time WebSocket-based chat between professors and students.',
    points: [
      'Designed a scalable API for assignment management, improving efficiency by 40%.',
      'Integrated AWS S3 for secure file storage and AWS Lambda for event-driven notifications.',
    ]
  },
  {
    title: 'Med Tracker',
    tags: ['React', 'Laravel', 'MySQL', 'Firebase', 'Google Cloud'],
    description: 'AI-driven medication management system, reducing missed doses by 35%.',
    points: [
      'Built serverless functions using Google Cloud Functions for automated reminders and notifications.',
      'Integrated Augmented Reality (AR) for pill identification with 95% accuracy.',
    ]
  },
  {
    title: 'Revolutionizing Urban Mobility',
    tags: ['Genetic Algorithms', 'K-means Clustering', 'Kubernetes'],
    description: 'Urban transportation optimization framework, reducing transit wait times by 25%.',
    points: [
      'Implemented containerized microservices using Docker and Kubernetes to ensure high availability.',
      'Developed API endpoints for real-time route optimization, improving scheduling efficiency by 20%.',
    ]
  }
];

const ProjectsSection = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.project-card');
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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="section bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="font-bold">Projects</h2>
          <AnimatedSeparator className="mx-auto" />
        </div>

        <div 
          ref={projectsRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card opacity-0 card-highlight group hover:translate-y-[-5px]"
            >
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-2 rounded-md bg-primary/10">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <a 
                    href="#" 
                    className="p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="View project"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                  <p className="mt-2 text-muted-foreground">{project.description}</p>
                </div>
                
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 pt-4 border-t">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
