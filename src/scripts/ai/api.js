import { requestCompletionTime } from "./requestTime";
import { printBottomToolbarMessage } from "../ui/bottomToolbar";
import { getGoogleAnswer, displayAIResponse } from "./apiHelpers";

const aiStyles = [
  "js-message--chat",
  "js-message",
  "animate-slide-in",
  "animation-delay-300",
  "py-1",
];  

async function processAPIResponse(userInput) {
  const startTime = Date.now();
  printBottomToolbarMessage("Initiating request...");

  try {
    
    const response = await fetch(getGoogleAnswer(userInput));
    const data = await response.json();
    const answer = JSON.parse(data.answer);
    console.log(answer)
  } catch (error) {
    printBottomToolbarMessage(`Request error: ${error.message}...`);
  } finally {
    requestCompletionTime(startTime);
  }
}

export { processAPIResponse, aiStyles };
