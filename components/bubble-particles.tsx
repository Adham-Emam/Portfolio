'use client'

import React, { useEffect, useState } from 'react'

interface BubbleParticlesProps {
  count?: number
  width?: number
  height?: number
  minSpeed?: number
  maxSpeed?: number
  maxDelay?: number
}

const BubbleParticles: React.FC<BubbleParticlesProps> = ({
  count = 30,
  width = 20,
  height = 40,
  minSpeed = 10000,
  maxSpeed = 50000,
  maxDelay = 5000,
}) => {
  const [bubbles, setBubbles] = useState<React.ReactNode[]>([])

  useEffect(() => {
    // Generate random bubbles only on client side
    const generatedBubbles = Array.from({ length: count }).map((_, i) => {
      const left = Math.random() * 100
      let speed = Math.random() * maxSpeed
      speed = speed < minSpeed ? minSpeed : speed
      const delay = Math.random() * maxDelay

      return (
        <div
          key={i}
          className="absolute rounded-lg opacity-0 bg-orange-500/10 backdrop-filter backdrop-blur-2xl z-[-1]"
          style={{
            bottom: `-${height}px`,
            left: `${left}%`,
            width: `${width}px`,
            height: `${height}px`,
            animation: `blow ${speed}ms infinite`,
            animationDelay: `${delay}ms`,
          }}
        />
      )
    })

    setBubbles(generatedBubbles)
  }, [count, width, height, minSpeed, maxSpeed, maxDelay])

  return <div className="absolute bottom-0 left-0 w-full">{bubbles}</div>
}

export default BubbleParticles
