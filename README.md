# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, React, and TailwindCSS. Features smooth animations, dark mode support, and a clean design that showcases professional experience, projects, and personality.

## Features

- One-page scroll layout with smooth navigation
- Light and dark mode with warm, photo-friendly colors
- Sticky navigation bar with active section highlighting
- Framer Motion animations throughout
- Fully responsive design for all devices
- Contact form with EmailJS integration
- Interactive photo gallery in About Me section

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- TailwindCSS
- Framer Motion
- React Icons
- EmailJS
- React Hot Toast

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd profile
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory (see `SETUP.md` for details):
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_629tx1k
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_asde5qs
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=-rwUEEezOsVn6x8z-
```

4. Add your photos:
Place your photos in the `public` folder:
- `profile-photo.jpeg` - Main profile photo for hero section
- `exp-photo.jpeg` - Photo for about section
- `edu-photo.jpeg` - Education photos
- `profile-2.jpeg`, `profile-3.jpeg`, `profile-5.jpeg` - Additional profile photos
- `scu.png` - Santa Clara University logo
- `nmit-logo.svg` - NMIT logo

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update your personal information in these files:

- **Hero Section** (`components/sections/Hero.tsx`): Update name, tagline, and social links
- **About Me** (`components/sections/AboutMe.tsx`): Update about me text and photos array
- **Work Experience** (`components/sections/WorkExperience.tsx`): Update the `experiences` array
- **Education** (`components/sections/Education.tsx`): Update the `education` array
- **Projects** (`components/sections/Projects.tsx`): Update the `projects` array
- **Skills** (`components/sections/Skills.tsx`): Update the `skillCategories` array
- **Fun Facts** (`components/sections/FunFacts.tsx`): Update the `funFacts` array
- **Contact** (`components/sections/Contact.tsx`): Update social links and contact information

### Styling

- Colors: Customize in `tailwind.config.ts` and `app/globals.css`
- Dark mode colors: Adjust the `--background` and `--foreground` variables in `app/globals.css`
- Fonts: Change the font family in `app/globals.css` and `tailwind.config.ts`

### Navigation

Update navigation items in `components/Navigation.tsx`:
```typescript
const navItems = [
  { name: "Home", href: "#hero", icon: FaHome },
  // Add or remove items here
];
```

## Deployment

See `DEPLOYMENT.md` for detailed deployment instructions.

**Quick Deploy to Vercel:**
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard (Settings → Environment Variables)
4. Deploy

The site will be live at `https://your-project.vercel.app`

## License

This project is open source and available under the MIT License.
