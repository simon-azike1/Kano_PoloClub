# Kano Polo Club Website

## 🏇 A Premium Polo Club Experience Online

Welcome to the official digital home of the **Kano Polo Club** - Nigeria's premier destination for polo excellence, heritage, and world-class sporting experiences. This React-based web application showcases the club's prestigious facilities, rich history, upcoming events, and now features the exquisite **Palazzo Restaurant** - a culinary jewel within our grounds.

![Kano Polo Club Banner](https://via.placeholder.com/1200x400?text=Kano+Polo+Club+Banner)

## ✨ Features

### Core Club Features
- **Hero Section**: Captivating video background showcasing the club's pristine grounds
- **Facilities Grid**: Interactive cards highlighting our world-class polo fields, luxurious clubhouse, training academy, and premium stables
- **Heritage Section**: Beautiful storytelling about our 70+ year legacy since 1950
- **Events Aggregator**: Up-to-date calendar of tournaments and social events
- **Membership Portal**: Seamless application process for prospective members
- **News & Updates**: Latest happenings from the club
- **Tournament Hub**: Dedication**: Specialized section for major polo tournaments
- **Photo Gallery**: Expansive collection of club moments and events
- **Contact Portal**: Easy access to membership inquiries and general questions

### 🍽️ New: Palazzo Restaurant Feature
Our latest addition celebrates the culinary excellence of Palazzo Restaurant:

- **Dedicated Palazzo Page**: Full immersive experience for our fine dining establishment
- **Media Gallery**: 
  - 2 high-quality event videos showcasing Palazzo's vibrant atmosphere
  - 3 stunning images featuring signature dishes and elegant interiors
- **Responsive Design**: Optimized viewing on all devices
- **Smooth Animations**: Framer Motion-powered transitions throughout
- **Clear Call-to-Action**: Prominent reservation and contact buttons
- **Consistent Styling**: Matches the club's premium aesthetic while establishing Palazzo's unique identity

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with Hooks
- **Build Tool**: Vite (for lightning-fast development and builds)
- **Styling**: Tailwind CSS (utility-first approach)
- **Animations**: Framer Motion (for fluid, production-ready animations)
- **Routing**: React Router DOM v6
- **Icons**: Custom SVG icon set
- **State Management**: React Context & useState/useEffect hooks
- **Data Management**: Modular JavaScript exports for content
- **Development**: ESLint for code quality assurance

## 📁 Project Structure

```
KanoPoloClub/
├── .kilo/                    # Kilo configuration (development environment)
│   ├── worktrees/
│   │   └── pacific-countess/
│   │       └── Kano_PoloClub/   # Active worktree (current development branch)
│   │           ├── public/
│   │           │   └── KPC_LOGO.png
│   │           ├── src/
│   │           │   ├── assets/         # Background images
│   │           │   │   ├── bg (2).jpg
│   │           │   │   ├── bg (3).jpg
│   │           │   │   ├── bg (4).jpg
│   │           │   │   ├── bg (5).jpg
│   │           │   │   ├── bg (6).jpg
│   │           │   │   ├── bg (7).jpg
│   │           │   │   ├── bg (8).jpg
│   │           │   │   └── bg.jpg
│   │           │   ├── components/     # Reusable UI components
│   │           │   │   ├── Nav.jsx
│   │           │   │   ├── Footer.jsx
│   │           │   │   ├── ScrollToTop.jsx
│   │           │   │   └── ui/         # Shared UI elements
│   │           │   │       ├── FieldMark.jsx
│   │           │   │       ├── SectionHeading.jsx
│   │           │   │       └── index.js
│   │           │   ├── data/           # Content data modules
│   │           │   │   ├── facilities.jsx
│   │           │   │   ├── benefits.jsx
│   │           │   │   ├── events.jsx
│   │           │   │   ├── palazzo.jsx
│   │           │   │   └── index.js
│   │           │   ├── pages/          # Page components
│   │           │   │   ├── About.jsx
│   │           │   │   ├── Club.jsx
│   │           │   │   ├── Contact.jsx
│   │           │   │   ├── Events.jsx
│   │           │   │   ├── Gallery.jsx
│   │           │   │   ├── Home.jsx
│   │           │   │   ├── Membership.jsx
│   │           │   │   ├── News.jsx
│   │           │   │   ├── Palazzo.jsx
│   │           │   │   └── Tournament.jsx
│   │           │   ├── App.jsx         # Main application component with routing
│   │           │   ├── index.css       # Base styles
│   │           │   └── main.jsx        # React entry point
│   │           ├── index.html          # HTML template
│   │           ├── package.json        # Dependencies and scripts
│   │           ├── vite.config.js      # Vite configuration
│   │           └── vercel.json         # Vercel deployment config
├── README.md               # This file
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/kanopoloclub.git
   cd kanopoloclub
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Visit `http://localhost:5173` to see the application running

### Building for Production
```bash
npm run build
# or
yarn build
```

The optimized build will be in the `dist/` directory.

## 🎨 Design & User Experience

### Visual Identity
- **Color Palette**: Sophisticated blend of deep blues, gold accents, and crisp whites
- **Typography**: 
  - Headings: Elegant serif fonts (for heritage and prestige)
  - Body: Clean sans-serif (for readability and modernity)
- **Motion**: Subtle, purposeful animations that enhance without distracting

### Accessibility
- Semantic HTML structure
- Proper ARIA labels where needed
- Keyboard navigable interface
- Sufficient color contrast ratios
- Responsive design for all device sizes

### Performance Optimizations
- Code splitting via React Router
- Optimized image loading
- Efficient animation rendering with Framer Motion
- Minimal CSS footprint through Tailwind's JIT compiler

## 🍽️ Palazzo Restaurant Feature Details

### Media Content Integrated
The Palazzo section beautifully showcases your provided media:

1. **Video 1**: `palazzo_matgdb.mp4` 
   - Captures the vibrant atmosphere of Palazzo events
   - Features elegant dining settings and social gatherings

2. **Video 2**: `Palazo2_pwri4o.mp4`
   - Showcases culinary preparation and signature dishes
   - Highlights the restaurant's interior design and ambiance

3. **Image 1**: `SnapInsta.to_649225908_17874819423541172_4853945488093788875_n_xdclgj.jpg`
   - Artistic presentation of a signature dish
   - Demonstrates plating excellence and ingredient quality

4. **Image 2**: `SnapInsta.to_649219451_17874819432541172_2637634587384033612_n_tdwe7k.jpg`
   - Elegant table setting during a special event
   - Shows the restaurant's capacity for hosting gatherings

5. **Image 3**: `SnapInsta.to_649174492_17874819531541172_4069904301017711433_n_yjww6t.jpg`
   - Interior shot highlighting the restaurant's design
   - Features lighting, decor, and seating arrangements

### User Journey
1. Visitor clicks "Palazzo" in navigation
2. Lands on immersive hero section with Palazzo ambiance
3. Reads about the restaurant's concept and offerings
4. Explores the gallery with interactive video/image grid
5. Engages with clear CTAs for reservations or inquiries
6. Experiences smooth transitions throughout the journey

## 🤝 Contributing

We welcome contributions to enhance the Kano Polo Club online presence! 

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style (ESlint configured)
- Maintain responsive design principles
- Ensure accessibility compliance (WCAG 2.1 AA)
- Write meaningful commit messages
- Update documentation as needed

## 📄 License

This project is proprietary and confidential to Kano Polo Club. 
All rights reserved. Unauthorized copying, modification, or distribution 
of this project, via any medium, is strictly prohibited.

## 📞 Contact

**Kano Polo Club**
- **Website**: https://www.kanopoloclub.com
- **Email**: info@kanopoloclub.com
- **Phone**: +234 XXXXX XXXX
- **Address**: Kano Polo Club, Kano State, Nigeria

**Palazzo Restaurant**
- **Email**: reservations@palazzo.kanopoloclub.com
- **Phone**: +234 XXXXX XXXX (ext. 102)
- **Location**: Within Kano Polo Club Grounds

---

### zn Special Thanks

This project was developed with passion to showcase the excellence of Kano Polo Club. 
Special recognition to the culinary team at Palazzo Restaurant for providing 
the exquisite media content that brings their venue to life online.

*"Where tradition meets excellence, both on the field and at the table."*

---

**Last Updated**: July 28, 2026  
**Version**: 2.1.0 (with Palazzo Restaurant integration)  

*Built by Vnex digital solution.*
