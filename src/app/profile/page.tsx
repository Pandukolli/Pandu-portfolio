"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Film, Code, Palette, MapPin, GraduationCap } from 'lucide-react';

export default function Profile() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
      const contentTimer = setTimeout(() => {
        setShowContent(true);
      }, 800);
      return () => clearTimeout(contentTimer);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };


  const photoVariants = {
    initial: { scale: 0, rotate: -180, opacity: 0 },
    animate: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
        duration: 1.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white  via-black to-white p-4 flex items-center justify-center rounded-xl">
      <motion.div
        className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Header */}
        

        <div className="flex flex-col lg:flex-row">
          {/* Left Content Section */}
          <div className="lg:w-1/2 p-8 lg:p-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={showContent ? "visible" : "hidden"}
            >
              <motion.div >
                <span
                  className="text-black font-bold text-sm tracking-wider uppercase"
                >
                  Full Stack Developer
                </span>
              </motion.div>

              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-gray-800 mt-4 mb-6 leading-tight"
                                  style={{ fontFamily: '"Times New Roman", Times, serif' }}

                
              >
                Hello, my name is Pandu Kolli
              </motion.h2>

              <motion.p 
                className="text-black text-lg mb-8 leading-relaxed"
                                  style={{ fontFamily: '"Brush Script MT", cursive' }}

            
              >
                Creative developer with a passion for blending art and technology. 
                I specialize in building modern web applications with cutting-edge 
                technologies and bringing innovative ideas to life.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4 mb-8"
              
              >
                {/* Use Next.js Link for navigation */}
                <a href="/projects" tabIndex={-1} style={{ display: 'inline-block' }}>
                  <motion.button
                    className="bg-black text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-black transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Projects
                  </motion.button>
                </a>
                <a href="/skills" tabIndex={-1} style={{ display: 'inline-block' }}>
                  <motion.button
                    className="bg-black text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-black transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Skills
                  </motion.button>
                </a>
                
              </motion.div>

              {/* Skills & Info */}
              <motion.div 
                className="space-y-6"
                
              >
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    
                    <GraduationCap className="w-5 h-5 mr-2 text-black" />
                    Education
                  </h4>
                  <p
                    className="text-black"
                    style={{ fontFamily: '"Times New Roman", Times, serif' }}
                  >
                    B.Tech in Data science, Aditya University, 2022-2026
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <Palette className="w-5 h-5 mr-2 text-" />
                    Interests
                  </h4>
                  <div className="flex space-x-4">
                    <motion.div
                      className="w-12 h-12 bg-black rounded-full flex items-center justify-center cursor-pointer"
                      whileHover={{ scale: 1.2, backgroundColor: "black" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Music className="h-6 w-6 text-white" />
                    </motion.div>
                    <motion.div
                      className="w-12 h-12 bg-black rounded-full flex items-center justify-center cursor-pointer"
                      whileHover={{ scale: 1.2, backgroundColor: "black" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Film className="h-6 w-6 text-white" />
                    </motion.div>
                    <motion.div
                      className="w-12 h-12 bg-black rounded-full flex items-center justify-center cursor-pointer"
                      whileHover={{ scale: 1.2, backgroundColor: "black" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Code className="h-6 w-6 text-white" />
                    </motion.div>
                  </div>
                </div>

                <div>
                  <p className="text-black flex items-center"
                    style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                    <MapPin className="w-4 h-4 mr-2 text-black" />
                    Visakhapatnam, Andhra Pradesh, India
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Image Section */}
          <div className="lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-white to-black">
            <AnimatePresence>
              {isRevealed && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center p-8"
                  variants={photoVariants}
                  initial="initial"
                  animate="animate"
                >
                  <motion.div
                    className="relative w-80 h-80 lg:w-96 lg:h-96"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Decorative circles */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full opacity-70"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                      className="absolute -bottom-6 -left-6 w-16 h-16 bg-black rounded-full opacity-70"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Profile Image Container */}
                    
                    <motion.div
                      className="w-auto h-150 rounded-full overflow-hidden border-4 mb-20 border-white shadow-2xl bg-gray-200"
                      whileHover={{ borderColor: "black" }}
                      transition={{ duration: 0.3 }}
                    >
                     
                    
                      <img
                        src="/pandu.jpg"
                        alt="Pandu Kolli"
                        className="w-auto h-auto object-cover"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.style.display = 'none';
                          if (img.nextSibling && img.nextSibling instanceof HTMLElement) {
                            img.nextSibling.style.display = 'flex';
                          }
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center text-white text-6xl font-bold" style={{display: 'none'}}>
                        PK
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Floating elements */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full opacity-60"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-3/4 right-1/4 w-2 h-2 bg-white rounded-full opacity-60"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}