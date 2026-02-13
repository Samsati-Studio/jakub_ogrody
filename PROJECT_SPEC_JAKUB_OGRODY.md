Idealnie.
Poniżej masz **jedną, kompletną, finalną specyfikację**, którą możesz wkleić do Claude Code jako nadrzędny dokument projektowy.

To jest wersja:

- produkcyjna
- stabilna
- z Sanity (osobne repo)
- z kontrolą ról
- z konwersją
- z SEO
- bez chaosu

------

# 🔥 MASTER SPECYFIKACJA – OGRODY JAKUBA

## Full Production Setup (Next.js + Sanity + Resend)

You are a senior full-stack developer building a production-ready website system for a gardening services company.

This system consists of two separate repositories:

1️⃣ Frontend (Next.js 14, App Router, deployed on Vercel)
2️⃣ CMS (Sanity Studio, deployed separately via Sanity hosting)

The project must be stable, scalable, clean and easy for a non-technical client to use.

------

# 🎯 BUSINESS GOAL

Create a premium, conversion-focused website for:

**Usługi Ogrodnicze Jakub Szymanowicz**

This is not just a business card.
It is a sales tool targeting:

- Affluent homeowners
- Companies
- Municipalities

Tone: quality, precision, responsibility.
Not price-driven.

------

# 🧱 SYSTEM ARCHITECTURE

## REPO 1 – FRONTEND

Tech stack:

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (minimal, subtle only)
- next-sanity
- @sanity/image-url
- Resend (contact form + autoresponder)
- ISR (revalidate 60s)

Deploy target: Vercel

------

## REPO 2 – CMS

Tech stack:

- Sanity Studio (latest)
- TypeScript
- Hosted by Sanity (separate from frontend)

Client edits only:

- Gallery items
- Testimonials

No other sections editable.

------

# 🎨 DESIGN SYSTEM

## Colors (extend Tailwind)

primary: #4A6B34
sage: #D8E2DC
accent: #8cc63e
dark: #2B2B2B

## Typography

Use Inter via next/font/google.

Hierarchy:

H1 → bold, large, confident
H2 → elegant, strong
Body → dark/80
CTA → accent background

Design style:

- Minimal
- Premium
- Clean
- Subtle animations only

No dark mode.

------

# 🗂 FRONTEND STRUCTURE

Create structure:

```
app/
components/
lib/
types/
```

Inside lib:

- sanity.client.ts
- sanity.queries.ts
- resend.ts

All Sanity fetching must happen in server components.

Use:

export const revalidate = 60

------

# 📄 PAGE STRUCTURE (Single Page)

Navbar
Hero
WhyUs
AboutOwner
Services
Process
Gallery (from Sanity)
Testimonials (from Sanity)
AreaServed
FAQ
Contact
Footer

------

# 🎬 HERO

Supports:

- Background video (optional from /public)
- Fallback image
- Gradient overlay
- Subtle fade-in animation

Headline example:

"Twój ogród. Nasza odpowiedzialność."

Primary CTA:
"Umów bezpłatną wycenę"

Secondary CTA:
"Zadzwoń teraz"

------

# 📸 SANITY CMS STRUCTURE

Create only these schemas:

------

## 1️⃣ GalleryItem

Fields:

- title (string, required)
- slug (slug, auto)
- category (enum):
  - zakladanie
  - pielegnacja
  - nawadnianie
- location (string)
- mainImage (required image)
- beforeImage (optional image)
- afterImage (optional image)
- description (text)
- featured (boolean)
- order (number)

Purpose:

- Filter client-side
- Scale to 100+ items
- Support before/after comparison

------

## 2️⃣ Testimonial

Fields:

- name (string, required)
- location (string)
- quote (text, required)
- rating (number 1–5)
- featured (boolean)

------

# 🔐 ROLES

Owner (Admin) – full access
Client (Editor) – can only manage GalleryItem and Testimonial

No access to settings or schema changes.

------

# 📸 GALLERY FRONTEND REQUIREMENTS

- Fetch all items via GROQ
- Filter client-side by category
- Use next/image
- Lazy loading
- Modal preview
- Optimized image builder

Must handle large image sets efficiently.

------

# ⭐ TESTIMONIALS

- Fetch from Sanity
- Optional filter for featured
- Simple clean layout

------

# 📩 CONTACT FORM

Fields:

- Name
- Phone (required)
- Email
- Location
- Property size
- Type of service
- Message

Validation required.

On submit:

1. Send email to owner via Resend
2. Send autoresponder to client
3. Redirect to /thank-you

------

# 📧 AUTORESPONDER CONTENT

Professional tone.

Subject:
Dziękujemy za kontakt – Usługi Ogrodnicze Jakub Szymanowicz

Content:

- Thank client
- Confirm receipt
- Inform response within 24h
- Provide phone number
- Reinforce professionalism and long-term cooperation

------

# 🌍 SEO

Implement:

- metadata API
- OpenGraph
- JSON-LD (LocalBusiness)
- lang="pl"

Company:

Usługi Ogrodnicze Jakub Szymanowicz
Pobiel 29
56-210 Wąsosz
Tel: 607-871-019

Area served:

Rawicz
Leszno
Wrocław
Wschowa
Krobia
Głogów
Lubin

------

# ⚡ PERFORMANCE

- Minimal Framer Motion
- No heavy client components
- Video optimized
- next/image everywhere
- Lazy load gallery

------

# 🔐 ENV VARIABLES (Frontend)

Required:

NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
NEXT_PUBLIC_SANITY_API_VERSION
RESEND_API_KEY

Do not hardcode secrets.

------

# 🧠 STABILITY RULES

- CMS completely separated from frontend
- No editable hero or core branding
- No unnecessary libraries
- Clean TypeScript
- No build errors
- Production-ready structure

------

# 📦 OUTPUT REQUIREMENTS

For CMS repo:

- Full Sanity config
- Schema files
- Clean studio structure

For Frontend repo:

- Complete file structure
- All components
- Sanity integration
- Resend integration
- Metadata setup
- Structured data
- Ready for Vercel deployment

------

Generate complete working systems for both repositories.

------

# 🔥 TO JEST FINALNY DOKUMENT

To jest specyfikacja „agencyjna”.
Po tym Claude powinien wygenerować:

- dwa kompletne projekty
- bez zgadywania
- bez nadmiarowych funkcji
- bez chaosu

------

Jeśli chcesz, kolejnym krokiem możemy:

- dopracować copy premium (żeby Claude nie pisał generyków)
- rozpisać strukturę filtrów galerii pod SEO
- zrobić checklistę przed publikacją (DNS, Resend, domena, SSL)

Co robimy dalej?