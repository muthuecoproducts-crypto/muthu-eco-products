import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://muthu-eco-products.vercel.app', 'https://muthu-eco-products-*.vercel.app'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Muthu Eco Products API is running!' })
})

// Create transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
})

// Contact form endpoint
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'muthuecoproducts@gmail.com',
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #16a093;">New Contact Form Submission</h2>
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          This message was sent from the Muthu Eco Products contact form.
        </p>
      </div>
    `
  }

  try {
    console.log('Attempting to send email with:', {
      user: process.env.EMAIL_USER,
      passLength: process.env.EMAIL_PASS?.length
    })
    await transporter.sendMail(mailOptions)
    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Detailed email error:', error)
    res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})