'use client';
import { motion } from 'framer-motion';
import { X, Download, Award, } from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';

const certifications = [
  {
    id: 1,
    title: 'React Developer',
    issuer: 'Coursera',
    date: '2023',
    description: 'Comprehensive course covering React fundamentals, hooks, state management, and modern development practices.',
    skills: ['React', 'JavaScript', 'Redux', 'JSX'],
    certificateUrl: '/pandu-bigdataanalysis.pdf',
  },
  {
    id: 2,
    title: 'Machine Learning',
    issuer: 'Stanford Online',
    date: '2024',
    description: 'Advanced machine learning concepts including supervised learning, neural networks, and deep learning algorithms.',
    skills: ['Python', 'TensorFlow', 'Scikit-learn', 'Data Analysis'],
    certificateUrl: '/pandu-bigdataanalysis.pdf',
  },
  {
    id: 3,
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
    description: 'Cloud computing fundamentals, AWS services, security, and best practices for cloud architecture.',
    skills: ['AWS', 'Cloud Computing', 'DevOps', 'Security'],
    certificateUrl: '/pandu-bigdataanalysis.pdf',
  },
  {
    id: 4,
    title: 'Full Stack Development',
    issuer: 'FreeCodeCamp',
    date: '2023',
    description: 'Complete full-stack development curriculum covering frontend, backend, and database technologies.',
    skills: ['Node.js', 'MongoDB', 'Express', 'React'],
    certificateUrl: '/pandu-bigdataanalysis.pdf',
  },
];

export default function CertificateViewer() {
  const router = useRouter();
  const params = useParams();
  const certId = parseInt(params.id as string);
  const selectedCert = certifications.find(cert => cert.id === certId);

  const handleDownload = () => {
    if (selectedCert) {
      const link = document.createElement('a');
      link.href = selectedCert.certificateUrl;
      link.download = `${selectedCert.title.replace(/\s+/g, '_')}_Certificate.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

    function setShowCertificate() {
        router.push('/certifications');
    }

  return (
    <div className="min-h-screen bg-black p-4">
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => router.push('/certifications')}
            className="absolute top-4 right-4 text-black hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          {/* Modal Content */}
          {selectedCert ? (
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              
              <div className="space-y-4 text-left">
               
                
               
                
              </div>
              {/* Certificate Preview */}
              <div className="mt-8 p-8 bg-gray-50 rounded-xl border border-white/20">
                <iframe
                  src={selectedCert.certificateUrl}
                  className="w-full h-96 rounded-lg"
                  title={selectedCert.title}
                />
              </div>
              {/* Modal Actions */}
              <div className="flex gap-4 mt-8 justify-center">
                <motion.button
                  onClick={handleDownload}
                  className="flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-xl font-medium transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <Download className="w-5 h-5" />
                  Download Certificate
                </motion.button>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center text-white">
                <Award className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Certificate not found</p>
              </div>
              <button
                onClick={() => setShowCertificate()}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-black" />
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}