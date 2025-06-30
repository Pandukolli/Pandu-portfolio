"use client";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ShoppingCart,
  GraduationCap,
  BookOpen,
  Code,
  Database,
  Globe,
} from "lucide-react";

const projects = [
  {
    name: "Cara - E-Commerce Website",
    category: "Full-Stack Web Application",
    image: "/placeholder.jpg",
    description: "A fully responsive clothing e-commerce platform .",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    features: [
      "User registration and authentication",
      "Dynamic product filtering and search",
      "Shopping cart and checkout system",
      "Secure payment simulation",
    ],
    highlights: ["300+ Products", "Payments"],
    link: "https://github.com/Pandukolli/e-commerce",
    icon: ShoppingCart,
    color: "from-blue-600 to-blue-800",
  },
  {
    name: "Learning Management System",
    category: "Educational Platform",
    image: "/placeholder.jpg",
    description: "A comprehensive full-stack LMS platform .",
    tech: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    features: [
      "Real-time progress tracking",
      "User dashboard and analytics",
      "Course content management",
      "Interactive learning modules",
    ],
    highlights: ["200+ Users", "300+ Modules", "Real-time Tracking"],
    link: "https://github.com/Pandukolli/LMS-frontend-aditya",
    icon: GraduationCap,
    color: "from-green-600 to-green-800",
  },
  {
    name: "Library Management System",
    category: "Administrative Platform",
    image: "/placeholder.jpg",
    description: "A comprehensive web-based library management .",
    tech: ["Django", "Python", "HTML", "CSS", "Bootstrap"],
    features: [
      "Complete website of movies and dramas",
      "User registration and profiles",
      "Role-based access control",
      "Full CRUD operations",
    ],
    highlights: ["CRUD Operations", "Role-based Access", "Book Tracking"],
    link: "https://github.com/Pandukolli/movie-website",
    icon: BookOpen,
    color: "from-gray-600 to-gray-800",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const iconVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.4 },
  },
};

export default function Projects() {
  if (typeof window === "undefined") return; // Prevent execution on server

  return (
    <div className="min-h-screen bg-white border-2 rounded-xl py-3 px-2">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-black">My Projects</span>
          </motion.h1>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="flex flex-row gap-4 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.name}
                whileHover={{
                  y: -8,
                  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 },
                }}
                className="group flex-1 min-w-0"
              >
                <div className="bg-white rounded-xl overflow-hidden border border-black shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Project Header Section */}
                  <div
                    className={`relative h-29 bg-black flex items-center justify-center`}
                  >
                    <motion.div
                      variants={iconVariants}
                      whileHover="hover"
                      className="relative z-10"
                    >
                      <IconComponent size={48} className="text-white" />
                    </motion.div>
                    <div className="absolute inset-0 bg-black" />
                    <div className="absolute top-3 right-3">
                      <span className="bg-white text-black text-xs px-2 py-1 rounded-full font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="mb-3">
                      <h3 className="text-xl font-semibold text-black group-hover:text-black transition-colors">
                        {project.name}
                      </h3>
                      <p
                        className="text-black text-sm leading-relaxed mt-1"
                        style={{ fontFamily: '"Brush Script MT", "Cursive"' }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="bg-black text-white text-xs px-2 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-black flex items-center gap-1.5">
                        <Code size={14} className="text-black" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-black text-white text-xs px-2 py-0.5 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4 flex-grow">
                      <h4 className="text-sm font-medium text-black flex items-center gap-1.5">
                        <Database size={14} className="text-black" />
                        Core Features
                      </h4>
                      <ul className="text-black text-sm mt-1.5 space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-black mt-0.5">•</span>
                            {feature}
                          </li>
                        ))}
                        {project.features.length > 3 && (
                          <li className="text-balck text-xs">
                            +{project.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <motion.button
                      onClick={() => window.open(project.link, "_blank")}
                      className="w-full bg-white hover:bg-white text-black border-3 border-black font-medium py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Globe size={16} className="text-white" />
                      Explore Project
                      <ExternalLink
                        size={14}
                        className="group-hover/btn:translate-x-0.5 transition-transform"
                      />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
      </div>
    </div>
  );
}
