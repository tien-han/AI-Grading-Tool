import { isCsv, isTabDelimited, parseRubric, parseStudentQuizzes } from "../validation/file_parser.js";
import { useState } from "react";

export default function UploadButton() {
  const onFileSubmit = () => {
    //todo: add the function to submit both files to the AI
  };

  return (
    <div>
      <button onClick={onFileSubmit}>Run AI</button>
    </div>
  );
}
