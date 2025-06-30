//src/components/ProfileCard.tsx
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Globe,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Rocket,
  Monitor,
  Presentation,
  Hospital,
  BookOpen,
  ShoppingCart,
} from "lucide-react";

export default function ProfileCard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/pandukolli",
      label: "GitHub",
      color: "hover:text-purple-400",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/feed/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/pandukolli",
      label: "Twitter",
      color: "hover:text-cyan-400",
    },
    {
      icon: Globe,
      href: "https://pandukolli.dev",
      label: "Portfolio",
      color: "hover:text-green-400",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      icon: <ShoppingCart className="w-6 h-6" />,
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://github.com/Pandukolli/coreblock",
      gradient: "from-primary to-accent",
    },
    {
      id: 2,
      title: "movie  website",
      description:
        "Real-time chat application powered by AI with natural language processing capabilities and smart responses.",
      image: "/api/placeholder/300/200",
      icon: <Monitor className="w-6 h-6" />,
      tech: ["React", "Python", "TensorFlow", "WebSocket"],
      link: "https://github.com/Pandukolli/movie-website",
      gradient: "from-primary to-accent",
    },
    {
      id: 3,
      title: "educ courses frontend",
      description:
        "Collaborative project management tool with real-time updates, team collaboration features, and progress tracking.",
      icon: <BookOpen className="w-6 h-6" />,
      tech: ["Vue.js", "Express", "PostgreSQL"],
      link: "https://github.com/Pandukolli/LMS-frontend-aditya",
      gradient: "from-primary to-accent",
    },
    {
      id: 4,
      title: "My Modern Artful Portfolio",
      description: "An interactive portfolio with my all the details.",
      image: "/api/placeholder/300/200",
      icon: <Presentation className="w-6 h-6" />,
      tech: ["React", "css", "tailwind"],
      link: "https://github.com/Pandukolli/portfolio-Pandu",
      gradient: "from-primary to-accent",
    },
    {
      id: 5,
      title: "Doctor appointment ",
      description:
        "This website is used to make booking appointments with doctors.",
      image: "/api/placeholder/300/200",
      icon: <Hospital className="w-6 h-6" />,
      tech: ["React", "css", "typescript", "Expo"],
      link: "https://github.com/Pandukolli/coreblock",
      gradient: "from-primary to-accent",
    },
    {
      id: 6,
      title: "movie overview System",
      description:
        "Secure voting platform built on blockchain technology ensuring transparency and immutability of votes.",
      image: "/api/placeholder/300/200",
      icon: <Rocket className="w-6 h-6" />,
      tech: [, "Web3.js", "React", "Ethereum"],
      link: "https://github.com/Pandukolli/movie-overview",
      gradient: "from-primary to-accent",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(projects.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(projects.length / 3)) %
        Math.ceil(projects.length / 3)
    );
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  if (typeof window === "undefined") return; // Prevent execution on server

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const glowVariants = {
    initial: { boxShadow: "0 0 20px var(--ring)" },
    animate: {
      boxShadow: [
        "0 0 20px var(--ring)",
        "0 0 30px var(--ring)",
        "0 0 20px var(--ring)",
      ],
      transition: { duration: 3, repeat: Infinity },
    },
  };

  return (
    <motion.div
      className="relative max-w-4xl mx-auto bg-white backdrop-blur-2xl rounded-xl p-6 m-4 md:ml-20 md:mr-4 w-full md:w-[32rem] flex-shrink-0 border border-border shadow-2xl overflow-hidden min-h-[600px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/10 via-accent/10 to-muted/10 animate-pulse rounded-full"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-primary/10 via-accent/10 to-muted/10 animate-pulse rounded-full"></div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-foreground/20 rounded-full"
            initial={{
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 mb-10 ">
          {/* Profile Picture */}
          <motion.div
            className="relative group mt-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            variants={glowVariants}
            initial="initial"
            animate="animate"
          >
            <div className="w-48 h-75 bg-gradient-to-br from-primary to-accent rounded-lg p-1 mt-0">
              <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center text-foreground text-4xl font-bold relative overflow-hidden ">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/30 to-muted/30"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <span className="relative z-10 bg-gradient-to-r from-primary-foreground to-accent-foreground bg-clip-text text-transparent">
                  <img
                    src="/pandu.jpg"
                    alt="Pandu Kolli"
                    className="w-auto h-auto object-cover"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.style.display = "none";
                      if (
                        img.nextSibling &&
                        img.nextSibling instanceof HTMLElement
                      ) {
                        img.nextSibling.style.display = "flex";
                      }
                    }}
                  />
                </span>
              </div>
            </div>
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
            </motion.div>
          </motion.div>

          {/* Profile Info */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              className="text-4xl font-bold bg-black bg-clip-text text-transparent mb-3"
              variants={itemVariants}
            >
              Pandu Kolli
            </motion.h1>

            <motion.h2
              className="text-lg text-black mb-4 font-semibold"
              variants={itemVariants}
            >
              Full-Stack Developer
            </motion.h2>

            <motion.p
              className="text-black text-sm leading-relaxed mb-6 w-68"
              style={{ fontFamily: '"Brush Script MT", cursive' }}
              variants={itemVariants}
            >
              Computer Science student passionate about creating innovative
              digital solutions. Specializing in modern web technologies, AI
              integration, and scalable applications. Computer Science student
              passionate about creating innovative digital solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 mb-6 mr-50"
              variants={itemVariants}
            >
              <motion.button
                onClick={()=>(window.location.href = "projects")}
                type="button"
              
                
                className="bg-black text-white py-3 px-6 rounded-lg font-medium text-sm flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px var(--ring)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Briefcase className="w-3 h-3" />
                <span>view</span>
              </motion.button>
              <motion.a
                href="./contact"
                className="bg-white text-black py-3 px-6 rounded-lg font-medium border-2 border-gray-300  hover:border-black hover:text-black text-sm flex items-center  justify-center space-x-2"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px var(--ring)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                <span>ContactMe</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start space-x-6"
              variants={itemVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-black rounded-full flex items-center justify-center transition-all duration-300 ${social.color}`}
                  whileHover={{
                    scale: 1.2,
                    boxShadow: "0 0 10px var(--ring)",
                    y: -5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Netflix-style Projects Carousel */}
        <motion.div
          className="space-y-2"
          variants={itemVariants}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center justify-between ">
            <h3 className="text-2xl font-bold text-black">Featured Projects</h3>
            <div className="flex space-x-2">
              <motion.button
                onClick={prevSlide}
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center border border-border"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </motion.button>
              <motion.button
                onClick={nextSlide}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-black"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5 text-black" />
              </motion.button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-4"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {projects
                .reduce<Array<typeof projects>>((chunks, project, index) => {
                  const chunkIndex = Math.floor(index / 3);
                  if (!chunks[chunkIndex]) {
                    chunks[chunkIndex] = [];
                  }
                  chunks[chunkIndex].push(project);
                  return chunks;
                }, [])
                .map((chunk, chunkIndex) => (
                  <div key={chunkIndex} className="flex space-x-4 min-w-full">
                    {chunk.map((project) => (
                      <motion.div
                        key={project.id}
                        className="flex-1 min-w-0 group cursor-pointer"
                      >
                        <div
                          className={`relative h-64 bg-gradient-to-br ${project.gradient} rounded-lg overflow-hidden border border-border shadow-xl`}
                        >
                          <div className="absolute inset-0 bg-black group-hover:bg-black transition-all duration-300" />

                          {/* Project Icon */}
                          <div className="absolute top-3 left-3 w-10 h-10 bg-black backdrop-blur-sm rounded-lg flex items-center justify-center">
                            {project.icon}
                          </div>

                          {/* External Link */}
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-3 right-3 w-8 h-8 bg-accent/30 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "var(--accent)",
                            }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ExternalLink className="w-4 h-4 text-white" />
                          </motion.a>

                          {/* Content */}
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <h4 className="text-base font-bold text-foreground mb-1">
                              {project.title}
                            </h4>
                            <p className="text-muted-foreground text-xs mb-3 line-clamp-3">
                              {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-1.5">
                              {project.tech.map((tech, index) => (
                                <span
                                  key={index}
                                  className="px-1.5 py-0.5 bg-accent/30 backdrop-blur-sm rounded-md text-xs font-medium text-accent-foreground"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ))}
            </motion.div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {Array.from({ length: Math.ceil(projects.length / 3) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-primary w-6"
                      : "bg-muted hover:bg-accent"
                  }`}
                />
              )
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
