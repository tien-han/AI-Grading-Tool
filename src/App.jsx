import './App.css'
import { isCsv, isTabDelimited, parseRubric, parseStudentQuizzes } from './validation/file_parser.js'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  // Manage the state of the selected file, which starts as "null" since a user has not uploaded anything
  const [selectedFile, setSelectedFile] = useState(null);

  // When a file is selected, check that it's a CSV and update the state
  const onFileSelect = (event) => {
    const uploadedFile = event.target.files[0]

    // If the file extension is CSV, update the state to hold this file
    if (isCsv(uploadedFile.name)) {
      setSelectedFile({
        selectedFile: uploadedFile
      })
    } else {
      // If the file extension is not CSV, don't continue
      // TO-DO @Dhiyaa & @Lois
      alert("File extension is not CSV")
    }
  }

  // Used to test rubric upload and parsing
  const onRubricSelect = (event) => {
    const uploadedFile = event.target.files[0]

    // Prints results of the parsing to the console
    async function testParser(file) {
      const data = await parseRubric(file);
      console.log(data);
    }

    if (isTabDelimited(uploadedFile.name)) {
      testParser(uploadedFile);
    } else {
      alert("File extension is not .txt or .tsv")
    }
  }

  //When a file is uploaded (submit is clicked), perform validation
  const onFileSubmit = () => {
    parseStudentQuizzes(selectedFile.selectedFile)
  }

  return (
    <>
      <h1>AI Grading Tool</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <input type="file" onChange={onFileSelect} />
        <button onClick={onFileSubmit}>Upload!</button>
      </div>
      <div>
        <input type="file" onChange={onRubricSelect} />
        <button onClick={onFileSubmit}>Upload Rubric</button>
      </div>
    </>
  )
}

export default App
