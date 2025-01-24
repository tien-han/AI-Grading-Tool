import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config({
    path: "./config.env"
});

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const groq = new Groq({ apiKey: GROQ_API_KEY });

const getModelResponse = async (req, res) => {
    const {rubric, studentResponses} = req.body;
    const modelResponse = await promptModel(rubric, studentResponses);
    if(modelResponse.choices.length > 0) {
        const result = modelResponse.choices[0]?.message?.content || "";
        res.status(200).send({
            result
        });
    } else {
        res.status(404).send({
            message: `Model response not returned...`
        });
    }
}

async function promptModel(rubric, studentResponses) {
    
    return await groq.chat.completions.create({
        messages: [
            // This is where we define the models role
            {
                role: "system",
                content: "You are a grading assistant for instructors. Your job is to take in a rubric and/or grading instructions and apply them to students written responses to questions. You'll need to grade the responses accordingly and provide reasoning for each students grade.",
            },
            // This is the user, this is where provide the prompt
            {
                role: "user",
                content: `Here are is the rubric: ${rubric}, Here are the questions and the students responses: ${studentResponses}`,
            },
        ],
        // Where we select the model
        model: "llama-3.3-70b-versatile",
        max_completion_tokens: 100,
        temperature: 0.2
    });
}

export {
    getModelResponse
}