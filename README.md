# 🎁 Giftly — Gift Articles E-Commerce (Frontend Only)

A modern, fully responsive **React + Vite** e-commerce frontend for a gift articles store — featuring customized chocolates, gift boxes, personalized photo frames, and photo-printed bottles.

## ✨ Features

- 🏠 Beautiful hero section with animated banner
- 🧭 6-page navigation (Home, Categories, New Arrival, About, Reviews, Contact)
- 🎨 4 curated product categories (16 products with images)
- 🛒 Full cart drawer with quantity controls and live totals
- 🔔 Toast notifications (react-hot-toast)
- 🌙 Light / Dark mode toggle (persisted to localStorage)
- 🎬 Framer Motion page & card animations
- ⭐ Reviews page with rating breakdown
- 📱 Fully responsive (mobile hamburger menu)
- 🚫 Zero backend — all data is mocked in `src/data/`

## 🛠️ Tech Stack

- React 18
- Vite
- React Router DOM
- Tailwind CSS v4 (`@tailwindcss/vite`)
- React Icons
- Framer Motion
- React Hot Toast

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173).

## 📁 Folder Structure

```
src/
├── components/    # Navbar, Footer, Hero, ProductCard, CartDrawer, ...
├── pages/         # Home, Categories, NewArrival, About, Reviews, Contact, NotFound
├── data/          # products.js, categories.js, reviews.js
├── context/       # CartContext, ThemeContext
├── App.jsx
├── main.jsx
└── index.css
```

## 🧪 Tested On

- Chrome, Firefox, Safari, Edge (latest)
- Mobile, tablet, desktop breakpoints

## 📝 License

MIT — free to use, modify, and distribute.