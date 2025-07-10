# NLW Agents - Backend

Backend API for NLW Agents project, developed during Rocketseat's NLW (Next Level Week) event.

## 🚀 Project Overview

This is the backend server for the NLW Agents project, a real-time chat application with AI agents. The frontend repository can be found at [nlw-agents-web](https://github.com/renatomarquesteles/nlw-agents-web).

## 🛠 Tech Stack

- **Runtime**: Node.js with TypeScript
- **Framework**: Fastify
- **Database**: PostgreSQL with Drizzle ORM
- **Validation**: Zod
- **Code Quality**: Biome

## 📁 Project Structure

```
src/
├── server.ts          # Main server file
├── env.ts            # Environment validation
├── http/
│   └── routes/       # API routes
└── db/
    ├── connection.ts # Database connection
    └── schema/       # Database schemas
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Docker (optional, for database)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/renatomarquesteles/nlw-agents-server
   cd nlw-agents-server
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   PORT=3333
   DATABASE_URL=postgresql://user:password@localhost:5432/nlw_agents
   ```

4. **Database Setup**

   ```bash
   # Using Docker (recommended)
   docker-compose up -d

   # Or connect to your existing PostgreSQL instance
   ```

5. **Run the application**

   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

## 📡 API Endpoints

- `GET /health` - Health check
- `GET /rooms` - List all chat rooms

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm start` - Start production server
- `npm run db:seed` - Seed database with sample data

### Code Quality

The project uses Biome for code formatting and linting. Configuration is in `biome.jsonc`.
