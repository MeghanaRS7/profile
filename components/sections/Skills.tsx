"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "TypeScript", "JavaScript", "Swift"],
    color: "blue",
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Node.js", "Spring MVC", "Jest", "HTML5", "CSS3", "Tailwind CSS", "Express", "JUnit"],
    color: "purple",
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Step Functions", "EventBridge", "S3", "Lambda", "SageMaker", "Docker", "GitHub Actions", "CI/CD", "GCS"],
    color: "green",
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "DynamoDB", "MySQL"],
    color: "orange",
  },
  {
    title: "Distributed Systems",
    skills: ["Microservices", "REST APIs", "Event-Driven Architecture", "Caching", "Apache Kafka", "Apache Spark", "AWS Glue", "Athena"],
    color: "pink",
  },
  {
    title: "ML & Tools",
    skills: ["TensorFlow Lite", "OpenCV", "Vertex AI", "Metrics Instrumentation", "System Design", "Agile/Scrum"],
    color: "blue",
  },
];

const colorClasses = {
  blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
  green: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
  orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
  pink: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & Tech Stack
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Technologies I work with to build amazing products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${colorClasses[category.color as keyof typeof colorClasses]}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

