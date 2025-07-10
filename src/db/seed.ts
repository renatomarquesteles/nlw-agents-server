import { reset, seed } from 'drizzle-seed';

import { db, sql } from './connection.ts';
import { schema } from './schema/index.ts';

await reset(db, schema);

await seed(db, schema).refine((f) => ({
  rooms: {
    count: 20,
    columns: {
      name: f.companyName(),
      description: f.loremIpsum(),
      createdAt: f.date({
        minDate: new Date('2025-01-01'),
        maxDate: new Date('2025-01-10'),
      }),
    },
  },
  questions: {
    count: 50,
    columns: {
      question: f.loremIpsum(),
      answer: f.loremIpsum(),
      createdAt: f.date({
        minDate: new Date('2025-01-11'),
        maxDate: new Date('2025-01-20'),
      }),
    },
  },
}));

await sql.end();
