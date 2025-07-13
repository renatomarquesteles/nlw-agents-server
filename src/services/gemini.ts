import { GoogleGenAI } from '@google/genai';
import { env } from '../env.ts';

const gemini = new GoogleGenAI({
  apiKey: env.GEMINI_API_KEY,
});

const model = 'gemini-2.5-flash';

export async function transcribeAudio(audioAsBase64: string, mimeType: string) {
  const response = await gemini.models.generateContent({
    model,
    contents: [
      {
        text: "Transcribe the following audio. Be as accurate as possible. Keep the punctuation and the words as they are. Divide the text into paragraphs when it's necessary.",
      },
      {
        inlineData: {
          mimeType,
          data: audioAsBase64,
        },
      },
    ],
  });

  if (!response.text) {
    throw new Error('Failed to transcribe audio');
  }

  return response.text;
}

export async function generateEmbeddings(text: string) {
  const response = await gemini.models.embedContent({
    model: 'text-embedding-004',
    contents: [
      {
        text,
      },
    ],
    config: {
      taskType: 'RETRIEVAL_DOCUMENT',
    },
  });

  if (!response.embeddings?.[0]?.values) {
    throw new Error('Failed to generate embeddings');
  }

  return response.embeddings[0].values;
}

export async function generateAnswer(
  question: string,
  transcriptions: string[]
) {
  const context = transcriptions.join('\n\n');

  const prompt = `
  Based on the text provided below as context, answer the question clearly and accurately.

  Context:
  ${context}

  Question:
  ${question}

  Instructions:
  - Use only information contained in the context sent
  - If the answer is not in the context, answer that there is not enough information to answer the question
  - Be objective and direct in the answer
  - Keep an educational and professional tone
  - Name relevant excerpts from the context if appropriate
  `.trim();

  const response = await gemini.models.generateContent({
    model,
    contents: [
      {
        text: prompt,
      },
    ],
  });

  if (!response.text) {
    throw new Error('Failed to generate answer');
  }

  return response.text;
}
