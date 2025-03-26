// import croppedimage from '../../images/cropped.JPG';
import React, { useEffect, useRef } from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';
import AnimatedSeparator from '../ui/AnimatedSeparator';

const HeroSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => {
      if (scrollRef.current) {
        observer.unobserve(scrollRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 section overflow-hidden"
    >
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 -z-10" />
      
      {/* Content */}
      <div 
        ref={scrollRef}
        className="w-full max-w-5xl mx-auto opacity-0 transition-opacity duration-1000 ease-out"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <div>
              <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-secondary text-secondary-foreground animate-fade-in">
                Software Engineer
              </span>
              <h1 className="mt-4 font-bold animate-fade-in-delay-1 opacity-0">
                Sai Puneeth Thummaluru
              </h1>
              
              <AnimatedSeparator className="animate-fade-in-delay-2 opacity-0" />
              
              <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-delay-3 opacity-0">
                Master's in Computer Science student specializing in Software Engineering, 
                Intelligent Systems, and Database Management.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-4 opacity-0">
              <a 
                href="#contact" 
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                Get in touch
              </a>
              <a 
                href="#experience" 
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border font-medium transition-all duration-300 hover:bg-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#experience')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                View experience 
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            
            <div className="flex items-center gap-6 animate-fade-in-delay-5 opacity-0">
              <div className="flex items-center gap-3">
                <a 
                  href="mailto:thummalurusaipuneeth@gmail.com" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  thummalurusaipuneeth@gmail.com
                </a>
              </div>
              <div className="h-5 w-px bg-border"></div>
              <div className="flex items-center gap-3">
                <a 
                  href="tel:+16824068490" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  (682)-406-8490
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 animate-fade-in-delay-5 opacity-0">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-secondary/50 border border-border/40 shadow-xl">
              <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(to_bottom,white,rgba(255,255,255,0.5))]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                {/* <div className="text-5xl font-bold text-foreground/80">SP</div> */}
                <img src='/cropped.JPG'
                alt='Your Image'
                className='w-full h-full object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Scroll down</span>
          <ArrowDown className="h-4 w-4 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
