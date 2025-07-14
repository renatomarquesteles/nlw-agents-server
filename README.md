# NLW Agents - Backend

Backend API for NLW Agents project, developed during Rocketseat's NLW (Next Level Week) event.

## 🚀 Project Overview

This is the backend server for the NLW Agents project. The frontend repository can be found at [nlw-agents-web](https://github.com/renatomarquesteles/nlw-agents-web).

## 🛠 Tech Stack

- **Runtime**: Node.js with TypeScript
- **Framework**: Fastify
- **Database**: PostgreSQL with pgvector extension
- **ORM**: Drizzle ORM
- **Validation**: Zod
- **AI Integration**: Google Generative AI
- **Code Quality**: Biome
- **File Upload**: Fastify Multipart

## 📁 Project Structure

```
src/
├── server.ts              # Main server file
├── env.ts                # Environment validation
├── http/
│   └── routes/           # API routes
│       ├── create-room.ts
│       ├── get-rooms.ts
│       ├── get-rooms-question.ts
│       ├── create-question.ts
│       └── upload-audio.ts
├── db/
│   ├── connection.ts     # Database connection
│   ├── seed.ts          # Database seeding
│   ├── schema/          # Database schemas
│   │   ├── rooms.ts
│   │   ├── questions.ts
│   │   └── audio-chunks.ts
│   └── migrations/      # Database migrations
└── services/            # Business logic services
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database with pgvector extension
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
   DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
   GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_api_key_here
   ```

4. **Database Setup**

   ```bash
   # Using Docker (recommended)
   docker-compose up -d

   # Run database migrations
   npm run db:migrate

   # Seed database with sample data
   npm run db:seed
   ```

5. **Run the application**

   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

## 📡 API Endpoints

### Health Check

- `GET /health` - Health check endpoint

### Rooms

- `GET /rooms` - List all chat rooms
- `POST /rooms` - Create a new chat room
  ```json
  {
    "name": "Room Name",
    "description": "Room description"
  }
  ```

### Questions

- `GET /rooms/:roomId/questions` - Get all questions for a specific room
- `POST /rooms/:roomId/questions` - Create a new question in a room
  ```json
  {
    "question": "Your question here"
  }
  ```

### Audio Upload

- `POST /upload-audio` - Upload audio file for processing
  - Content-Type: `multipart/form-data`
  - Field: `audio` (audio file)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm start` - Start production server
- `npm run db:seed` - Seed database with sample data
- `npm run db:generate` - Generate new database migrations
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Drizzle Studio for database management

### Database Management

The project uses Drizzle ORM with PostgreSQL and pgvector extension for vector operations:

```bash
# Generate new migration
npm run db:generate

# Apply migrations
npm run db:migrate

# Open Drizzle Studio
npm run db:studio
```

### Code Quality

The project uses Biome for code formatting and linting. Configuration is in `biome.jsonc`.

## 🐳 Docker

The project includes a Docker Compose setup for PostgreSQL with pgvector:

```bash
# Start PostgreSQL with pgvector
docker-compose up -d

# Stop the database
docker-compose down
```

## 🔑 Environment Variables

| Variable                       | Description                  | Required           |
| ------------------------------ | ---------------------------- | ------------------ |
| `PORT`                         | Server port                  | No (default: 3333) |
| `DATABASE_URL`                 | PostgreSQL connection string | Yes                |
| `GOOGLE_GENERATIVE_AI_API_KEY` | Google AI API key            | Yes                |

## 📝 API Testing

Use the provided `api.http` file to test the API endpoints with REST Client extension in VS Code.
