# Setup Guide

## Environment Variables

Create a `.env.local` file in the root directory with your EmailJS credentials:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_629tx1k
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_asde5qs
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=-rwUEEezOsVn6x8z-
```

**Important:** This file is already in `.gitignore` and will NOT be committed to git.

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file (see above)

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## For Vercel Deployment

Add the same environment variables in Vercel dashboard:
- Go to your project → Settings → Environment Variables
- Add all three variables
- Select Production, Preview, and Development
- Redeploy

See `DEPLOYMENT.md` for detailed deployment instructions.

