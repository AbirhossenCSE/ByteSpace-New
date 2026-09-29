# ByteSpace New - Online Course Marketplace

A modern, scalable online course marketplace built with Next.js (App Router), TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [lucide-react](https://lucide.dev/)
- **Code Quality**: ESLint + Prettier (`prettier-plugin-tailwindcss`)
- **Optimization**: `next/image` and `next/font` (Google Inter font)
- **Deployment**: Vercel ready

---

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.tsx             # Root layout with site metadata and Google fonts
│   ├── page.tsx               # Landing page composing section components
│   ├── globals.css            # Tailwind CSS directives & color tokens
│   ├── not-found.tsx          # Custom 404 page
│   └── (auth)/
│       ├── login/page.tsx     # Login page
│       └── signup/page.tsx    # Signup page
├── components/
│   ├── layout/                # Container, Navbar, Footer
│   ├── ui/                    # Reusable primitives (Button, Input, Badge, Rating, etc.)
│   ├── sections/
│   │   └── home/              # Hero, CourseDiscovery, LearningPaths, GrowthSection, etc.
│   ├── cards/                 # CourseCard, CategoryCard, TestimonialCard
│   └── auth/                  # AuthLayout, LoginForm, SignupForm
├── data/                      # Mock typed data files (courses, categories, testimonials, etc.)
├── types/                     # Shared TypeScript interfaces
├── lib/                       # Utility functions (`cn` helper)
└── constants/                 # Site metadata and constants
```

---

## 💻 Getting Started Locally

### Prerequisites

- Node.js 18.x or later
- npm or pnpm / yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bytespace-new
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🛠 Script Commands

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Compiles production build.
- `npm run start`: Starts production server.
- `npm run lint`: Runs ESLint check.
- `npm run format`: Runs Prettier code formatter.

---

## 🌐 Live Deployment

- **Vercel Deployment**: [https://bytespace-new.vercel.app](https://bytespace-new.vercel.app) *(Deployment Link Placeholder)*
