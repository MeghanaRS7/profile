# Git Commit Guide

## Initial Setup

If you haven't initialized git yet:

```bash
git init
git add .
git commit -m "Initial commit: portfolio website"
```

## Create GitHub Repository

1. Go to [github.com](https://github.com) and create a new repository
2. Don't initialize with README (you already have one)
3. Copy the repository URL

## Push to GitHub

```bash
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

## Commit Changes

After making changes:

```bash
git add .
git commit -m "Your commit message"
git push
```

## Good Commit Messages

- `feat: add interactive photo gallery`
- `fix: update contact form error handling`
- `style: improve dark mode colors`
- `refactor: clean up unused code`
- `docs: update README with deployment instructions`

## Before Committing

Make sure:
- ✅ `.env.local` is NOT committed (already in `.gitignore`)
- ✅ All code is clean and formatted
- ✅ No console errors
- ✅ All dependencies are in `package.json`

## Check What Will Be Committed

```bash
git status
```

This shows which files will be committed. Make sure `.env.local` is NOT listed.

## If You Accidentally Added .env.local

```bash
git reset HEAD .env.local
```

This removes it from staging without deleting the file.

