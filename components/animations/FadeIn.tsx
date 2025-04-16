'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  once?: boolean
  amount?: 'some' | 'all' | number
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  className,
  direction,
  once = false,
  amount = 0.3,
  ...props
}: FadeInProps) {
  const getDirectionOffset = () => {
    switch (direction) {
      case 'up':
        return { y: 20 }
      case 'down':
        return { y: -20 }
      case 'left':
        return { x: 20 }
      case 'right':
        return { x: -20 }
      default:
        return {}
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...getDirectionOffset() }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once,
        amount,
      }}
      transition={{ duration, delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
