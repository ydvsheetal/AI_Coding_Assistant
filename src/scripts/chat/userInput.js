import { commandsList, processCommand } from "../chat/chatCommands";
import { processAPIResponse } from "../ai/api";

const userStyles = [
  "js-message",
  "js-message--chat",
  "js-message--user",
  "animate-slide-in",
  "animation-delay-300",
  "py-1",
  "text-slate-500",
  "dark:text-slate-300",
];

const messageEl = document.querySelector("#js-toolbar-message");
const userInput = document.querySelector("#js-user-input");
const textarea = document.querySelector("#js-user-form");

textarea.addEventListener("submit", (event) => {
  event.preventDefault();
  const input=userInput.value;
  // insertMessage(input);
  // console.log("\n")
  const currentInputValue = userInput.value.toLowerCase().trim();
  commandsList.includes(currentInputValue)
    ? processCommand(currentInputValue)
    : processAPIResponse(currentInputValue);

  userInput.value = "";
  messageEl.textContent = "";
});

export { userStyles };
