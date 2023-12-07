const copyButton = document.querySelector('#js-copy-btn');
const downloadButton = document.querySelector('#js-download-btn');
const clearButton = document.querySelector('#js-clear-btn');
const chatContainer = document.querySelector('#js-chat');
const chatInput = document.querySelector('textarea');

clearButton.addEventListener('click', () => {
	const messages = chatContainer.querySelectorAll('.js-response');
	messages.forEach(el => el.remove());
	chatInput.value = '';
	displayTemporaryMessage(clearButton, 'Cleared');
});

downloadButton.addEventListener('click', () => {
	chatInput.value = 'Adding feature soon...';
	displayTemporaryMessage(downloadButton, 'Coming Soon');
});

copyButton.addEventListener('click', () => {
	const codeBlocks = chatContainer.querySelectorAll('pre');
	const recentCodeBlock = codeBlocks[codeBlocks.length - 1];

	navigator.clipboard
		.writeText(recentCodeBlock?.textContent || 'No code blocks detected')
		.then(() => {
			displayTemporaryMessage(copyButton, 'Copied');
		});
});

function displayTemporaryMessage(el, message) {
	const originalText = el.innerHTML;
	el.textContent = '✔︎ ' + message;
	setTimeout(() => {
		el.innerHTML = originalText;
	}, 600);
}
