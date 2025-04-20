'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold">500 - Server Error</h1>
      <p className="text-lg text-muted-foreground">
        Something went wrong on our end. Please try again.
      </p>
      <Button onClick={() => reset()}>Try Again</Button>
    </div>
  )
}
