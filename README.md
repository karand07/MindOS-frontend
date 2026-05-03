# MindOS Frontend

MindOS is a "Second Brain" application that helps you store, organize, and retrieve your digital content in one centralized place. Save your favorite documents, photos, tweets, and YouTube videos, and easily share your collections with others.

This repository contains the frontend implementation for MindOS, built with modern web technologies to ensure a fast, responsive, and intuitive user experience.

## Features

- 🧠 **Second Brain:** A centralized dashboard to view and search all your saved digital content.
- 🔐 **Authentication:** Secure user signup and signin flows.
- 🗂️ **Content Organization:** Dedicated pages to view and manage specific content types:
  - Documents
  - Photos
  - Tweets
  - YouTube Videos
- 🔗 **Shareable Brain:** Generate a unique link (`/share/:hash`) to share your curated digital collection with others.
- 🔍 **Search:** Instantly filter and find your saved content on the dashboard.
- ✏️ **Content Management:** Modals to effortlessly create, edit, and delete items.

## Tech Stack

The frontend is built utilizing the following core technologies:

- **Framework:** [React 19](https://react.dev/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

## Project Structure

```
src/
├── api/            # API integration and configuration
├── auth/           # Authentication related components/views
├── components/     # Reusable UI components (Cards, Modals, Buttons, etc.)
├── hooks/          # Custom React hooks (e.g., useContent)
├── icon/           # Icon assets or custom icon components
├── layout/         # Application layout structures (Sidebar, Navbar)
├── pages/          # Main application pages (Dashboard, ShareBrainPage, etc.)
└── social/         # Social integration utilities
```

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd MindOS-frontend
   ```

2. **Install dependencies:**
   Using npm:
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the root directory and add the necessary environment variables. (e.g., your backend API URL).
   ```env
   VITE_API_URL=http://localhost:3000/api/v1
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## Scripts

- `npm run dev`: Starts the development server using Vite.
- `npm run build`: Compiles TypeScript and builds the application for production.
- `npm run lint`: Runs ESLint to analyze the code for potential errors.
- `npm run preview`: Previews the built production application locally.
