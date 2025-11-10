"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface Experience {
  company: string;
  role: string;
  location: string;
  timeframe: string;
  description: string;
  techStack: string[];
}

const experiences: Experience[] = [
  {
    company: "Amazon",
    role: "Software Development Engineer",
    location: "Seattle, WA",
    timeframe: "Sep 2022 – Present",
    description: `At Amazon, I've worked across large-scale frontend and distributed backend systems that power retail experiences worldwide.

I modernized a legacy Java-based stack into a modular React + TypeScript architecture, building reusable component libraries used across 16 marketplaces and 30+ categories. This modernization improved accessibility, performance, and developer velocity while driving a 15% increase in engagement and conversion through close collaboration with Product, UX, and Marketing.

On the backend, I re-architected a distributed backend system on AWS using a high-throughput data aggregation layer that powers real-time pricing and availability decisions for millions of sessions. I migrated logic from a single point of failure to a distributed system, optimized caching, and streamlined deployments, cutting latency by 50% and improving reliability.

I also developed an observability automation framework using AWS CDK to provision dashboards, alarms, and readiness checks across services. This automation unified metric visibility, reduced manual setup time, and strengthened operational resilience during incidents.

I led the migration design for Java backend controllers that powered core merchandising and shopping experiences. Redefined data flow to the frontend, formalized contracts, added validation, and ran A/B tests to ensure reliability—rolling out patterns adopted by other teams.

In addition to development, I actively contributed to on-call rotations, led incident triage, maintained runbooks, and partnered with cross-functional teams to resolve live issues efficiently. I also supported new engineer onboarding, facilitated lunch-and-learns, and fostered a culture of shared learning and operational excellence across the team.`,
    techStack: ["Java", "Python", "React", "TypeScript", "AWS", "SageMaker", "Apache Spark", "EventBridge", "Step Functions", "AWS Glue", "Athena", "AWS CDK", "CloudWatch"],
  },
  {
    company: "SCU Swades",
    role: "Student Representative",
    location: "Santa Clara University",
    timeframe: "2022 – 2023",
    description: `As part of SCU Swades, Santa Clara University's graduate student organization, I collaborated with peers, university staff, and alumni to organize mentorship sessions, cultural festivals, and community events. Our goal was to create an inclusive and supportive space for new, continuing, and alumni students to connect, celebrate, and thrive together.

Through this experience, I strengthened my ability to coordinate cross-functional efforts, plan logistics, and foster meaningful connections, skills that translate seamlessly into how I approach teamwork and collaboration in professional settings.`,
    techStack: [],
  },
  {
    company: "Indian Space Research Organization",
    role: "Software Development Intern",
    location: "Bengaluru, India",
    timeframe: "May 2019 – Sep 2019",
    description: `Designed a secure file-processing platform using Spring Boot microservices and a React + TypeScript interface. Implemented AES/RSA encryption, role-based access, and interactive dashboards for encrypted data handling, an early experience that strengthened my foundation in full-stack architecture and secure system design.`,
    techStack: ["Spring Boot", "React", "TypeScript", "Java", "AES", "RSA"],
  },
];

export default function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
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
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Building scalable solutions and impactful products
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800"
            >
              <div
                className="flex items-start justify-between cursor-pointer"
                onClick={() => toggleExpanded(index)}
              >
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {exp.timeframe} {exp.location && `| ${exp.location}`}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="ml-4 p-2 text-gray-600 dark:text-gray-400"
                >
                  {expandedIndex === index ? (
                    <FaChevronUp className="w-5 h-5" />
                  ) : (
                    <FaChevronDown className="w-5 h-5" />
                  )}
                </motion.button>
              </div>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line mb-6">
                        {exp.description}
                      </p>

                      {exp.techStack.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {exp.techStack.map((tech) => (
                            <motion.span
                              key={tech}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
