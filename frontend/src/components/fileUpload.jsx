/* eslint-disable react/prop-types */
import { isCsv, isTabDelimited, parseRubric, parseStudentQuizzes } from "../helpers/file_handling/file_parser.js";
import { useState } from 'react';

export default function UploadButton(props) {
  // Default props
  const { uploadMessage = "Upload!", fileType = "csv", setSelectedRubricData, setSelectedStudentData } = props;
  const [fileName, setFileName] = useState("");

  // Handle file selection for rubric and csv
  const onFileSelect = async (event) => {
    const uploadedFile = event.target.files[0];
    console.log(uploadedFile)

    if (fileType === "csv" && await isCsv(uploadedFile)) {
      const quizData = await parseStudentQuizzes(uploadedFile);
      setSelectedStudentData(quizData)
    } 
    else if (fileType === "rubric" && isTabDelimited(uploadedFile.name)) {
      const rubricData = await parseRubric(uploadedFile);
      setSelectedRubricData(rubricData)
    } 
    else {
      if (fileType === "csv") {
        alert("File is not CSV");
      } else {
        alert("File extension is not .txt or .tsv");
      }
    }
    setFileName(uploadedFile.name)
  };

  return (
    <div className="upload-container">
      <h3>{uploadMessage}</h3>
      {fileName}
      <label>Select File <input type="file" name="uploadBtn" id="uploadBtn" onChange={onFileSelect} /></label>
    </div>
  );
}
