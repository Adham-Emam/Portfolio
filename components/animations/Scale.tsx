'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ScaleProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  hover?: boolean
  once?: boolean
  amount?: 'some' | 'all' | number
}

export function Scale({
  children,
  delay = 0,
  duration = 0.5,
  className,
  hover = false,
  once = false,
  amount = 0.3,
  ...props
}: ScaleProps) {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{
        scale: 1,
        opacity: 1,
      }}
      viewport={{
        once,
        amount,
      }}
      transition={{ duration, delay }}
      whileHover={hover ? { scale: 1.05 } : undefined}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
