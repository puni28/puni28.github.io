
import React, { useRef, useState } from 'react';
import AnimatedSeparator from '../ui/AnimatedSeparator';
import { Send, Mail, PhoneCall, Linkedin, Github, CheckCircle } from 'lucide-react';
import { toast } from "sonner";
import emailjs from "emailjs-com";
import { set } from 'date-fns';
import { error } from 'console';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_o5luq5q',
      'template_mmgklk5',
      formRef.current!,
      'YDxsfHshBO7TasqKB'
    )
    .then(() => {
      setIsSubmitting(false);
      setIsSubmitted(true); 
      toast.success("Message sent successfully! I'll get back to you soon."); 

      if (formRef.current) {
        formRef.current.reset();
      }
      
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 3000);
    })
    .catch((error) => {
      setIsSubmitting(false);
      toast.error("Something went wrong. Please try again later.");
      console.error("EmailJS Error:", error);
    });

    // Simulate form submission
    
  };

  return (
    <section id="contact" className="section bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="font-bold">Get In Touch</h2>
          <AnimatedSeparator className="mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 opacity-0 animate-fade-in-delay-1">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let's talk</h3>
              <p className="text-muted-foreground">
                Whether you have a question, opportunity, or just want to say hello, 
                I'd love to hear from you. Fill out the form or reach out directly.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Email</h4>
                  <a 
                    href="mailto:thummalurusaipuneeth@gmail.com" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    thummalurusaipuneeth@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <PhoneCall className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Phone</h4>
                  <a 
                    href="tel:+16824068490" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    (682)-406-8490
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">GitHub</h4>
                  <a 
                    href="https://github.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    View GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in-delay-2">
            <form ref={formRef} onSubmit={handleSubmit} className="card-highlight p-6 space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your email"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Your message"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
