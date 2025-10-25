import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h3>
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
          className="bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-colors duration-300 font-medium uppercase"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm