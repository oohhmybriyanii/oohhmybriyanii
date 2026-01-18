# BlazeStack

A blazing-fast fullstack starter template powered by Vite, React, Shadcn UI, and Node.js. Perfect for building modern, scalable web applications with beautiful UI and efficient backend APIs.

## Features

### Backend (Express + MongoDB + TypeScript)
- **Express.js** - Fast, unopinionated web framework
- **MongoDB with Mongoose** - Elegant MongoDB object modeling
- **TypeScript** - Type-safe JavaScript
- **Authentication** - Secure cookie-based JWT authentication
- **Authorization** - Role-based access control
- **Validation** - Request validation using express-validator
- **Error Handling** - Centralized error handling
- **Logging** - Logging using Winston
- **Security** - Helmet for security headers
- **CORS** - Cross-Origin Resource Sharing with credentials

### Frontend (React + TypeScript + Vite)
- **React 19** - Latest React version
- **TypeScript** - Type-safe code
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautifully designed components
- **React Router** - Client-side routing
- **React Hook Form** - Form validation
- **Zod** - Schema validation
- **Axios** - HTTP client

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
2. Install dependencies for both client and server:

```bash
npm run install:all
```

3. Create a `.env` file in the server directory based on `.env.example`:

```bash
cp server/.env.example server/.env
```

4. Update the `.env` file with your MongoDB connection string and JWT secret

### Development

Start both the client and server in development mode:

```bash
npm start
```

This will start:
- Client at http://localhost:5173
- Server at http://localhost:5000

### Building for Production

```bash
npm run build
```

## Project Structure

```
blazestack/
├── client/             # React frontend
│   ├── src/            # Source files
│   │   ├── components/ # UI components
│   │   ├── contexts/   # React contexts
│   │   ├── services/   # API services
│   │   └── ...
├── server/             # Express backend
│   ├── src/            # Source files
│   │   ├── config/     # Configuration files
│   │   ├── controllers/# Route controllers
│   │   ├── middleware/ # Custom middleware
│   │   ├── models/     # MongoDB models
│   │   ├── routes/     # API routes
│   │   └── ...
└── package.json        # Root package.json for scripts
```

## Authentication System

The authentication system uses secure HTTP-only cookies for storing JWT tokens, providing:

1. **Enhanced Security** - HTTP-only cookies prevent JavaScript access to tokens
2. **CSRF Protection** - SameSite cookie attribute helps prevent CSRF attacks
3. **Automatic Token Handling** - Cookies are automatically sent with requests

### Authentication Flow
1. User signs in or registers through the frontend
2. Server validates credentials and returns a JWT token in an HTTP-only cookie
3. Frontend stores user information in React context
4. Protected routes check authentication status
5. Logout clears the cookie and the context
