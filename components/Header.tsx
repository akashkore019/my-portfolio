'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Portfolio
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="hover:text-blue-500 transition-colors">About</Link>
            <Link href="#projects" className="hover:text-blue-500 transition-colors">Projects</Link>
            <Link href="#skills" className="hover:text-blue-500 transition-colors">Skills</Link>
            <Link href="#contact" className="hover:text-blue-500 transition-colors">Contact</Link>
          </div>
          </div>
        </nav>
      </motion.header>
    );
};

export default Header;