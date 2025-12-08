# The HOKS Club Website

> **Where Ambition Learns the Language of Finance**

A modern, responsive website for The HOKS Club (House of Kanakkars Private Limited) - India's Premium Finance and Business Education Club.


##  Features

-  **Modern UI/UX** - Contemporary design with gradient accents and smooth animations
-  **Fully Responsive** - Optimized for mobile, tablet, and desktop
-  **Performance Optimized** - Fast loading with efficient code splitting
-  **Component-Based** - Modular React components for easy maintenance
-  **SEO Optimized** - Comprehensive meta tags and structured data
-  **Accessible** - WCAG compliant with semantic HTML
-  **TypeScript** - Type-safe code for better development experience




##  Installation

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/hoks-club.git
   cd hoks-club
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Install Tailwind CSS v3** (if not already configured)
   ```bash
   npm install -D tailwindcss@3 postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to `http://localhost:5173`

##  Project Structure

```
hoks-club/
├── public/
│   └── logo.png
├── src/
│   ├── assets/
│   │   └── logo.png
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
├── package.json
└── README.md
```

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Type check
npm run type-check
```


##  SEO Configuration

### Meta Tags Included

-  Title, description, keywords
-  Open Graph (Facebook, LinkedIn)
-  Twitter Cards
-  Canonical URLs
-  Robots directives
-  Geo targeting (India)

### Structured Data (JSON-LD)

1. **Educational Organization** - Company information
2. **Course Schema** - Program offerings
3. **Professional Service** - Consultation services
4. **Breadcrumb Navigation** - Site structure

### To Update SEO

Edit `index.html` and replace:
- `https://www.thehoks.com/` with your actual domain
- Social media links in structured data
- OG images with your actual image URLs


##  Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages

```bash
npm install gh-pages --save-dev
```

Add to `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

```bash
npm run deploy
```

### Environment Variables

Create `.env` file for sensitive data:

```env
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=thehoks01@gmail.com
```

##  Technologies Used

- **React 18+** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS 3** - Styling
- **Lucide React** - Icons
- **React Helmet Async** - Dynamic meta tags (optional)



##  License

This project is proprietary and confidential. © 2024 House of Kanakkars Private Limited. All rights reserved.

##  Contact

**The HOKS Club**  
House of Kanakkars Private Limited

-  Email: thehoks01@gmail.com
-  Phone: +91 8807974452
-  Website: [www.thehoks.com](#)
-  LinkedIn: [The HOKS Club](#)
-  Instagram: [@thehoksclub](#)

---


**Made with ❤️ by The HOKS Club Team**

*Last Updated: December 2024*