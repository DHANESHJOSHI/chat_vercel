import { motion } from 'framer-motion';
import Link from 'next/link';

import { MessageIcon, VercelIcon } from './icons';

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <p>
          {'❤️'} TechWithJoshi {' ❤️ '} 
          </p>
          <Link
            className="font-medium underline underline-offset-4"
            href="https://www.linkedin.com/in/dhanesh-joshi/"
            target="_blank"
          >
            LinkedIn
          </Link>
      </div>
    </motion.div>
  );
};
