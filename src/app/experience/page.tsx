// File: client/src/app/experience/page.tsx
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import {  Brain, Calendar, MapPin, Download, Eye, X } from 'lucide-react';
import {  useState } from 'react';

const experiences = [
  {
    title: 'Machine Learning Intern',
    company: 'SkillDzire',
    duration: 'Feb 2025 – May 2025',
    location: 'Remote',
    icon: Brain,
    type: 'Internship',
    details: [
      'Developed and implemented machine learning models for real-world datasets, improving prediction accuracy and system efficiency',
      'Collaborated with cross-functional teams to preprocess data, select relevant features, and evaluate models using industry-standard metrics',
      'Optimized model performance through hyperparameter tuning and contributed to deploying models in a production environment'
    ],
    skills: ['Python', 'TensorFlow', 'Scikit-learn', 'Data Preprocessing', 'Model Deployment'],
    certificate: './pandu skilldzire.pdf', // Replace with actual path
  },
 
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const [showCertificate, setShowCertificate] = useState(false);
  const [currentCertificate, setCurrentCertificate] = useState<string | null>(null);

  const handleViewCertificate = (certificatePath: string) => {
    setCurrentCertificate(certificatePath);
    setShowCertificate(true);
  };

  const handleDownloadCertificate = (certificatePath: string, companyName: string) => {
    // Create a temporary link element for download
    const link = document.createElement('a');
    link.href = certificatePath;
    link.download = `${companyName}-certificate.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br to-black p-4">
      <div className="max-w-4xl mx-auto pt-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold bg-white bg-clip-text text-transparent mb-4">
            Professional Experience
          </h1>
         
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className={`relative overflow-hidden rounded-2xl backdrop-blur-lg border transition-all duration-300 cursor-pointer ${
                activeTab === index
                  ? 'bg-white border-blackshadow-2xl shadow-purple-500/20'
                  : 'bg-white border-black hover:bg-white/15'
              }`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              onClick={() => setActiveTab(activeTab === index ? -1 : index)}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Header */}
              <div className="relative p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl transition-colors duration-300 ${
                      activeTab === index ? 'bg-black' : 'bg-white/10'
                    }`}>
                      <exp.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-1">{exp.title}</h3>
                      <div className="flex items-center space-x-4 text-white">
                        <span className="font-semibold text-black">{exp.company}</span>
                        <span className="px-2 py-1 bg-black rounded-full text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-black">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Certificate Buttons */}
                  {exp.certificate && (
                    <div className="flex space-x-2">
                      <motion.button
                        className="flex items-center space-x-2 px-4 py-2 bg-black hover:black border border-white rounded-lg text-white transition-all duration-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewCertificate(exp.certificate);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Eye className="h-4 w-4" />
                        <span className="text-sm font-medium">View</span>
                      </motion.button>
                      
                      <motion.button
                        className="flex items-center space-x-2 px-4 py-2 bg-white hover:bg-white border-2 border-black rounded-lg text-black transition-all duration-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownloadCertificate(exp.certificate, exp.company);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Download className="h-4 w-4" />
                        <span className="text-sm font-medium">Download</span>
                      </motion.button>
                    </div>
                  )}
                </div>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {activeTab === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 space-y-6">
                      {/* Details */}
                      <div>
                        <h4 className="text-lg font-semibold text-black mb-3">Key Responsibilities</h4>
                        <ul className="space-y-3">
                          {exp.details.map((detail, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start space-x-3 text-black"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-lg font-semibold text-black mb-3">Technologies & Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <motion.span
                              key={skill}
                              className="px-3 py-1 bg-black border border-purple-400/30 rounded-full text-sm text-white font-medium"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.05 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {showCertificate && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowCertificate(false)}
          >
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">Certificate Preview</h3>
                <button
                  onClick={() => setShowCertificate(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-5 w-5 text-black" />
                </button>
              </div>
              
              {/* Certificate Content */}
              <div className="p-6 h-[calc(90vh-120px)] overflow-auto">
                <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg">
                  {currentCertificate ? (
                    <iframe
                      src={currentCertificate}
                      className="w-full h-full rounded-lg"
                      title="Certificate"
                    />
                  ) : (
                    <div className="text-center text-gray-500">
                      <p className="text-lg">Certificate preview will appear here</p>
                      <p className="text-sm mt-2">Please upload your certificate to the public folder</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}