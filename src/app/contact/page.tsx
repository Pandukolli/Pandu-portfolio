"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  type FormErrors = {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  if (typeof window === "undefined") return; // Prevent execution on server

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      // For demonstration, we'll use mailto as fallback
      // In production, you'd send to your API endpoint
      const mailtoLink = `mailto:pandukolli666@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Open mailto link
      window.open(mailtoLink);

      setShowSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden border-2 rounded-xl ">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-black rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-violet-600/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/15 to-blue-600/15 rounded-full filter blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-0">
        <motion.div
          className="w-full max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <motion.div className="text-center mb-5">
            <motion.div
              className="inline-block mb-4"
              animate="animate"
            ></motion.div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold bg-black bg-clip-text text-transparent mb-4"
              style={{ fontFamily: "'Brush Script MT', cursive" }}
            >
              Get in Touch
            </motion.h1>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="bg-black backdrop-blur-2xl rounded-3xl p-8 md:p-10 border border-white shadow-2xl relative overflow-hidden">
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-3xl">
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-transparent bg-black  "
                style={{ padding: "2px" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full bg-black rounded-3xl" />
              </motion.div>
            </div>

            <div className="relative z-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Full Name
                    </label>
                    <motion.input
                      type="text"
                      placeholder="John Doe"
                      className={`w-full p-4 bg-white/5 border rounded-xl text-white placeholder-slate-400 focus:outline-none transition-all duration-300 ${
                        errors.name
                          ? "border-red-400 focus:ring-2 focus:ring-red-400/50"
                          : "border-white focus:border-white focus:ring-2 focus:ring-white"
                      }`}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      whileFocus={{ scale: 1.02 }}
                      required
                    />
                    {errors.name && (
                      <motion.p
                        className="text-red-400 text-sm mt-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email Address
                    </label>
                    <motion.input
                      type="email"
                      placeholder="john@example.com"
                      className={`w-full p-4 bg-white/5 border rounded-xl text-white placeholder-slate-400 focus:outline-none transition-all duration-300 ${
                        errors.email
                          ? "border-red-400 focus:ring-2 focus:ring-white"
                          : "border-white focus:border-white focus:ring-2 focus:ring-white"
                      }`}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      whileFocus={{ scale: 1.02 }}
                      required
                    />
                    {errors.email && (
                      <motion.p
                        className="text-red-400 text-sm mt-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </motion.div>
                </div>

                <motion.div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Subject
                  </label>
                  <motion.input
                    type="text"
                    placeholder="Project Inquiry"
                    className={`w-full p-4 bg-white/5 border rounded-xl text-white placeholder-slate-400 focus:outline-none transition-all duration-300 ${
                      errors.subject
                        ? "border-white focus:ring-2 focus:ring-white"
                        : "border-white focus:border-white focus:ring-2 focus:ring-white"
                    }`}
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                  {errors.subject && (
                    <motion.p
                      className="text-red-400 text-sm mt-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.subject}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <motion.textarea
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    className={`w-full p-4 bg-white/5 border rounded-xl text-white placeholder-slate-400 focus:outline-none resize-none transition-all duration-300 ${
                      errors.message
                        ? "border-white focus:ring-2"
                        : "border-white focus:border-white focus:ring-2 focus:ring-white"
                    }`}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                  {errors.message && (
                    <motion.p
                      className="text-red-400 text-sm mt-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div>
                  <motion.button
                    type="submit"
                    className="relative w-full bg-black hover:white text-white border-3 border-white  font-semibold py-4 px-8 rounded-xl overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    {/* Button Background Animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative flex items-center justify-center gap-3">
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-3"
                          >
                            <motion.div
                              className="w-6 h-6 border-2 border-white border-text-white rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            />
                            Sending Message...
                          </motion.div>
                        ) : (
                          <motion.div
                            key="send"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-3"
                          >
                            <motion.svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              whileHover={{ x: 5 }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                              />
                            </motion.svg>
                            Send Message
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="mt-12 text-center">
            <motion.p className="text-black mb-4">
              Prefer email? Reach out directly at
            </motion.p>
            <motion.a
              href="mailto:pandukolli666@gmail.com"
              className="inline-flex items-center gap-2 text-black hover:text-black transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              pandukolli666@gmail.com
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Success Message */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed top-8 right-8 bg-black text-white px-6 py-4 rounded-xl shadow-2xl z-50 flex items-center gap-3"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </motion.svg>
            <span className="font-medium">Message sent successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
