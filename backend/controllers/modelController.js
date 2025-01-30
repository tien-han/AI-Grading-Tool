import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config({
    path: "./config.env"
});

// API key stored in the config.env file
const GROQ_API_KEY = process.env.GROQ_API_KEY;
const groq = new Groq({ apiKey: GROQ_API_KEY });

/**
 * Handles a POST request by passing necessary files from the 
 * request body to the promptModel function. The response from
 * the model is processed and returned to the client.
 * 
 * @param {*} req The request object
 * @param {*} res The response object
 */
const getModelResponse = async (req, res) => {
    // The rubric and student responses will be sent in the body
    // of the post request.
    const {rubric, studentResponses} = req.body;
    const modelResponse = await promptModel(rubric, studentResponses);

    // Checks that the model sent a response back
    if(modelResponse.choices.length > 0) {
        // Seperates the models response from the other data that 
        // gets returned.
        const result = modelResponse.choices[0]?.message?.content;
        res.status(200).send({
            result
        });
    } else {
        res.status(404).send({
            message: `Model response not returned...`
        });
    }
}

/**
 * This function sends a prompt to an AI model, returning
 * it's response.
 * 
 * @param {*} rubric - The grading rubric the model will use as 
 *                     context for student response evaluation.
 * @param {*} studentResponses - The students responses to the
 *                               questions.
 * @returns The response from the AI model
 */
async function promptModel(rubric, studentResponses) {
    return await groq.chat.completions.create({
        messages: [
            // This is where we define the models role
            {
                role: "system",
                content: `You are a grading assistant for instructors. Your job is to take in a
                    rubric and/or grading instructions and apply them to students written
                    responses to questions. You'll need to grade the responses accordingly and
                    provide reasoning for each students grade.`,
            },
            // This is the user, this is where we provide the prompt
            {
                role: "user",
                content: `Here is the grading rubric: ${rubric}. Here are the questions and the
                    students responses: ${studentResponses}. Each student's responses are enclosed
                    in curly braces {}. Each item in the curly braces holds both the question being asked
                    (usually starting with a 9 digit value with a colon and a question prompt), and
                    the students response to that particular question following right after.
                    Your response must only generate a valid JSON object that must be formatted
                    for an API backend recipient. Do not use markdown in this response.`,
            },
        ],
        // Where we select the model
        model: "llama-3.3-70b-versatile",
        // Number of words the model can return
        max_completion_tokens: 500,
        // Basically the randomness of the model
        // High temp = more random
        temperature: 0.2
    });
}

export {
    getModelResponse
}