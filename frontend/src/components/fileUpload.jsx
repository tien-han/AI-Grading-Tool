import { isCsv, isTabDelimited, parseRubric, parseStudentQuizzes } from "../helpers/file_handling/file_parser.js";
import { useState } from "react";

export default function UploadButton(props) {
  // Default props
  const { uploadMessage = "Upload!", fileType = "csv" } = props;

  // Manage the state of the selected file
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle file selection for rubric and csv
  const onFileSelect = async (event) => {
    const uploadedFile = event.target.files[0];

    // If the file extension is CSV, update the state to hold this file
    if (fileType === "csv" && await isCsv(uploadedFile)) {
      const quizData = await parseStudentQuizzes(uploadedFile); 
      console.log(quizData);

    } 
    else if (fileType === "rubric" && isTabDelimited(uploadedFile.name)) {
      // Prints results of the parsing to the console
      const rubricData = await parseRubric(uploadedFile);
      console.log(rubricData);
    } 
    else {
      if (fileType === "csv") {
        alert("File is not CSV");
      } else {
        alert("File extension is not .txt or .tsv");
      }
      
    }
  };

  return (
    <div className="upload-container">
      {uploadMessage}
      <input type="file" id="uploadBtn" onChange={onFileSelect} />
      {/* <label htmlFor="uploadBtn">Upload</label>  */}
      {/* For some reason ^^^ <label> will not let me upload a CSV */}
    </div>
  );
}
