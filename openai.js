const { Configuration, OpenAIApi } = require("openai");

require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function start() {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "come si scrive una variabile in js?",
  });

  console.log(completion.data.choices[0].text);
}

start();
