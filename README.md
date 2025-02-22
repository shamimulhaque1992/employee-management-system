# Employee Management System

**Author:** Khandoker Shamimul Haque  
**Live Demo:** [https://employee-management-system-rts.vercel.app/](https://employee-management-system-rts.vercel.app/)

## Overview

A modern, responsive Employee Management System built with React, TypeScript, and Tailwind CSS. This application provides a robust interface for managing employee data with both table and card views, featuring dark mode support and responsive design.

## Key Features

- **Multiple View Options**
  - Card View: Grid-based layout for visual representation
  - Table View: Detailed information with sorting and responsive columns
  - Detailed Employee View: Comprehensive employee information

- **Dark Mode Support**
  - System-wide dark mode toggle
  - Persistent theme preference
  - Smooth transitions between themes

- **Responsive Design**
  - Mobile-first approach
  - Adaptive layouts for different screen sizes
  - Collapsible sidebar for better space utilization

- **Advanced UI Features**
  - Loading skeletons with dark mode support
  - Toast notifications for actions
  - Confirmation modals for destructive actions
  - Form validation with Zod
  - Responsive data tables with horizontal scrolling

- **Data Management**
  - CRUD operations for employee records
  - Search functionality
  - Real-time updates
  - Error handling with user feedback

## Performance Optimizations

1. **Code Splitting**
   - Route-based code splitting
   - Lazy loading of components
   - Dynamic imports for better initial load time

2. **State Management**
   - Efficient React state updates
   - Optimized re-renders using proper component structure
   - Controlled component updates

3. **Asset Optimization**
   - Responsive images
   - Optimized icon imports from Lucide React
   - CSS optimization with Tailwind

4. **UI/UX Optimizations**
   - Skeleton loaders for better perceived performance
   - Debounced search inputs
   - Optimized table rendering for large datasets
   - Progressive loading of content

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS
- Vite
- React Router DOM
- React Hook Form
- Zod
- Axios
- React Hot Toast
- Lucide React Icons

## Local Development Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/shamimulhaque1992/employee-management-system.git
   cd employee-management-system
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

4. **Build for Production**
   ```bash
   npm run build
   ```

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/          # Reusable components
├── pages/              # Page components
├── hooks/              # Custom hooks
├── types/              # TypeScript types
├── assets/            # Static assets
└── App.tsx            # Root component
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
