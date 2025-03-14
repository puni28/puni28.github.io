
import React, { useEffect, useRef } from 'react';
import AnimatedSeparator from '../ui/AnimatedSeparator';
import { Code, Database, ServerCog, Terminal, GitBranch, Braces } from 'lucide-react';

interface SkillCategory {
  icon: React.ElementType;
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: Code,
    title: 'Programming',
    skills: ['Java', 'C++', 'Python', 'JavaScript', 'TypeScript']
  },
  {
    icon: Braces,
    title: 'Frontend',
    skills: ['React', 'HTML', 'CSS', 'Tailwind CSS']
  },
  {
    icon: ServerCog,
    title: 'Backend Development',
    skills: ['API design', 'Microservices', 'RESTful services', 'Spring Boot']
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase']
  },
  {
    icon: Terminal,
    title: 'Infrastructure & Cloud',
    skills: ['Docker', 'Kubernetes', 'Terraform', 'AWS', 'Azure', 'Google Cloud']
  },
  {
    icon: GitBranch,
    title: 'Tools & Workflows',
    skills: ['Git', 'Agile methodologies', 'CI/CD', 'Unit testing', 'Integration testing']
  }
];

const SkillsSection = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const categories = entry.target.querySelectorAll('.skill-category');
            categories.forEach((category, i) => {
              setTimeout(() => {
                category.classList.add('animate-fade-in');
                
                const skills = category.querySelectorAll('.skill-badge');
                skills.forEach((skill, j) => {
                  setTimeout(() => {
                    skill.classList.add('animate-scale-in');
                  }, j * 100);
                });
              }, i * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="section">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="font-bold">Skills</h2>
          <AnimatedSeparator className="mx-auto" />
        </div>

        <div 
          ref={skillsRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category opacity-0 card-highlight">
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-primary/10">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="skill-badge opacity-0"
                    >
                      {skill}
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

export default SkillsSection;
