"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Download, X, Award, Calendar, Building } from "lucide-react";
import Slider from "react-slick";
import { useRouter } from "next/navigation";

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  {
    id: 1,
    title: "React Developer",
    issuer: "Coursera",
    date: "2023",
    description:
      "Comprehensive course covering React fundamentals, hooks, state management, and modern development practices.",
    skills: ["React", "JavaScript", "Redux", "JSX"],
    certificateUrl: "/pandu-bigdataanalysis.pdf",
    image: "/api/placeholder/400/300",
  },
  {
    id: 2,
    title: "Machine Learning",
    issuer: "Stanford Online",
    date: "2024",
    description:
      "Advanced machine learning concepts including supervised learning, neural networks, and deep learning algorithms.",
    skills: ["Python", "TensorFlow", "Scikit-learn", "Data Analysis"],
    certificateUrl: "/pandu-bigdataanalysis.pdf",
    image: "/api/placeholder/400/300",
  },
  {
    id: 3,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    description:
      "Cloud computing fundamentals, AWS services, security, and best practices for cloud architecture.",
    skills: ["AWS", "Cloud Computing", "DevOps", "Security"],
    certificateUrl: "/pandu-bigdataanalysis.pdf",
    image: "/api/placeholder/400/300",
  },
  {
    id: 4,
    title: "Full Stack Development",
    issuer: "FreeCodeCamp",
    date: "2023",
    description:
      "Complete full-stack development curriculum covering frontend, backend, and database technologies.",
    skills: ["Node.js", "MongoDB", "Express", "React"],
    certificateUrl: "/pandu-bigdataanalysis.pdf",
    image: "/api/placeholder/400/300",
  },
];

export default function Certifications() {
  interface Certification {
    id: number;
    title: string;
    issuer: string;
    date: string;
    description: string;
    skills: string[];
    certificateUrl: string;
    image: string;
  }

  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [downloadingId, setDownloadingId] = useState<number | null>(null);
  const router = useRouter();

  const handleView = (cert: Certification) => {
    router.push(`/certifications/${cert.id}`);
  };

  interface HandleDownloadCert {
    id: number;
    title: string;
    certificateUrl: string;
  }

  const handleDownload = async (cert: HandleDownloadCert): Promise<void> => {
    if (typeof window === "undefined") return; // Prevent execution on server
    setDownloadingId(cert.id);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = cert.certificateUrl;
      link.download = `${cert.title.replace(/\s+/g, "_")}_Certificate.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadingId(null);
    }, 1500);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-black p-4 w-210 border-3  border-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 pt-8"
        >
          <h1 className="text-5xl font-bold text-white mb-4 -ml-10 bg-gradient-to-r mt-10 from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Certifications
          </h1>
        </motion.div>

        {/* Certifications Slider */}
        <Slider {...sliderSettings} className="relative">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="group px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="bg-white backdrop-blur-lg rounded-2xl p-20 border-3 mt-10 border-black shadow-2xl h-full w-100 ml-50">
                {/* Certificate Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-black rounded-full mb-6 mx-auto">
                  <Award className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-black mb-2">
                    {cert.title}
                  </h3>

                  {/* Skills Tags */}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    onClick={() => handleView(cert)}
                    className="flex-1 flex items-center justify-center gap-2 bg-black hover:black text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </motion.button>
                  <motion.button
                    onClick={() => handleDownload(cert)}
                    disabled={downloadingId === cert.id}
                    className="flex-1 flex items-center justify-center gap-2 bg-white hover:white hover:to-emerald-600 text-black border-3 border-black py-3 px-4 rounded-xl font-medium transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: downloadingId === cert.id ? 1 : 1.02 }}
                    whileTap={{ scale: downloadingId === cert.id ? 1 : 0.98 }}
                  >
                    {downloadingId === cert.id ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Download className="w-4 h-4" />
                    )}
                    {downloadingId === cert.id ? "Downloading..." : "Download"}
                  </motion.button>
                </div>
              </div>
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
            </motion.div>
          ))}
        </Slider>

        {/* Modal for Certificate Preview */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white backdrop-blur-lg rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-black hover:text-black transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                {/* Modal Content */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-black mb-4">
                    {selectedCert.title}
                  </h2>
                  <div className="space-y-4 text-left">
                    <div className="flex items-center text-black">
                      <Building className="w-5 h-5 mr-3 text-black" />
                      <span>
                        <strong>Issued by:</strong> {selectedCert.issuer}
                      </span>
                    </div>
                    <div className="flex items-center text-black">
                      <Calendar className="w-5 h-5 mr-3 text-black" />
                      <span>
                        <strong>Date:</strong> {selectedCert.date}
                      </span>
                    </div>
                    <div className="text-black">
                      <strong className="text-black">Description:</strong>
                      <p className="mt-2 leading-relaxed">
                        {selectedCert.description}
                      </p>
                    </div>
                    <div className="text-black">
                      <strong className="text-black">Skills Covered:</strong>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedCert.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-black rounded-full text-white border border-white/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Certificate Preview Placeholder */}
                  <div className="mt-8 p-8 bg-black rounded-xl border border-white/20">
                    <div className="text-white text-center">
                      <Award className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Certificate preview would appear here</p>
                      <p className="text-sm mt-2">
                        Click download to get the full certificate
                      </p>
                    </div>
                  </div>
                  {/* Modal Actions */}
                  <div className="flex gap-4 mt-8 w-80 ml-30">
                    <motion.button
                      onClick={() => handleDownload(selectedCert)}
                      disabled={downloadingId === selectedCert.id}
                      className="flex-1 flex items-center justify-center gap-2 bg-black hover:black text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 disabled:opacity-50"
                      whileHover={{
                        scale: downloadingId === selectedCert.id ? 1 : 1.02,
                      }}
                    >
                      {downloadingId === selectedCert.id ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Download className="w-5 h-5" />
                      )}
                      {downloadingId === selectedCert.id
                        ? "Downloading..."
                        : "Download Certificate"}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
