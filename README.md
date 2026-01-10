# Kilangi Ecommerce Homepage

A responsive ecommerce homepage for Kilangi, showcasing products, reviews, and a hero section with modern frontend styling.

## Features

- Hero banner with call-to-action and gradient overlay
- Product showcase with hover effects and image galleries
- Customer reviews section with testimonial cards
- Responsive design for mobile and desktop
- Sticky navigation header
- Gift notes section with interactive cards
- Ethos and Future sections with side-by-side layouts
- Footer with multi-column layout

## Frontend Styling & Design System

### Color Palette
- **Primary Green**: `#004733` - Used for buttons, links, and brand accents
- **Peach**: `#f9e6df` - Header middle section background
- **Cream**: `#fff7f0` - Main background color
- **Text**: `#2b241f` - Primary text color
- **Muted Text**: `#6a5b50` - Secondary text color
- **Border**: `#e3cfc2` - Subtle borders and dividers

### Typography
- **Font Family**: System UI fonts (system-ui, -apple-system, Segoe UI, Arial, sans-serif)
- **Line Height**: 1.5 for body text, 1.2 for headings
- **Font Sizes**: Responsive scaling from 11px (small text) to 32px (section headings)

### Layout & Spacing
- **Container Width**: Max 1120px centered
- **Padding**: 24px horizontal padding on sections
- **Grid Systems**: CSS Grid for product grids, flexbox for navigation and cards
- **Responsive Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### CSS Architecture
- **CSS Variables**: Custom properties for colors, spacing, and responsive values
- **Component-Based**: Modular styles for cards, buttons, sections
- **Hover Effects**: Smooth transitions on interactive elements
- **Aspect Ratios**: Consistent image ratios using CSS aspect-ratio property
- **Border Radius**: 16px for cards, 999px for pill-shaped elements

### Key Sections & Styling

#### Header
- Sticky navigation with 3-row layout
- Top strip with promotional text and icons
- Search bar with rounded input
- Logo and action buttons

#### Hero Section
- Full-width banner with gradient overlay
- Responsive aspect ratios (16:9 desktop, 4:3 tablet, 1:1 mobile)
- Overlay text with call-to-action

#### Product Sections
- Grid layouts (3 columns desktop, 2 tablet, 1 mobile)
- Card hover effects with transform and shadow
- Image containers with background gradients
- Price styling with old price strikethrough

#### Gift Notes Section
- 2-column layout with large portrait image
- 2x2 grid of interactive cards
- Aspect ratio 1:1.3 for card images
- Button hover states

#### Ethos & Future Sections
- Side-by-side image and text layouts
- Responsive stacking on mobile
- Icon grids with consistent spacing

#### Reviews Section
- 4-column testimonial grid (responsive)
- Star ratings and customer photos
- Hover effects on cards

#### Footer
- 4-column layout with brand information
- Gradient background
- Link hover animations

## Technologies Used

- **HTML5**: Semantic markup with accessibility considerations
- **CSS3**: Modern CSS with Grid, Flexbox, and CSS Variables
- **JavaScript**: Basic interactivity (minimal for this static site)

## How to Run

1. Open `index.html` in a web browser.
2. Alternatively, use a local server for better performance:
   - Install a simple HTTP server (e.g., via Python: `python -m http.server`)
   - Navigate to the project directory and run the server
   - Open `http://localhost:8000` in your browser

## Project Structure

- `index.html`: Main homepage file with all sections
- `style.css`: Comprehensive stylesheet (1188 lines) with design system
- `script.js`: JavaScript for any interactive features
- `images/`: Directory containing all product, hero, and UI images
- `logo-kilangi.png`: Brand logo
- `product-image.png`: Main product image
- `README.md`: This documentation file

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design tested on various screen sizes

## Performance Considerations

- Optimized images with proper alt text
- CSS variables for efficient theming
- Minimal JavaScript for fast loading
- Semantic HTML for better SEO

## License

This project is licensed under the MIT License.

## Deployment

