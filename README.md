# Professional Developer Portfolio

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- 🚀 Modern React with Vite
- 🎨 Beautiful UI with Tailwind CSS
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🌙 Dark/Light mode toggle
- 🛠 Professional components and layouts
- 🔗 React Router for navigation
- 📞 Contact form with validation
- 📊 Project showcase with filtering

## Tech Stack

- **Framework**: React (Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **HTTP Client**: Axios
- **Icons**: Heroicons
- **Notifications**: React Toastify

## Pages

- **Home**: Hero section, skills, featured projects, experience timeline
- **About**: Professional introduction, skills, technologies, achievements
- **Projects**: Project showcase with filtering and search
- **Contact**: Contact form and information

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

## Folder Structure

```
src/
├── components/         # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProjectCard.jsx
│   ├── SectionTitle.jsx
│   └── ContactForm.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
├── services/           # API services
│   └── api.js
├── data/               # Mock data
│   └── homeData.js
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## API Endpoints

- `GET /api/projects` - Get all projects
- `POST /api/contact` - Send contact message

## Environment Variables

- `REACT_APP_API_BASE_URL` - Base URL for API endpoints

## Deployment

Build the project for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## License

This project is open source and available under the [MIT License](LICENSE).