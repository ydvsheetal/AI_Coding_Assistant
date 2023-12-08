import { insertMessage } from './insertMessage';
import { commandsArray, commandHandler } from '../chat/chatCommands';

export const userStyles = [
	'js-message--chat',
	'js-message',
	'js-message--user',
	'animate-slide-in',
	'animation-delay-300',
	'py-1',
	'text-slate-500',
	'dark:text-slate-300',
];

const userInput = document.querySelector('#js-user-input');
const form = document.querySelector('#js-user-form');
const messageEl = document.querySelector('#js-toolbar-message');

form.addEventListener('submit', event => {
	event.preventDefault();
	insertMessage('div', userInput.value, null, 'user');

	if (commandsArray.includes(userInput.value)) {
		commandHandler(userInput.value);
	} else {
		randomMessage();
	}

	userInput.value = '';
	messageEl.textContent = '';
});

// temporary
function randomMessage() {
	const messages = [
		() => insertMessage('pre', exampleCSS, 'css'),
		() => insertMessage('div', 'Hello, testing some written text here...'),
		() => insertMessage('pre', exampleHTML, 'html'),
		() => insertMessage('pre', exampleJS, 'js'),
		() => insertMessage('pre', examplePython, 'python'),
		() => insertMessage('div', 'Hello World :)..'),
		() => insertMessage('div', 'This is a command', null, 'command'),
	];
	messages[Math.floor(Math.random() * messages.length)]();
}

const exampleHTML = `<div>
	<input
		class="appearance-none peer option-input"
		type="radio"
		id="radio-explain"
		name="options"
		value="explain"
		checked />
	<label
		for="radio-explain"
		class="option-label group">
		<span class="option-radio scale-0 group-hover:scale-100">
			<i class="fa-solid fa-check"></i>
		</span>
		<span class="xs:text-4xl text-xl"><i class="fa-solid fa-comment-dots"></i></span>
		<span>Explain</span>
	</label>
</div>`;

const exampleCSS = `/* Prism syntax highlighting style overrides */

code,
pre,
code[class*='language-'],
pre[class*='language-'] {
	word-break: break-word;
	border-radius: 0px;
	font-size: 12px;
	font-family: 'Source Code Pro', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace';
	padding: 0.5rem;
	background-color: #fcf7ff;
	overflow: auto;
}

pre > code,
pre[class*='language-'] > code {
	box-shadow: none;
	border: none;
	background: none;
}`;

const exampleJS = `(function () {
	const savedTheme = localStorage.getItem('theme');
	if (savedTheme) {
		root.classList.toggle('dark', savedTheme === 'dark');
	}
})();`;

const examplePython = `num = float(input("Enter a number: "))
if num >= 0:
   if num == 0:
       print("Zero")
   else:
       print("Positive number")
else:
   print("Negative number")
`;
