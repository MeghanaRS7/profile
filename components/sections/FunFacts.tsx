"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const funFacts = [
  {
    emoji: "🪴",
    title: "Plant Parent",
    description:
      "I somehow ended up with 30 plants!! from monsteras to mint. Bought a random seed pack once, now it’s a full-blown jungle experiment.",
  },
  {
    emoji: "🍳",
    title: "Cooking Romantic",
    description:
      "Cooking is my love language. It’s where I unwind, play with flavors, and spend way too much time perfecting comfort food.",
  },
  {
    emoji: "🎨",
    title: "Inspired Generalist",
    description:
      "Crocheting, skiing, painting, hiking, piano, dance, gaming... I've tried it all. Thrive on variety, the kind that keeps life colorful and ideas constantly flowing.",
  },
];

export default function FunFacts() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <section
      id="fun-facts"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
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
            Fun Facts About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Beyond the code - here&apos;s what makes me tick!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {funFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-64 perspective-1000"
              onMouseEnter={() => setFlippedIndex(index)}
              onMouseLeave={() => setFlippedIndex(null)}
            >
              <motion.div
                className="relative w-full h-full preserve-3d"
                animate={{
                  rotateY: flippedIndex === index ? 180 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 backface-hidden bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center border-2 border-gray-200 dark:border-gray-700">
                  <motion.div
                    className="text-6xl mb-4"
                    animate={
                      flippedIndex === index ? { rotate: [0, 10, -10, 0] } : {}
                    }
                    transition={{ duration: 0.5 }}
                  >
                    {fact.emoji}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center">
                    {fact.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Hover to learn more
                  </p>
                </div>

                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center transform rotate-y-180">
                  <p className="text-white text-center leading-relaxed">
                    {fact.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
