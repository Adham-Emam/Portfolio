'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SlideProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  once?: boolean
  amount?: 'some' | 'all' | number
}

export function Slide({
  children,
  delay = 0,
  duration = 0.5,
  className,
  direction,
  once = false,
  amount = 0.3,
  ...props
}: SlideProps) {
  const getDirectionOffset = () => {
    const offset = 100
    switch (direction) {
      case 'up':
        return { y: offset }
      case 'down':
        return { y: -offset }
      case 'left':
        return { x: offset }
      case 'right':
        return { x: -offset }
    }
  }

  return (
    <motion.div
      initial={getDirectionOffset()}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once, amount }}
      animate={{ x: 0, y: 0 }}
      transition={{ duration, delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
