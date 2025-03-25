
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      className="min-h-screen py-32 flex items-center relative overflow-hidden"
      id="hero"
    >
      {/* Aurora Background Effect */}
      {/* This component provides a subtle gradient background with animated effects */}
      <AuroraBackground containerClassName="absolute inset-0">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              {/* Main heading - EDIT YOUR NAME HERE */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-8"
              >
                Hi I'm Mia!
              </motion.h1>
              
              {/* Bio text - EDIT YOUR PERSONAL STATEMENT HERE */}
              {/* Font is kept 3 sizes smaller as requested */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-800 max-w-xl mb-10 text-xs md:text-sm"
              >
                I am a junior at the University of Miami studying Computer Science and Immersive Media. I want to leverage my technical background to bridge the gap between users and technology to create experiences that matter.
              </motion.p>
              
              {/* Call-to-action buttons - EDIT LINKS AND TEXT HERE */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <Button asChild size="lg" className="rounded-full px-8 gap-2 bg-gray-900 hover:bg-gray-800">
                  <a href="#contact">
                    <Mail className="h-4 w-4" /> Get in Touch
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 gap-2 border-gray-300 text-gray-800 hover:bg-gray-50">
                  <a href="#resume">
                    <Download className="h-4 w-4" /> View Resume
                  </a>
                </Button>
              </motion.div>
            </div>
            
            {/* Profile image container - REPLACE IMAGE SRC TO CHANGE YOUR PHOTO */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="order-1 md:order-2 flex justify-center md:justify-end"
            >
              <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-xl">
                <img 
                  src="/lovable-uploads/903c31a3-df23-4391-b24c-9fb7cf8d3a5d.png" 
                  alt="Mia Uy" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </AuroraBackground>
    </section>
  );
}
