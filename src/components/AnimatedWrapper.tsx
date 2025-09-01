import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedWrapperProps {
  children: ReactNode;
  className?: string;
}

const AnimatedWrapper = ({ children, className }: AnimatedWrapperProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
