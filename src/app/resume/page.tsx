'use client';
import { motion } from 'framer-motion';
import { X, Download } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ResumeViewer() {
  const router = useRouter();

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/pandu resume 1.pdf';
    link.download = 'pandu resume 1.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-black to-white p-4">
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
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
            <h3 className="text-xl font-semibold text-gray-900">Resume Preview</h3>
            <div className="flex gap-2">
              <button
                onClick={handleDownloadResume}
                className="flex items-center gap-2 px-4 py-2 bg-white text-black border-2 border-gray-300 rounded-lg hover:bg-gray-100 hover:border-black transition-colors"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
              <button
                onClick={() => router.push('/')}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
          
          {/* Resume Content */}
          <div className="p-6 h-[calc(90vh-120px)] overflow-auto">
            <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg">
              <iframe
                src="/pandu resume 1.pdf"
                className="w-full h-full rounded-lg"
                title="Resume"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}