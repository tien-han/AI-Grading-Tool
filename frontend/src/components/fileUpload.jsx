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
    if (fileType === "csv" && isCsv(uploadedFile.name)) {
      setSelectedFile(uploadedFile); 
      console.log("CSV file selected:", uploadedFile.name);
    } 
    else if (fileType === "rubric" && isTabDelimited(uploadedFile.name)) {
      // Prints results of the parsing to the console
      const data = await parseRubric(uploadedFile);
      console.log(data);
    } 
    else {
      if (fileType === "csv") {
        alert("File extension is not CSV");
      } else {
        alert("File extension is not .txt or .tsv");
      }
      
    }
  };

  // When a file is uploaded (submit is clicked), perform validation
  const onFileSubmit = () => {
    if (fileType === "csv") {
      parseStudentQuizzes(selectedFile); 
    } 
  };

  return (
    <div>
      <input type="file" onChange={onFileSelect} />
      <button onClick={onFileSubmit}>{uploadMessage}</button>
    </div>
  );
}
