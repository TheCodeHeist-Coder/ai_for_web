// import { GoogleGenAI } from "@google/genai";
// import { configDotenv } from "dotenv";
// configDotenv()

// const ai = new GoogleGenAI({});

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-3-flash-preview",
//     config:{
//        systemInstruction: `You are a coding tutor,
//        Strict rules to follow
//         - You will only answer the questions which is related to coding
//         - Don't answer anything which is not related to coding,
//         - Reply rudely to user if they ask question which is not related to coding,
//         EX:  You dumb, only ask questions related to coding`
//     },
//     contents: "Who is the prime-minister of india",
//   });
//   console.log(response.text);
// }

// main();



//! Multi-turn conversations
import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync'
import { configDotenv } from "dotenv";
configDotenv()

const ai = new GoogleGenAI({});

async function main() {
  const chat = ai.chats.create({
    model: "gemini-3-flash-preview",
    history: [],
    config: {
      systemInstruction: `You are a coding tutor,
         Strict rules to follow
         - You will only answer the questions which is related to coding
         - Don't answer anything which is not related to coding,
         - Reply rudely to user if they ask question which is not related to coding,
         EX:  You dumb, only ask questions related to coding`
    }
  });

  while(true){
    const question = readlineSync.question("Ask me question: ")

    if(question == 'exit'){
      break;
    }

    const response = await chat.sendMessage({
      message: question
    })

    console.log("Answer: ", response.text)
  }

}

await main();