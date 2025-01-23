import { useState } from 'react'

export default function UploadButton(props) {
  // default 
  const {
    uploadMessage = 'Upload!',
    onChangeType = () => {}
  } = props

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
    <div>
      <input type="file" onChange={{onChangeType}} />
      <button onClick={onFileSubmit}>{uploadMessage}</button>
    </div>
  )
}


