//src/app/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import {
  Monitor,
  Server,
  Paintbrush,
  Smartphone,
  FileText,
  Send,
  Building2,
  ArrowUpRight,
  Download,
  User,
  GraduationCap,
  Zap,
  Target,
  Coffee,
} from "lucide-react";
import { useRouter } from "next/navigation";

const BentoGrid = () => {
  const [] = useState<number | null>(null);
  const [] = useState(0);
  const [isContactAnimating, setIsContactAnimating] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [hoveredSkill] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsContactAnimating((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (typeof window === "undefined") return; // Prevent execution on server

  const skills = [
    {
      name: "Frontend",
      icon: Monitor,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-500/10",
    },
    {
      name: "Backend",
      icon: Server,
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-500/10",
    },
    {
      name: "Design",
      icon: Paintbrush,
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-500/10",
    },
    {
      name: "Mobile",
      icon: Smartphone,
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-500/10",
    },
  ];

  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2022-Present",
      description: "Leading development of scalable web applications",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      role: "Full Stack Developer",
      company: "InnovateLab",
      period: "2020-2022",
      description: "Built microservices architecture",
      skills: ["Vue.js", "Python", "Docker"],
    },
    {
      role: "Frontend Developer",
      company: "WebStudio",
      period: "2019-2020",
      description: "Developed responsive web interfaces",
      skills: ["HTML5", "CSS3", "JavaScript"],
    },
  ];

  const resumeData = {
    personal: {
      name: "John Smith",
      title: "Senior Full Stack Developer",
      email: "john.smith@email.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      website: "www.johnsmith.dev",
    },
    summary:
      "Passionate full-stack developer with 5+ years of experience building scalable web applications. Expertise in modern JavaScript frameworks, cloud technologies, and agile development practices.",
    experience: [
      {
        title: "Senior Full Stack Developer",
        company: "TechCorp Inc.",
        period: "2022 - Present",
        achievements: [
          "Led development of microservices architecture serving 1M+ users",
          "Improved application performance by 40% through optimization",
          "Mentored 3 junior developers and established coding standards",
        ],
      },
      {
        title: "Full Stack Developer",
        company: "InnovateLab",
        period: "2020 - 2022",
        achievements: [
          "Built RESTful APIs handling 10K+ requests per minute",
          "Implemented CI/CD pipelines reducing deployment time by 60%",
          "Collaborated with design team to create responsive web applications",
        ],
      },
    ],
    skills: {
      frontend: ["React", "Vue.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
      tools: ["Docker", "AWS", "Git", "Jenkins"],
    },
    education: {
      degree: "Bachelor of Computer Science",
      school: "University of Technology",
      year: "2019",
    },
  };

  const handleDownloadResume = () => {
    const resumeText = `
${resumeData.personal.name}
${resumeData.personal.title}
${resumeData.personal.email} | ${resumeData.personal.phone}

SUMMARY
${resumeData.summary}

EXPERIENCE
${resumeData.experience
  .map(
    (exp) => `
${exp.title} - ${exp.company} (${exp.period})
${exp.achievements.map((achievement) => `• ${achievement}`).join("\n")}
`
  )
  .join("\n")}

SKILLS
Frontend: ${resumeData.skills.frontend.join(", ")}
Backend: ${resumeData.skills.backend.join(", ")}
Tools: ${resumeData.skills.tools.join(", ")}

EDUCATION
${resumeData.education.degree}
${resumeData.education.school} (${resumeData.education.year})
    `;

    const blob = new Blob([resumeText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "John_Smith_Resume.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handlecontactClick = () => {
    window.open("/contact", "_blank");
  };

  const handleCertificationClick = () => {
    window.open("/certifications", "_blank");
  };

  const ResumeViewer = () => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-3xl">
          <h2 className="text-2xl font-bold text-gray-900">Resume Preview</h2>
          <div className="flex gap-2">
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-4 py-2 bg-white text-black border-2 border-gray-300 rounded-lg hover:bg-white hover:border-black transition-colors"
            >
              <Download className="w-3 h-3" />
              Download
            </button>
            <button
              onClick={() => setShowResume(false)}
              className="w-8 h-8 flex items-center justify-center bg-gray-900 hover:bg-gray-900 rounded-lg transition-colors"
            >
              ×
            </button>
          </div>
        </div>

        <div className="p-8 text-gray-900">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              {resumeData.personal.name}
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              {resumeData.personal.title}
            </p>
            <div className="flex justify-center gap-4 text-sm text-gray-500">
              <span>{resumeData.personal.email}</span>
              <span>•</span>
              <span>{resumeData.personal.phone}</span>
              <span>•</span>
              <span>{resumeData.personal.location}</span>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3 text-gray-900">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {resumeData.summary}
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Experience</h2>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{exp.title}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 text-sm">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Frontend</h3>
                <p className="text-gray-700 text-sm">
                  {resumeData.skills.frontend.join(", ")}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Backend</h3>
                <p className="text-gray-700 text-sm">
                  {resumeData.skills.backend.join(", ")}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tools & Technologies</h3>
                <p className="text-gray-700 text-sm">
                  {resumeData.skills.tools.join(", ")}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-3 text-gray-900">Education</h2>
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold">{resumeData.education.degree}</h3>
                <p className="text-gray-600">{resumeData.education.school}</p>
              </div>
              <span className="text-gray-500">{resumeData.education.year}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white gradient-to-br from-white via-black to-white rounded-xl p-4 md:p-6 h-170">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-screen">
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white backdrop-blur-sm rounded-3xl p-6 border border-black hover:black transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 h-100">
              <div className="flex items-center gap-4 mb-6">
                <Zap className="w-6 h-6 text-black" />
                <h3 className="text-black text-xl font-bold">Skills</h3>
              </div>
              <div className="grid grid-cols-1 gap-8">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={index}>
                      <div
                        className={`absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg ${skill.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-5 h-5 text-black" />
                        </div>
                        <div>
                          <p className="text-black font-medium">{skill.name}</p>
                          <div className="w-full bg-black rounded-full h-1 mt-1">
                            <div
                              className={`bg-gradient-to-r ${
                                skill.color
                              } h-1 rounded-full transition-all duration-500 ${
                                hoveredSkill === index ? "w-full" : "w-3/4"
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="absolute top-3 right-3 w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-white backdrop-blur-sm rounded-3xl p-6 border border-black hover:black transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 flex-1">
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-black text-xl font-bold mb-2">Resume</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => router.push("/resume")}
                    className="bg-black text-white px-4 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2 hover:scale-105"
                  >
                    <User className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/pandu resume 1.pdf";
                      link.download = "pandu resume 1.pdf";
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="bg-black backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white backdrop-blur-sm rounded-3xl p-6 border border-black hover:black transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 h-full">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full p-0 hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center overflow-hidden justify-center text-white text-2xl font-bold">
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
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"></div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-black text-6xl font-bold mb-10 mt-5 bg-black bg-clip-text">
                    Pandu
                  </h1>
                  <p
                    className="text-black text-xl mb-4 font-medium"
                    style={{ fontFamily: '"Times New Roman", Times, serif' }}
                  >
                    Full Stack Developer
                  </p>
                  <p
                    className="text-black leading-relaxed mb-4"
                    style={{ fontFamily: '"Brush Script MT", cursive' }}
                  >
                    Passionate developer with 5+ years of experience building
                    scalable web applications. Specialized in React, Node.js,
                    and cloud technologies. Passionate developer with 5+ years
                    of experience building scalable web applications.
                    Specialized in React, Node.js, and cloud technologies
                  </p>
                </div>
              </div>
            </div>
            <div
              onClick={handlecontactClick}
              className="bg-white backdrop-blur-sm rounded-3xl p-6 border border-black hover:black transition-all duration-500 cursor-pointer group hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="flex items-center justify-center h-full">
                <div
                  className={`relative ${
                    isContactAnimating ? "animate-pulse" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-black rounded-full animate-ping opacity-75" />
                  <div className="relative w-16 h-16 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/30">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-black text-2xl font-bold mb-1">
                    Get In Touch
                  </h3>
                  <p className="text-black">
                    Let's build something amazing together
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Coffee className="w-4 h-4 text-black" />
                    <span className="text-sm text-black">
                      Available for projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white backdrop-blur-sm rounded-3xl p-6 border border-black hover:black transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10">
              <div className="flex items-center gap-2 mb-6">
                <Building2 className="w-6 h-6 text-black" />
                <h3 className="text-black text-xl font-bold">Experience</h3>
              </div>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index}>
                    <div className="bg-black rounded-xl p-4 group-hover:bg-gray-700/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <p className="text-white font-semibold text-sm mb-1">
                            {exp.role}
                          </p>
                        </div>
                        <div className="flex flex-col items-end"></div>
                      </div>
                      <ArrowUpRight className="absolute top-3 right-3 w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white backdrop-blur-sm rounded-3xl p-6 border border-black hover:border-black transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 flex-1 h-50">
              <div className="relative h-32 flex items-center justify-center ml-4">
                <div className="rounded-xl p-4 w-full text-center transform transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-10 hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <button
                onClick={handleCertificationClick}
                className="w-full -mt-6 bg-black text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
              >
                <Target className="w-4 h-4" />
                Achievements
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {showResume && <ResumeViewer />}
    </div>
  );
};

export default BentoGrid;
