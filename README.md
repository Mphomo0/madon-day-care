<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Madon Daycare & Aftercare

A modern, responsive website for Madon Daycare & Aftercare Centre, providing information about childcare services for children from 3 months to Grade 7.

## Features

- **Services Overview** - Daycare, Aftercare, Transportation, and Nutrition programs
- **Enrollment System** - Multi-step online enrollment form
- **Admin Dashboard** - Interactive dashboard with statistics and child management
- **Contact Form** - Easy way for parents to get in touch
- **Responsive Design** - Works on all devices

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Motion (Framer Motion)
- Lucide Icons

## Getting Started

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                    # Next.js pages
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── contact/           # Contact page
│   ├── enroll/            # Enrollment page
│   ├── login/             # Login page
│   └── dashboard/         # Admin dashboard
├── components/             # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Section.tsx
│   └── DashboardLayout.tsx
├── hooks/                  # Custom React hooks
└── lib/                    # Utility functions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

Proprietary - All rights reserved
