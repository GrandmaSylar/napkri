# Nakpri Laptops and Accessories

Modern e-commerce storefront for **Nakpri Laptops and Accessories** — dealers of computers, laptops, 4K monitors, high-speed storage, and tech gear in Ghana.

## Tech Stack
* **Framework**: Next.js 15 (App Router), React 19, TypeScript
* **Styling**: Tailwind CSS v4 (`@theme` tokens)
* **Icons**: Phosphor Icons (`@phosphor-icons/react`)
* **Database**: Neon Serverless Postgres (`@neondatabase/serverless`)
* **Images**: Cloudinary on-the-fly transformations & uploads
* **Admin**: Protected edge-rewritten admin path, password lockout, and WebAuthn passkeys
* **Ordering**: Direct WhatsApp checkout formatting with browser-persisted cart & wishlist

## Getting Started

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Run the database setup script to create tables and load the launch catalog:
```bash
node --env-file=.env.local scripts/db-setup.mjs
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the store.

## Contact & Deliveries
* **Phone / WhatsApp**: +233 54 731 9261 (`054 731 9261`)
* **Telegram**: [https://t.me/mrnakpri](https://t.me/mrnakpri) (`@mrnakpri`)
* **Delivery**: Same-day delivery across Greater Accra, 24–48hr nationwide delivery across Ghana.
