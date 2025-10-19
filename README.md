# Polardrive Tech AS

A premium online dealership website for luxury vehicles and high-performance motorcycles in Oslo, Norway.

## Overview

Polardrive Tech AS is a modern, responsive website built with React and Vite, showcasing an exclusive collection of premium motorcycles and luxury cars. The website provides a seamless browsing experience with detailed vehicle information, financing options, and easy contact methods.

## Features

- **Homepage**: Dynamic hero section with featured vehicles and company highlights
- **Motorcycles Section**: Browse sport bikes, cruisers, adventure bikes, and custom builds
- **Luxury Cars Section**: Explore premium sedans, SUVs, sports cars, and electric vehicles
- **About Page**: Company history, team profiles, and core values
- **Contact Page**: Multiple contact methods, interactive form, and location map
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions

## Technology Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Routing**: React Router DOM 7
- **Icons**: React Icons 5
- **Styling**: Custom CSS with modern design principles
- **Code Quality**: ESLint for code linting

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/polardrive-tech.git
cd polardrive-tech
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
polardrive-tech/
├── public/
│   ├── images/          # Vehicle and brand images
│   └── logo/            # Brand logos and favicons
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── SEO.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Bikes.jsx
│   │   ├── Cars.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Main app component with routing
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Key Pages

### Home (`/`)
Dynamic landing page featuring hero slider, featured vehicles, company values, testimonials, and call-to-action sections.

### Motorcycles (`/bikes`)
Comprehensive motorcycle catalog with categories (Sport, Cruiser, Adventure, Custom), detailed specifications, pricing, and filtering options.

### Luxury Cars (`/cars`)
Premium car collection organized by type (Sedans, SUVs, Sports Cars, Electric), with detailed information and comparison features.

### About Us (`/about`)
Company background, team profiles, milestones, and core values that define Polardrive Tech AS.

### Contact (`/contact`)
Multiple contact methods including phone, email, physical location, business hours, interactive contact form, and embedded map.

## Customization

### Adding New Vehicles

Edit the respective page files (`src/pages/Bikes.jsx` or `src/pages/Cars.jsx`) and add vehicle objects to the `featuredBikes` or `featuredCars` arrays:

```javascript
{
  id: 1,
  name: 'Vehicle Name',
  price: 299900,
  engine: '2.0L Turbo',
  power: '300 HP',
  image: '/images/vehicle.jpg',
  features: ['Feature 1', 'Feature 2']
}
```

### Updating Contact Information

Update the contact details in:
- `src/pages/Contact.jsx`
- `src/components/Footer.jsx`
- `src/components/SEO.jsx`

### Styling

Global styles are in `src/index.css`. Customize the CSS variables in the `:root` selector to change colors, spacing, and other design elements.

## SEO Optimization

The website includes:
- Dynamic meta tags for each page
- Structured data (JSON-LD) for search engines
- Semantic HTML markup
- Optimized Open Graph and Twitter Card tags
- Canonical URLs

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lazy loading for images
- Code splitting with React Router
- Optimized bundle size with Vite
- Responsive images for different screen sizes

## Contact Information

**Polardrive Tech AS**
- Address: Storgata 1, 0155 Oslo, Norway
- Phone: +47 12 34 56 78
- Email: info@polardrivetechas.com
- Website: https://polardrivetechas.com

## License

This project is proprietary software. All rights reserved.

## Acknowledgments

- Design inspiration from leading automotive dealerships
- Icons provided by React Icons
- Fonts from Google Fonts (Manrope)
