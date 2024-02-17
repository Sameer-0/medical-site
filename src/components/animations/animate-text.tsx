"use client"
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion'

interface AnimateTextProps {
    children: any;
    className?: string;
    x: number;
    type: string;
    duration: number;
}
const AnimateText = ({
    children,
    className,
    x = 300,
    type = "linear",
    duration = 0.5
}: AnimateTextProps) => {
  return (
    <div>
      <motion.div
        initial={{ x , opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
            type,
            stiffness: 260,
            damping: 20,
            duration
        }}
        className={
            cn(
                className
            )
        }
      >
        {children}
      </motion.div>
    </div>
  )
}

export default AnimateText