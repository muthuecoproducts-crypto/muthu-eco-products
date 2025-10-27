# Brevo Email Setup Guide

## 1. Create Brevo Account
- Go to [Brevo.com](https://www.brevo.com)
- Sign up for free account (300 emails/day forever)
- Verify your email address

## 2. Get API Key
- Login to Brevo dashboard
- Go to **SMTP & API** → **API Keys**
- Click **Generate a new API key**
- Copy the API key (save it securely)

## 3. Add Sender Email
- Go to **Senders & IP** → **Senders**
- Click **Add a sender**
- Add your email (e.g., noreply@yourdomain.com)
- Verify the sender email

## 4. Environment Variables
Create `.env` file in `/backend` folder:

```env
BREVO_API_KEY=your_actual_api_key_here
BREVO_SENDER_EMAIL=your_verified_sender_email@yourdomain.com
PORT=5001
```

## 5. Test the Setup
- Start backend: `cd backend && npm start`
- Test contact form on your website
- Check Brevo dashboard for email statistics

## Features Included:
✅ 300 emails/day FREE forever
✅ Professional email templates
✅ Delivery tracking
✅ Reply-to functionality
✅ HTML email support
✅ Error handling