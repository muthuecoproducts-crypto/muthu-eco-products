import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Form</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-primary focus:outline-none text-gray-700"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-primary focus:outline-none text-gray-700"
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Type your message here"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-primary focus:outline-none text-gray-700 resize-none"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#16a093] text-white px-8 py-3 rounded-full hover:bg-[#117964] transition-colors duration-300 font-medium uppercase disabled:opacity-50 disabled:cursor-not-allowed mt-6 w-full md:w-auto"
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
        
        {submitStatus === 'success' && (
          <div className="text-green-600 text-sm mt-2">
            ✓ Message sent successfully! We'll get back to you soon.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="text-red-600 text-sm mt-2">
            ✗ Failed to send message. Please try again or contact us directly.
          </div>
        )}
      </form>
    </div>
  )
}

export default ContactForm