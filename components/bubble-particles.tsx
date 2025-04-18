interface BubbleParticlesProps {
  count?: number
  size?: number
  minSpeed?: number
  maxSpeed?: number
  maxDelay?: number
}

const BubbleParticles: React.FC<BubbleParticlesProps> = ({
  count = 30,
  size = 10,
  minSpeed = 3000,
  maxSpeed = 10000,
  maxDelay = 5000,
}) => {
  // Generate random bubbles
  const bubbles = Array.from({ length: count }).map((_, i) => {
    const left = Math.random() * 100
    let speed = Math.random() * maxSpeed
    speed = speed < minSpeed ? minSpeed : speed
    const delay = Math.random() * maxDelay

    return (
      <div
        key={i}
        className="absolute rounded-full opacity-0 bg-foreground"
        style={{
          bottom: `-${size}px`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          animation: `blow ${speed}ms infinite`,
          animationDelay: `${delay}ms`,
        }}
      />
    )
  })

  return <div className="absolute bottom-0 left-0 w-full">{bubbles}</div>
}

export default BubbleParticles
