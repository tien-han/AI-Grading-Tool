import "./styles/App.css";
import UploadButton from "./components/fileUpload.jsx";
import { useState } from "react";

function App() {
  const [response, setResponse] = useState("Your results will show up here!");

  // Manage the state of the selected files
  const [selectedRubricData, setSelectedRubricData] = useState(null);
  const [selectedStudentData, setSelectedStudentData] = useState(null);

  // fetch call to our backend
  async function fetchModelResponse() {
    const res = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        rubric: selectedRubricData,
        studentResponses: selectedStudentData
      }),
    });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
    const data = await res.json(); // This is a JS object
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
    <div className="row">
      <div className="column left" id="upload-container">
        <h1>AI Grading Tool</h1>
        <UploadButton fileType="rubric" uploadMessage="Upload Rubric!" setSelectedRubricData={ setSelectedRubricData }/>
        <UploadButton fileType="csv" uploadMessage="Upload CSV!" setSelectedStudentData={ setSelectedStudentData } />
      </div>
      <div className="column right" id="get-grades-container">
        <button id="send-msg" onClick={getGrades} >Get Grades</button>
        <div id="ai-response">
          <pre>{response}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
