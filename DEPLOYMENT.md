# Deployment Guide

## Deploy to Vercel (Recommended)

Vercel is the best platform for Next.js applications. It's free, fast, and easy to use.

### Step 1: Push to GitHub

1. Create a new repository on GitHub
2. Initialize git and push your code:

```bash
git init
git add .
git commit -m "Initial commit: portfolio website"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and configure settings

### Step 3: Add Environment Variables

1. In your Vercel project dashboard, go to **Settings** → **Environment Variables**
2. Add these three variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = `service_629tx1k`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = `template_asde5qs`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = `-rwUEEezOsVn6x8z-`
3. Make sure to select **Production**, **Preview**, and **Development** environments
4. Click **Save**

### Step 4: Deploy

1. Click **Deploy** (or it will auto-deploy after adding env variables)
2. Wait for the build to complete
3. Your site will be live at `https://your-project-name.vercel.app`

### Step 5: Custom Domain (Optional)

1. In Vercel dashboard, go to **Settings** → **Domains**
2. Add your custom domain
3. Follow the DNS configuration instructions

## Important Notes

- **Never commit `.env.local`** - It's already in `.gitignore`
- **Environment variables** must be set in Vercel dashboard for production
- **Automatic deployments** - Every push to main branch will auto-deploy
- **Preview deployments** - Pull requests get preview URLs automatically

## GitHub Pages (Not Recommended)

GitHub Pages doesn't work well with Next.js because:
- Next.js needs a Node.js server (GitHub Pages is static only)
- You'd need to export as static site (loses many Next.js features)
- No server-side rendering or API routes

**Use Vercel instead** - it's specifically built for Next.js and much easier.

## Troubleshooting

### Contact form not working?
- Check environment variables are set in Vercel dashboard
- Verify EmailJS credentials are correct
- Check browser console for errors

### Build fails?
- Check all dependencies are in `package.json`
- Ensure TypeScript errors are fixed
- Check Vercel build logs for specific errors

