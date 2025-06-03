import { Groq } from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
});

export const generateNewsSummary = async (content: string): Promise<string> => {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "Eres un asistente especializado en resumir noticias en español. Genera resúmenes concisos y objetivos.",
        },
        {
          role: "user",
          content: `Resume esta noticia en 2-3 párrafos: ${content}`,
        },
      ],
      model: "mixtral-8x7b-32768",
      temperature: 0.3,
      max_tokens: 500,
    });

    return completion.choices[0]?.message?.content || "No se pudo generar el resumen.";
  } catch (error) {
    console.error("Error generating AI summary:", error);
    return "No se pudo generar el resumen.";
  }
};