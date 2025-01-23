import './App.css'
import { isCsv, isTabDelimited, parseRubric, parseStudentQuizzes } from './validation/file_parser.js'
import { useState } from 'react'
import UploadButton from './components/fileUpload.jsx'

function App() {
  

  return (
    <>
      <div id="right">
        <h1>AI Grading Tool</h1>
        <UploadButton onChangeType={'onRubricSelect'} uploadMessage={'Upload Rubric!'}></UploadButton>
        <UploadButton onChangeType={'onFileSelect'}></UploadButton>
      </div>
      <div id="left"></div>
    </>
  )
}

export default App
