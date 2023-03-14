require("dotenv").config();

const text = "hey la, come va la vita?";

async function start() {
  const { ChatGPTAPI } = await import("chatgpt");

  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const res = await api.sendMessage(text);
  console.log(res.text);
}

start();
