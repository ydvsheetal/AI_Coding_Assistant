import { saveChatHistory, clearChatHistory } from "../chat/chatHistory";
import { printBottomToolbarMessage } from "./bottomToolbar";
import { processCommand } from "../chat/chatCommands";
import { downloadChatHistory } from "../chat/downloadChat";

const chatContainer = document.querySelector("#js-chat");
const chatInput = document.querySelector("textarea");
const copyButton = document.querySelector("#js-copy-btn");
const saveButton = document.querySelector("#js-save-btn");
const clearButton = document.querySelector("#js-clear-btn");
const helpButton = document.querySelector("#js-help-btn");
const downloadButton = document.querySelector("#js-download-btn");

function displayTemporaryMessage(el, buttonText, message) {
  const originalText = el.innerHTML;
  el.textContent = "✔︎ " + buttonText; // temporary messaging within el
  printBottomToolbarMessage(message);

  setTimeout(() => {
    el.innerHTML = originalText;
  }, 600);
}


copyButton.addEventListener('click', async () => {
  try {
    const recentCodeBlock =chatContainer.lastChild;
    const textToCopy = recentCodeBlock.textContent; // Get the text content
    await navigator.clipboard.writeText(textToCopy); // Copy to clipboard

  } catch (err) {
    console.error('Failed to copy content:', err); // Optional error handling
  }
  displayTemporaryMessage(
        copyButton,
        "Copied",
        "Copied latest code snippet...",
      );
});



saveButton.addEventListener("click", () => {
  saveChatHistory(); // saves to localStorage
  displayTemporaryMessage(saveButton, "Saved", "Chat saved to workspace...");
});

downloadButton.addEventListener("click", () => {
  downloadChatHistory();
  displayTemporaryMessage(downloadButton, "", "Downloaded current chat...");
});

helpButton.addEventListener("click", () => {
  processCommand("disclaimer");
  processCommand("help");
});



clearButton.addEventListener("click", () => {
  if (chatContainer.lastChild) {
    chatContainer.removeChild(chatContainer.lastChild);
  }
    displayTemporaryMessage(
      clearButton,
      "Cleared",
      "Chat deleted from workspace...",
    );
  });
