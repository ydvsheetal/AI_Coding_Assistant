import { insertMessage } from "../chat/insertMessage";

// const API_KEY = process.env.API_KEY;

const apiKey = process.env.apiKey
const cseId = process.env.cseId

function createNodeFromString(answer) {
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(answer, 'text/html');
    // Assuming there's only one top-level element in the HTML string
    return parsedHtml.body.firstChild;
}

// Example usage:


// Now you can append this node to the document or manipulate it further

function displayAIResponse(answer) {
    const node = createNodeFromString(answer);
    insertMessage(node);
  }

  




// Function to perform the Google search and extract the answer
async function getGoogleAnswer(userInput) {
    // console.log(userInput)
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cseId}&q=${encodeURIComponent(userInput)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Check if search results are available
        if (data.items && data.items.length > 0) {
            // Extract the answer from the first search result
            const answer = data.items[0].snippet;
            // console.log("inside gse func")
            // console.log(answer)
            displayAIResponse(answer)
            return answer;
        } else {
            return "Sorry, I couldn't find an answer to your query.";
        }
    } catch (error) {
        console.error('Error performing Google search:', error);
        return "An error occurred while fetching the answer.";
    }

}


// async function query(data) {
// 	const response = await fetch(
// 		"https://api-inference.huggingface.co/models/google/flan-t5-base",
// 		{
// 			headers: { Authorization: "Bearer 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" },
// 			method: "POST",
// 			body: JSON.stringify(data),
// 		}
// 	);
// 	const result = await response.json();
// 	return result;
// }

// query({"inputs": "The answer to the universe is"}).then((response) => {
// 	console.log(JSON.stringify(response));
// });




export { displayAIResponse,getGoogleAnswer };
