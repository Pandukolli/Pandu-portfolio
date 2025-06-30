'use client';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Globe, 
  Palette, 
  Database, 
  FileText, 
  Server, 
  Layers, 
  
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', icon: Code2 },
      { name: 'Python', icon: FileText },
      { name: 'HTML', icon: Globe },
      { name: 'CSS', icon: Palette },
      { name: 'SQL', icon: Database },
    ]
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'Next.js', icon: Server },
      { name: 'React.js', icon: Layers },
      { name: 'Node.js', icon: Server },
      { name: 'Express.js', icon: Code2 },
      { name: 'TailwindCSS', icon: Palette },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: Database },
      { name: 'MySQL', icon: Database },
    ]
  },
 
 
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};



export default function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-white p-6 rounded-xl ">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold bg-black bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h1>
          
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              
              className="relative"
            >
              {/* Category Title */}
              <motion.h2 
                className="text-2xl font-semibold text-black mb-4 text-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: categoryIndex * 0.1 + 0.2 }}
              >
                {category.title}
              </motion.h2>

              {/* Skills Cards */}
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5"
                variants={containerVariants}
              >
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                    
                      whileHover={{ 
                        scale: 1.1,
                        rotateY: 10,
                        boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative"
                    >
                      <div className="bg-black backdrop-blur-md border-3 border-white rounded-xl p-6 text-center transition-all duration-300 hover:bg-white hover:border-black">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                        
                        {/* Icon */}
                        <motion.div
                          className="relative z-10 mb-3"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                          <IconComponent 
                            size={40} 
                            className="mx-auto text-white group-hover:text-black transition-colors duration-300" 
                          />
                        </motion.div>
                        
                        {/* Skill Name */}
                        <h3 className="relative z-10 text-sm font-medium text-white group-hover:text-black transition-colors duration-300">
                          {skill.name}
                        </h3>

                        {/* Animated Border */}
                        <motion.div
                          className="absolute inset-0 rounded-xl border-2 border-black opacity-0 group-hover:opacity-100"
                          initial={false}
                          animate={{ 
                            borderColor: [
                              "rgba(168, 85, 247, 0.5)",
                              "rgba(59, 130, 246, 0.5)",
                              "rgba(236, 72, 153, 0.5)",
                              "rgba(168, 85, 247, 0.5)"
                            ]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating Particles */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}