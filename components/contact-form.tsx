'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  subject: z
    .string()
    .min(5, { message: 'Subject must be at least 5 characters' })
    .max(100, { message: 'Subject must be maximum 100 characters' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(5000, { message: 'Message must be maximum 5000 characters' }),
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  )
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = formSchema.safeParse(formData)

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {}
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormData
        fieldErrors[key] = issue.message
      }
      setErrors(fieldErrors)
      toast({
        title: 'Please fix the errors in the form.',
        variant: 'destructive',
      })
      return
    }

    setIsSubmitting(true)
    // Set the form action to Formspree and submit natively
    const form = e.currentTarget as HTMLFormElement
    form.action = 'https://formspree.io/f/xrbjkqrr'
    form.method = 'POST'
    // Submit the form natively so the browser sends the form data to Formspree
    form.submit()
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'border-destructive' : ''}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name}</p>
        )}
      </div>

      <div className="space-y-2">
        <Input
          name="email"
          type="text"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'border-destructive' : ''}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <Input
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className={errors.subject ? 'border-destructive' : ''}
        />
        {errors.subject && (
          <p className="text-sm text-destructive">{errors.subject}</p>
        )}
      </div>

      <div className="space-y-2">
        <Textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? 'border-destructive' : ''}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
