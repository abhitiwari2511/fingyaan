# FinGyaan - Financial Education Platform

## Overview

FinGyaan is a comprehensive financial education platform designed to help users manage their finances, explore investment opportunities, learn about financial concepts, and discover government schemes. The application features a modern UI with interactive components and secure authentication.

## Features

- **User Authentication**: Secure signup and login functionality with JWT token-based authentication
- **Dashboard**: Central hub with access to all platform features
- **Expense Tracker**: Monitor and visualize spending patterns
- **Investment Advice**: Personalized investment strategies based on user goals
- **Government Schemes**: Information about financial schemes offered by the government
- **Learning Resources**: Educational materials to enhance financial literacy

## Technology Stack

### Frontend
- **Framework**: React 19 with TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS with custom components
- **UI Components**: Shadcn UI components
- **HTTP Client**: Axios
- **Visual Effects**: React TSParticles

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma with Accelerate extension
- **Authentication**: JWT (JSON Web Tokens)
- **Password Security**: bcrypt for password hashing

## Project Structure

### Frontend Structure
```
frontend/
├── src/
│   ├── components/      # Reusable UI components
│   ├── components/ui/   # Shadcn UI components
│   ├── components/magicui/ # Animation components
│   ├── pages/           # Application routes
│   ├── lib/             # Utility functions
│   └── App.tsx          # Main application component
```

### Backend Structure
```
backend/
├── src/
│   ├── controllers/     # Request handlers
│   ├── middlewares/     # Custom middleware functions
│   ├── routes/          # API route definitions
│   ├── utils/           # Helper functions and utilities
│   ├── app.ts           # Express app configuration
│   └── index.ts         # Application entry point
├── prisma/              # Prisma schema and migrations
│   └── schema.prisma    # Database schema definition
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL database
- npm or yarn package manager

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/fingyaan.git
    cd fingyaan
    ```

2. **Setup Backend**
    ```bash
    cd backend
    npm install
    
    # Setup environment variables (create a .env file with the following)
    # DATABASE_URL="your_postgres_connection_string"
    # CLIENT_URL="client_url"
    # PORT=your_port
    # JWT_SECRET="your_jwt_secret"
    # JWT_EXPIRY="day"
    # REFRESH_TOKEN_SECRET="your_refresh_token_secret"
    # REFRESH_TOKEN_EXPIRY="day"
    
    # Run Prisma migrations
    npx prisma migrate dev
    
    # Start the development server
    npm run dev
    ```

3. **Setup Frontend**
    ```bash
    cd ../frontend
    npm install
    
    # Create a .env file with the following
    # VITE_BACKEND_URL="your_backend_url"
    
    # Start the development server
    npm run dev
    ```

## API Endpoints

### Authentication
- `POST /api/v1/users/signup` - Register a new user
- `POST /api/v1/users/login` - Authenticate a user
- `POST /api/v1/users/logout` - Log out a user (protected)
- `POST /api/v1/users/me` - Refresh access token

## Security Features

- HTTP-only cookies for JWT tokens
- Password hashing with bcrypt
- Protected routes with JWT authentication
- Token refresh mechanism

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

Shadcn UI for beautiful UI components
React TSParticles for visual effects
Tailwind CSS for styling
Prisma for database ORM
JWT for authentication
Special thanks to all contributors who have helped shape this project