import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactUs({ onBack }) {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY


    console.log(serviceId, templateId, publicKey)

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      setError(
        'Missing EmailJS env vars. Create .env.local with VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY.'
      )
      return
    }

    try {
      setStatus('sending')

      await emailjs.sendForm(
        serviceId,
        templateId,
        e.currentTarget,
        { publicKey }
      )

      e.currentTarget.reset()
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setError(err?.text || err?.message || 'Failed to send message.')
    }
  }

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-start justify-center bg-[#080808] text-[#FAFAFA] px-5 pt-16 lg:px-8 lg:pt-24 lg:items-center"
    >
      <div className="w-full max-w-lg mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-0 lg:text-6xl lg:mb-4">Contact Us</h2>
        <p className="text-[16px] text-[#B6B6B5] mb-5 lg:mb-10 lg:text-lg">
          Have a question or want to work together?
        </p>

        <form
          action="#"
          method="POST"
          className="space-y-4 text-left lg:space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
              className="w-full bg-[#171717] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              className="w-full bg-[#171717] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              required
              rows={4}
              className="w-full bg-[#171717] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-[rgba(244,196,48,0.20)] border border-[#f4c430] hover:bg-[#E4AF0C] hover:border-[#E4AF0C] text-[#FAFAFA] rounded-lg w-full py-3 text-lg font-medium"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </div>
        </form>

        {status === 'success' && (
          <div className="mt-5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
            Message sent. Thanks!
          </div>
        )}

        {status === 'error' && (
          <div className="mt-5 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        )}

        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="w-full max-w-xs h-px bg-gray-700"></div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onBack}
              className="cursor-pointer text-gray-400 hover:text-white transition-colors"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
