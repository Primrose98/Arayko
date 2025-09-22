# Overview

This is a Teacher's Day appreciation webpage built as a full-stack web application. The project creates a personalized digital card experience with warm visuals, interactive elements, and emotional content to make teachers feel appreciated and valued. The application features animated flowers, floating particles, inspirational quotes, and student messages, all designed to create a heartfelt and memorable experience.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side uses **React 18** with **TypeScript** as the primary framework. The application is built using **Vite** as the build tool and development server, providing fast hot module replacement and optimized builds. Component styling is handled through **Tailwind CSS** with a custom design system configured for warm, educational themes using pastel colors and elegant typography.

The UI component library is built on **Radix UI primitives** with **shadcn/ui** components, providing accessible and customizable interface elements. The application uses **React Router (wouter)** for client-side routing, though currently only implements a single-page experience.

State management is handled through **TanStack Query (React Query)** for server state management and caching, with local React state for component-level interactions. Custom hooks like `useIntersectionObserver` provide reusable functionality for scroll-based animations and visibility detection.

## Backend Architecture
The server is built with **Express.js** and **TypeScript** using ES modules. The architecture follows a clean separation of concerns with dedicated modules for routing, storage, and development tooling.

The storage layer implements an interface-based approach with `IStorage` defining CRUD operations. Currently, it uses in-memory storage (`MemStorage`) for development, but the interface allows for easy swapping to persistent storage solutions.

The server includes development-specific middleware for request logging, error handling, and Vite integration during development. In production, it serves static files and provides API endpoints.

## Data Storage Solutions
The project is configured for **PostgreSQL** with **Drizzle ORM** as the database layer. Database configuration uses **Neon Database** serverless driver for scalable PostgreSQL hosting. The schema is defined in TypeScript with Zod validation integration for type-safe database operations.

Currently implements a basic user schema with username/password authentication structure. Database migrations are managed through Drizzle Kit with configurations for both development and production environments.

## Authentication and Authorization
Basic authentication structure is in place with user creation and retrieval capabilities. The current implementation uses session-based authentication with `connect-pg-simple` for PostgreSQL session storage. Password handling and authentication logic are prepared but not fully implemented in the current codebase.

## Development and Build Process
The project uses a monorepo structure with shared TypeScript configurations and path aliases. Build process involves Vite for client-side bundling and esbuild for server-side compilation. The development environment includes hot module replacement, error overlays, and development banners when running in Replit.

TypeScript configuration provides strict type checking with shared types between client and server through the `/shared` directory. Path aliases simplify imports and maintain clean code organization.

# External Dependencies

## UI and Styling
- **Radix UI**: Complete set of unstyled, accessible UI primitives for building the interface
- **Tailwind CSS**: Utility-first CSS framework with custom color palette and design tokens
- **Lucide React**: Icon library providing consistent iconography throughout the application
- **Class Variance Authority**: Utility for creating variant-based component APIs
- **Embla Carousel**: Touch-friendly carousel component for potential image galleries

## Database and ORM
- **Neon Database Serverless**: PostgreSQL-compatible serverless database platform
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL dialect support
- **Drizzle Zod**: Integration between Drizzle and Zod for schema validation

## Development and Build Tools
- **Vite**: Next-generation frontend build tool with HMR and optimized bundling
- **esbuild**: Extremely fast JavaScript/TypeScript bundler for server-side code
- **TSX**: TypeScript execution engine for development server running

## State Management and Data Fetching
- **TanStack React Query**: Powerful data synchronization and caching for server state
- **React Hook Form**: Performant forms library with minimal re-renders
- **Hookform Resolvers**: Validation resolvers for integrating with validation libraries

## Session and Security
- **Connect PG Simple**: PostgreSQL session store for Express sessions
- **Express Session**: Session middleware for user authentication state

## Replit Integration
- **Replit Vite Plugins**: Development experience enhancements including cartographer, dev banner, and runtime error modal for Replit environment