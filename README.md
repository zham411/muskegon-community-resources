# Muskegon Community Resources

A React web application providing information about food pantries, donation opportunities, and community resources in the Muskegon and Ottawa County areas.

## Features

- **Donation Schedule** - Find where and when to drop off food donations
- **Partner Organizations** - Learn about local food assistance organizations
- **Local Pantries** - Search food pantries by county with hours, locations, and contact info
- **Feeding America Schedule** - Mobile pantry distribution events
- **Really Really Free Market** - Information about monthly community events
- **QR Code Generator** - Generate QR codes to share the app
- **AI Chat Assistant** - Get help finding resources via chat

## Tech Stack

- React 19
- Vite
- Tailwind CSS v4
- React Router
- Lucide React (icons)
- QRCode.react
- Anthropic Claude API (for chat assistant)

## Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd community-resources
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
VITE_ANTHROPIC_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Deployment

This app is configured for deployment on Vercel. After deploying, update the QR code page with your production URL.

## License

MIT
