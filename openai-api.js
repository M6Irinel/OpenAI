const openai = require("openai-api");
const prompt = "Ciao!";

require("dotenv").config();

const openaiInstance = new openai(process.env.OPENAI_API_KEY);

openaiInstance
  .complete({
    engine: "text-davinci-003",
    prompt: prompt,
    maxTokens: 1024,
    n: 1,
    stop: null,
    temperature: 0.5,
  })
  .then((response) => {
    console.log(response.data.choices[0].text);
  })
  .catch((err) => {
    console.log(err);
  });
