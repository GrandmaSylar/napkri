# Nakpri Laptops and Accessories — Product

## What it is
Online storefront for Nakpri Laptops and Accessories, a Ghana electronics dealer supplying laptops (MacBooks, ThinkPads, Dell, HP), desktop computers, 4K monitors, high-speed storage, audio, peripherals, and pro accessories. Prices run from about GH₵500 to GH₵25,000.

## Who uses it
Professionals, developers, students, gamers, and businesses in Greater Accra and nationwide across Ghana, mostly on mobile devices and via social/Telegram/WhatsApp channels, who need verified hardware specs and fast ordering. Payment happens off-site (MTN MoMo, Telecel Cash, bank transfer, or cash on delivery).

## Core flows
1. Browse the home page by price tier, category, or curated pro bundles (new, bestsellers, deals).
2. Filter and search the shop (`/shop?category=&price=&sale=&search=&sort=`).
3. Product detail: select specs (RAM/SSD configuration) and quantity, add to cart or wishlist, or ask on WhatsApp.
4. Cart drawer -> WhatsApp checkout form, sending a structured order message to the business WhatsApp.
5. Telegram broadcast channel integration for stock drops and arrivals (`https://t.me/mrnakpri`).

## Truth and constraints
- Currency is GH₵. Same-day delivery in Greater Accra, 24–48 hours insured nationwide shipping.
- WhatsApp business number: `+233 54 731 9261` (`lib/whatsapp.ts`).
- Telegram channel: `https://t.me/mrnakpri` (`@mrnakpri`).
- No on-site payment gateway or mandatory user accounts. Cart and wishlist are persisted in browser LocalStorage.

## Platform
Web (Next.js 15, React 19, Tailwind v4, Neon Serverless Postgres, Phosphor Icons)
