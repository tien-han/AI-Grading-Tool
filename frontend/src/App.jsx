import "./styles/App.css";
import UploadButton from "./components/fileUpload.jsx";
import React, { useState } from "react";

function App() {
  const [response, setResponse] = useState("");

  async function fetchModelResponse() {
    const res = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          rubric: "If the student says hi then they get an A",
          studentResponses: "hi"
        }),
    });
    if (!res.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
    const data = await res.json();
    console.log(data.result);
    return data.result;
  }
  
  async function getGrades() {
      try {
          const modelResponse = await fetchModelResponse();
          setResponse(modelResponse);
      } catch (error) {
          console.error("Error fetching data:", error);
      }
  };

  return (
    <>
      <div id="right">
        <h1>AI Grading Tool</h1>
        <UploadButton fileType="rubric" uploadMessage="Upload Rubric!" />
        <UploadButton fileType="csv" uploadMessage="Upload CSV!" />
      </div>
      <div id="left">
        <button id="send-msg" onClick={getGrades}>Get Grades</button>
        <div id="response">{response}</div>
      </div>
    </>
  );
}

export default App;
