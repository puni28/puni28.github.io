
import React, { useEffect, useRef } from 'react';
import AnimatedSeparator from '../ui/AnimatedSeparator';
import { School, Code, Database, Cloud } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach(el => observer.observe(el));

    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="section bg-secondary/30">
      <div ref={sectionRef} className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal-on-scroll opacity-0">
          <h2 className="font-bold">About Me</h2>
          <AnimatedSeparator className="mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 reveal-on-scroll opacity-0">
            <h3 className="font-semibold">Education</h3>
            <div className="card-highlight p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-primary/10">
                  <School className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">The University of Texas at Arlington</h4>
                  <p className="text-sm text-muted-foreground">August 2023 - May 2025</p>
                  <p className="mt-1">Master's in Computer Science | CGPA: 3.33/4.00</p>
                  <p className="text-sm mt-2">
                    Specializations: Software Engineering, Intelligent Systems, Database Management
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card-highlight p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-primary/10">
                  <School className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">SRM Institute of Science and Technology</h4>
                  <p className="text-sm text-muted-foreground">July 2018 - May 2022</p>
                  <p className="mt-1">Bachelor of Technology in Computer Science and Engineering | CGPA: 8.89/10</p>
                  <p className="text-sm mt-2">
                    Coursework: Data Structures & Algorithms, Object-Oriented Programming, Problem solving
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 reveal-on-scroll opacity-0">
            <h3 className="font-semibold">Expertise</h3>
            <div className="space-y-6">
              <div className="card-highlight p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-medium">Programming & Development</h4>
                </div>
                <p className="text-muted-foreground">
                  Proficient in languages like Java, C++, Python, and JavaScript, with experience in 
                  building scalable backend services and optimizing REST APIs.
                </p>
              </div>
              
              <div className="card-highlight p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-medium">Database Management</h4>
                </div>
                <p className="text-muted-foreground">
                  Experienced with MySQL, PostgreSQL, MongoDB, and Firebase, designing efficient schemas and 
                  optimizing queries for performance.
                </p>
              </div>
              
              <div className="card-highlight p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Cloud className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-medium">Cloud & Infrastructure</h4>
                </div>
                <p className="text-muted-foreground">
                  Skilled in Docker, Kubernetes, AWS, and CI/CD pipelines, implementing cloud migration 
                  and infrastructure as code solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
