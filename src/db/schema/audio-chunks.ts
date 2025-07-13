import { pgTable, text, timestamp, uuid, vector } from 'drizzle-orm/pg-core';
import { rooms } from './rooms.ts';

export const audioChunks = pgTable('audio_chunks', {
  id: uuid().primaryKey().defaultRandom(),
  roomId: uuid()
    .references(() => rooms.id)
    .notNull(),
  transcript: text().notNull(),
  embeddings: vector('embeddings', { dimensions: 768 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
