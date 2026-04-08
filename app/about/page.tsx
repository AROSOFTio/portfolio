'use client';

import { motion } from 'framer-motion';

export default function AboutPage(){
  return(
    <motion.section
      className="container mx-auto py-12"
      initial={{ opacity:0, y:20 }}
      animate={{ opacity:1, y:0 }}
      transition={{ duration:0.5 }}
    >
      <h1 className="text-4xl font-bold text-primary mb-6">About AROSOFT Innovations Ltd</h1>
      <p className="text-lg text-gray-300 mb-4">
        Founded in 2020, AROSOFT is a boutique software studio dedicated to delivering premium, enterprise‑grade digital solutions. Our mission is to empower businesses with technology that is both powerful and beautifully crafted.
      </p>
      <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Our Vision</h2>
      <p className="text-gray-300 mb-4">
        To become the go‑to partner for organizations seeking innovative, secure, and scalable software that drives growth and operational excellence.
      </p>
      <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Core Strengths</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Full‑stack expertise across modern web stacks.</li>
        <li>Design‑first approach with premium UI/UX.</li>
        <li>Robust DevOps and CI/CD pipelines.</li>
        <li>Security‑centric development and compliance.</li>
        <li>Agile delivery and transparent communication.</li>
      </ul>
    </motion.section>
  );
}
