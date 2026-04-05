'use client'

import { useState, FormEvent } from 'react'

const PROJECT_TYPES: { value: string; label: string }[] = [
  { value: 'installation-ga', label: 'Fence Installation (Georgia)' },
  { value: 'residential-product', label: 'Residential Fence Product Order' },
  { value: 'commercial-product', label: 'Commercial Grade Custom Quote' },
  { value: 'custom-gate', label: 'Custom Gate Sizing' },
  { value: 'other', label: 'Other' },
]

interface QuoteFormProps {
  showProjectType?: boolean
  subject?: string
}

export default function QuoteForm({
  showProjectType = false,
  subject = 'Quote Request from fenceworkshop.com',
}: QuoteFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [projectType, setProjectType] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || '(not provided)'}`,
    ]
    if (showProjectType) {
      const projectLabel =
        PROJECT_TYPES.find((p) => p.value === projectType)?.label || '(not selected)'
      lines.push(`Project Type: ${projectLabel}`)
    }
    lines.push('', 'Project Details:', message || '(none)')

    const body = lines.join('\n')
    const mailto = `mailto:atlanta@fenceworkshop.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
        />
      </div>
      {showProjectType && (
        <div>
          <label htmlFor="project-type" className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
          <select
            id="project-type"
            name="project-type"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent bg-white"
          >
            <option value="">Select one…</option>
            {PROJECT_TYPES.map((p) => (
              <option key={p.value} value={p.value}>{p.label}</option>
            ))}
          </select>
        </div>
      )}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
        <textarea
          id="message"
          name="message"
          rows={showProjectType ? 5 : 4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={showProjectType ? 'Tell us about your project — style, height, linear footage, timeline, or any specs you have.' : undefined}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        Request Quote
      </button>
    </form>
  )
}
