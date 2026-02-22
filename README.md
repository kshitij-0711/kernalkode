# WebCraft - Web Development Company Landing Page

A full-stack landing page for a web development agency with **5 stunning design variants**. Built with separate frontend and backend for flexibility and scalability.

## 🎨 Design Variants

Switch between 5 unique design themes using the theme selector in the navigation:

| Theme | Description |
|-------|-------------|
| **Midnight Luxe** | Dark luxury with gold accents, refined elegance |
| **Neon Brutalist** | Bold, raw, electric colors, geometric |
| **Soft Editorial** | Magazine-inspired, elegant, warm tones |
| **Tech Minimal** | Clean, futuristic, monochrome with blue |
| **Warm Organic** | Earthy tones, flowing shapes, natural feel |

## 🏗️ Project Structure

```
protfolioKK/
├── backend/           # Express + TypeScript + Prisma
│   ├── src/
│   │   ├── index.ts        # Server entry point
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Validation
│   │   └── lib/            # Prisma client
│   └── prisma/
│       └── schema.prisma   # Database schema
│
└── frontend/          # Next.js + React
    └── src/
        ├── app/            # Pages & layouts
        ├── components/     # UI components
        ├── context/        # Theme context
        └── lib/            # API client
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database

### 1. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Add your PostgreSQL URL to .env
# DATABASE_URL="postgresql://user:password@localhost:5432/webcraft"

# Push database schema
npx prisma db push

# Seed sample data
npm run db:seed

# Start development server
npm run dev
```

Backend runs on http://localhost:5000

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend runs on http://localhost:3000

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/services` | List services |
| GET | `/api/testimonials` | List testimonials |
| GET | `/api/portfolio` | List portfolio items |
| POST | `/api/contact` | Submit contact form |

## 🎯 Features

- **5 Design Variants** - Switch themes instantly via navbar
- **Contact Form** - Connected to backend with validation
- **Responsive Design** - Mobile-first approach
- **Animations** - Smooth transitions and micro-interactions
- **SEO Optimized** - Meta tags and semantic HTML

## 🛠️ Tech Stack

**Frontend:**
- Next.js 16 (App Router)
- React 19
- CSS Modules
- TypeScript

**Backend:**
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- Zod validation

## 📦 Environment Variables

### Backend (`.env`)
```env
DATABASE_URL="postgresql://..."
PORT=5000
CORS_ORIGIN=http://localhost:3000
```

### Frontend (`.env.local`)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 📄 License

MIT
