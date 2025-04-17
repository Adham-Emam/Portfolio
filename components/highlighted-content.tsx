// components/HighlightedContent.tsx
'use client'

import { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-bash'

export function HighlightedContent({ html }: { html: string }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [html])

  return (
    <div
      className="prose prose-lg dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
