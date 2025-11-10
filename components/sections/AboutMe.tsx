"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";

const photos = [
  "/exp-photo.jpeg",
  "/edu-photo.jpeg",
  "/profile-2.jpeg",
  "/profile-3.jpeg",
  "/profile-5.jpeg",
];

export default function AboutMe() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => setCurrentIndex((i) => (i + 1) % photos.length);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div
              className="relative w-full max-w-md mx-auto cursor-pointer select-none"
              onClick={nextPhoto}
              aria-label="About me photos — click to advance"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={photos[currentIndex]}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                  >
                    <Image
                      src={photos[currentIndex]}
                      alt={`Meghana Ravikumar ${currentIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 border-4 border-white dark:border-gray-800 rounded-3xl" />
                    <div className="absolute -inset-4 border-2 border-blue-200 dark:border-blue-800 rounded-3xl opacity-40" />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-4 w-full max-w-sm mx-auto h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-600 dark:bg-blue-400 rounded-full"
                  animate={{
                    width: `${((currentIndex + 1) / photos.length) * 100}%`,
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                />
              </div>
              <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">
                Tap to see more ✨
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4"
              >
                About Me
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                A bit about who I am
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              <motion.p variants={itemVariants}>
                I&apos;m{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Meghana
                </span>{" "}
                — a curious, hands-on engineer who cares about people as much as the systems I build. I&apos;ve worked across backend pipelines, frontend platforms, and large-scale systems at Amazon, always with a focus on performance, clarity, and impact. I love simplifying complexity, collaborating across disciplines, and creating products that actually make someone&apos;s day easier.
              </motion.p>

              <motion.p variants={itemVariants}>
                Outside work, I love creating and learning through doing whether it&apos;s cooking, experimenting with ideas, or building small projects that make life a little easier or more fun. I enjoy moments of creativity, connection, and discovery, the same energy I bring into the things I build.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
