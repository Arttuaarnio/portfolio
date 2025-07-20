# Personal portfolio

Plans for a simple and responsive portfolio website.


## Tech Stack

| Feature       | Tech Used          |
| ------------- | ------------------ |
| Framework     | React + TypeScript |
| Styling       | Tailwind CSS       |
| UI Components | shadcn/ui          |
| Animations    | Framer Motion      |
| Icons         | Lucide Icons       |
| Fonts         | Google Fonts       |
| Deployment    | Vercel             |


## Folder Structure (Planned)

```
/my-portfolio
├── public/
│   └── images/            # Assets like screenshots or avatars
├── src/
│   ├── components/        # Navbar, Hero, ProjectCard, etc.
│   ├── pages/             # Homepage (App-level sections)
│   ├── styles/            # Tailwind base + custom styles
│   ├── utils/             # Helper functions, animation configs
│   ├── App.tsx            # Main component
│   └── main.tsx           # React entry point
├── tailwind.config.ts
├── shadcn.config.ts
├── tsconfig.json
└── index.html
```

## TODO List

### 1. Planning

- Define style: fonts, colors, vibe
- Write a short, unique bio
- Collect project images and descriptions

### 2. Setup

**Tailwind CSS**

- Follow Tailwind's guide for CRA.

**shadcn/ui Installation**

```bash
npm install tailwindcss-animate
npx shadcn-ui@latest init
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
# Add other components as needed (e.g. avatar, tooltip, etc.)
```

**Framer Motion**

```bash
npm install framer-motion
```

**Icons**

```bash
npm install lucide-react
```

### 3. Build Components

- **Navbar** – anchored links with smooth scroll
- **Hero** – fun intro with animations (emoji, title, name)
- **About** – a short bio with a personality-rich tone
- **Projects** – responsive cards w/ animations & hover
- **Contact** – inline form or social links section

Use shadcn/ui for buttons, cards, and layout styling.

### 4. Animations

- Page and section transitions with Framer Motion
- Hover states for buttons and project cards
- Optional: animated background/cursor trail (like Tedawf)

### 5. Responsive Design

- Ensure proper spacing/scaling for mobile, tablet, desktop
- Use responsive Tailwind utility classes (`sm:`, `md:`, etc.)

### 6. Deployment

- Deploy on Vercel
- Configure custom domain (optional)


## Bonus Features (Optional)

- Dark mode toggle (shadcn/ui provides built-in support)
- Custom cursor or interactive elements
- Easter egg or hidden page
- Now Playing / status widget
- Fun 404 page
