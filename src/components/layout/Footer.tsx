
import React from 'react';
import { Github, Linkedin, Mail, PhoneCall } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Sai Puneeth Thummaluru</h3>
            <p className="text-muted-foreground max-w-md">
              Master's in Computer Science student specializing in Software Engineering, 
              Intelligent Systems, and Database Management.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end">
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="mailto:thummalurusaipuneeth@gmail.com" 
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:+16824068490" 
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Phone"
              >
                <PhoneCall className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sai Puneeth Thummaluru. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
