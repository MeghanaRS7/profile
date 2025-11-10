"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  longDescription?: string;
}

const projects: Project[] = [
  {
    title: "Purrductivity",
    description: "A playful focus timer with animated cats, lo-fi moods, and a tiny 'Whack-a-Rat' break game.",
    stack: ["JavaScript", "HTML", "CSS", "Lottie", "Web Audio API"],
    githubUrl: "https://github.com/MeghanaRS7/purrductivity",
    longDescription: "A cat-themed productivity app featuring quick presets (20m, 40m, 60m), animated cats that rotate every minute, mood music cycling, an evasive pause button that dodges your cursor, and a 30-second Whack-a-Rat mini-game. Built with vanilla HTML/CSS/JS, Lottie for animations, and Web Audio API for sound.",
  },
  {
    title: "Social Media Branding Agent",
    description: "AI-powered system that generates and uploads media-rich content for Twitter, Instagram, YouTube, and TikTok.",
    stack: ["Python", "FastAPI", "Vertex AI", "GCS", "Docker"],
    githubUrl: "https://github.com/meghanars7",
    longDescription: "Built an AI-powered system that generates and uploads media-rich content for Twitter, Instagram, YouTube, and TikTok. Automated generation of text, image, video, and audio content using Gemini, Imagen, Veo, and TTS; orchestrated with FastAPI backend and GCS storage.",
  },
  {
    title: "Smart Grocery Grading App",
    description: "iOS app for real-time grocery quality grading based on camera input, designed for offline use in marketplaces.",
    stack: ["TensorFlow Lite", "OpenCV", "Swift"],
    longDescription: "Designed an iOS app for real-time grocery quality grading based on camera input, aimed at offline use in marketplaces. Deployed lightweight ML models with TensorFlow Lite for on-device inference and OpenCV for image preprocessing and detection.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Building innovative solutions with modern technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 cursor-pointer group"
              onClick={() => setSelectedProject(index)}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span className="text-sm">Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                    <span className="text-sm">Live</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {projects[selectedProject].title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-2xl"
                  >
                    ×
                  </button>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {projects[selectedProject].longDescription || projects[selectedProject].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[selectedProject].stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  {projects[selectedProject].githubUrl && (
                    <a
                      href={projects[selectedProject].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                  )}
                  {projects[selectedProject].liveUrl && (
                    <a
                      href={projects[selectedProject].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                      <span>Visit Site</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
