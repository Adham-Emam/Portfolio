import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Loader2 className="w-8 h-8 animate-spin" />
    </div>
  )
}
