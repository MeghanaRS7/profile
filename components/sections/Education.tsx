"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

interface Education {
  institution: string;
  location: string;
  degree: string;
  gpa: string;
  timeframe: string;
  description: string;
  logo?: string;
  linkedinUrl?: string;
}

const education: Education[] = [
  {
    institution: "Santa Clara University",
    location: "Santa Clara, CA",
    degree: "Master of Science in Computer Science",
    gpa: "GPA: 3.72",
    timeframe: "",
    description:
      "At Santa Clara, I dove deep into how large-scale systems and intelligent applications work behind the scenes. I explored topics like distributed systems, algorithms, operating systems, advanced databases, and machine learning, all of which shaped how I think about building performant, data-driven products.",
    logo: "/scu.png",
    linkedinUrl: "https://www.linkedin.com/school/santa-clara-university/",
  },
  {
    institution: "Nitte Meenakshi Institute of Technology",
    location: "Bengaluru, India",
    degree: "Bachelor of Engineering",
    gpa: "GPA: 3.92",
    timeframe: "",
    description:
      "My engineering journey began with circuits and signals before evolving toward code. I studied computer architecture, digital signal processing, microcontrollers, and communication systems, learning to connect the logic of hardware with the creativity of software.",
    logo: "/nmit-logo.svg",
    linkedinUrl: "https://www.linkedin.com/school/nmit-bangalore/",
  },
];

export default function Education() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
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
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Academic background and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-4">
                  {edu.logo && (
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={edu.logo}
                        alt={edu.institution}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {edu.location}
                    </p>
                  </div>
                </div>
                {edu.linkedinUrl && (
                  <motion.a
                    href={edu.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                    aria-label={`${edu.institution} LinkedIn`}
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </motion.a>
                )}
              </div>

              <div>
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {edu.degree}
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">
                  {edu.gpa}
                </p>

                <button
                  onClick={() => toggleExpanded(index)}
                  className="flex items-center space-x-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span>
                    {expandedIndex === index ? "Show less" : "Learn more"}
                  </span>
                  {expandedIndex === index ? (
                    <FaChevronUp className="w-4 h-4" />
                  ) : (
                    <FaChevronDown className="w-4 h-4" />
                  )}
                </button>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 leading-relaxed">
                        {edu.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
