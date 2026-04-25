import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

// Roles that cycle in the typewriter
const ROLES = [
  'Software Engineer',
  'ML Enthusiast',
  'Full-Stack Developer',
  'AI Builder',
  'Problem Solver',
];

// Terminal lines that animate in sequence
const TERMINAL_LINES = [
  { prompt: '$', cmd: 'whoami', out: 'shubham-kumar' },
  { prompt: '$', cmd: 'skills --list', out: 'Python · React · ML · Node.js' },
  { prompt: '$', cmd: 'status --current', out: 'Open for Opportunities ✓' },
];

const useTypewriter = (words, speed = 80, pause = 1800) => {
  const [display, setDisplay] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const delay = deleting ? speed / 2 : charIndex === current.length ? pause : speed;

    const timer = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setDisplay(current.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      } else if (!deleting && charIndex === current.length) {
        setDeleting(true);
      } else if (deleting && charIndex > 0) {
        setDisplay(current.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      } else {
        setDeleting(false);
        setWordIndex(i => (i + 1) % words.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return display;
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Hero = () => {
  const role = useTypewriter(ROLES);
  const [terminalStep, setTerminalStep] = useState(0);

  // Advance terminal lines every 1.2 s
  useEffect(() => {
    if (terminalStep >= TERMINAL_LINES.length) return;
    const t = setTimeout(() => setTerminalStep(s => s + 1), 1200);
    return () => clearTimeout(t);
  }, [terminalStep]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Ambient background blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* ── Left: text content ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-6">
            <span className="relative flex h-3 w-3" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500" />
            </span>
            <span className="text-sm font-medium text-cyan-400">Open for Opportunities</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Shubham Kumar</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div variants={itemVariants} className="text-xl md:text-2xl text-cyan-400 font-mono mb-6 h-8">
            {role}
            <span className="animate-pulse">|</span>
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
            Crafting elegant solutions to complex problems through code and data.
            Passionate about building things that matter.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#projects" className="btn-primary flex items-center justify-center group">
              View Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-secondary flex items-center justify-center">
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right: terminal widget ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:flex justify-center"
          aria-hidden="true"
        >
          <div className="relative w-full max-w-sm">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-2xl opacity-20" />

            {/* Terminal window */}
            <div className="relative glass rounded-2xl overflow-hidden border border-white/10">
              {/* Title bar */}
              <div className="flex items-center space-x-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <div className="flex items-center space-x-2 ml-4 text-xs text-gray-400 font-mono">
                  <Terminal size={12} />
                  <span>portfolio ~ zsh</span>
                </div>
              </div>

              {/* Terminal body */}
              <div className="p-6 font-mono text-sm space-y-4 min-h-[220px]">
                {TERMINAL_LINES.slice(0, terminalStep).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400">{line.prompt}</span>
                      <span className="text-cyan-300">{line.cmd}</span>
                    </div>
                    <div className="text-gray-400 pl-4">{line.out}</div>
                  </motion.div>
                ))}

                {/* Blinking cursor */}
                {terminalStep < TERMINAL_LINES.length && (
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">$</span>
                    <span className="w-2 h-4 bg-cyan-400 animate-pulse inline-block" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
