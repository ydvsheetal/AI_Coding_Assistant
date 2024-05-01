const chatContainer = document.querySelector("#js-chat");


function insertMessage(content) {
  chatContainer.appendChild(content);
}

export { insertMessage };
