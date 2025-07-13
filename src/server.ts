import { fastifyCors } from '@fastify/cors';
import { fastifyMultipart } from '@fastify/multipart';
import { fastify } from 'fastify';
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod';
import { env } from './env.ts';
import { createQuestionRoute } from './http/routes/create-question.ts';
import { createRoomRoute } from './http/routes/create-room.ts';
import { getRoomsRoute } from './http/routes/get-rooms.ts';
import { getRoomQuestionsRoute } from './http/routes/get-rooms-question.ts';
import { uploadAudioRoute } from './http/routes/upload-audio.ts';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: ['http://localhost:5173', 'http://localhost:5174'],
});

app.register(fastifyMultipart, {
  limits: {
    fileSize: 1024 * 1024 * 150, // 150MB
  },
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get('/health', () => {
  return {
    status: 'ok',
  };
});

app.register(getRoomsRoute);
app.register(createRoomRoute);
app.register(getRoomQuestionsRoute);
app.register(createQuestionRoute);
app.register(uploadAudioRoute);

app.listen({ port: env.PORT });
