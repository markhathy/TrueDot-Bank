
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIAssistance = async (prompt: string, context: any) => {
  try {
    const systemInstruction = `
      You are GanacheGPT, a world-class Ethereum development assistant. 
      The user is working with a local Ganache instance (Chain ID 1337, Hardfork: Shanghai).
      Provide technical, concise, and helpful advice on smart contracts, transactions, and blockchain concepts.
      Current Chain Context: ${JSON.stringify(context)}
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm sorry, I couldn't process that request right now. Make sure your environment is configured correctly.";
  }
};
