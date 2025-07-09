### Running TypeScript with Node

To run typescript with node we need to set the flag `--experimental-strip-types` in the scripts at `package.json`.

### Biome.js preset: Ultracite

This project is using the Ultracite preset for Biome.js

### PGVector docker container

It is an extension of PostgreSQL that allows you to store and search vectors (numbers) efficiently in the database.

PGVector's docker image is a practical way to run PostgreSQL with vector support, ideal for AI projects, semantics and modern applications that use embeddings.

In the file `docker/setup.sql` that is configured in the `docker-compose.yml` we run a SQL to make sure that vector is enabled.
