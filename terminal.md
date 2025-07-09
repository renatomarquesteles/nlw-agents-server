# Terminal commands

- Creates package.json

```
npm init -y
```

- Installs typescript

```
npm i typescript @types/node -D
```

- Creates tsconfig.json

```
npx tsc --init
```

> Get the initial config from `tsconfig/bases` on GitHub

- Installs Fastify to create HTTP server and zod fot data validation

```
npm i fastify @fastify/cors fastify-type-provider-zod zod
```

- Installs Biome.js for code formatting

```
npm i @biomejs/biome -D
```

- Initialize the Ultracite preset for Biome.js

```
npx ultracite init
```

### Docker

- Creates the Docker container for the application following `docker-compose.yml` config

```
docker compose up -d
```

- List containers

```
docker ps [-a]
```

- Check container logs

```
docker logs [container_id] [-f]
```

- Encerrar container

```
docker stop [container_name/id]
```

- Install postgres

```
npm i postgres
```

### Drizzle ORM

- Install Drizzle ORM

```
npm i drizzle-orm
npm i drizzle-kit -D
```

- Generate migrations

```
npx drizzle-kit generate
```

- Run migrations

```
npx drizzle-kit migrate
```

- Open drizzle studio

```
npx drizzle-kit studio
```

- Install Drizzle Seed

```
npm i drizzle-seed -D
```
