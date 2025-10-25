# Muthu Eco Products Backend

Backend API for handling contact form submissions with email notifications.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env
```
Edit `.env` with your email credentials.

3. Start the server:
```bash
npm start
```

## Environment Variables

- `EMAIL_USER`: Gmail address for sending emails
- `EMAIL_PASS`: Gmail app password (not regular password)
- `PORT`: Server port (default: 5001)

## API Endpoints

### GET /
Health check endpoint

### POST /api/contact
Submit contact form
- Body: `{ name, email, message }`
- Returns: Success/error message

## Deployment

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Add environment variables in Vercel dashboard

### Railway
1. Connect GitHub repository
2. Add environment variables
3. Deploy automatically

### Render
1. Connect GitHub repository
2. Set build command: `npm install`
3. Set start command: `npm start`
4. Add environment variables