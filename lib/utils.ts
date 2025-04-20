import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string | Date): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffInDays = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  )

  const timeStr = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })

  if (diffInDays === 0) return `Today ${timeStr}`
  if (diffInDays === 1) return `Yesterday ${timeStr}`
  if (diffInDays < 7) {
    return `${date.toLocaleDateString('en-US', { weekday: 'long' })} ${timeStr}`
  }

  return `${date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })}, ${timeStr}`
}
