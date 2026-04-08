import { techStack } from '@data/techStack';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TechStack() {
  return (
    <section className="py-12 bg-surface bg-opacity-30 backdrop-blur-md">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary">Technology Stack</h2>
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
            >
              <Image src={tech.logo} alt={tech.name} width={48} height={48} />
              <span className="mt-2 text-sm text-gray-200">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
