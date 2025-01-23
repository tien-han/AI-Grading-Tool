import "./App.css";
import UploadButton from "./components/fileUpload.jsx";

function App() {
  return (
    <>
      <div id="right">
        <h1>AI Grading Tool</h1>
        <UploadButton fileType="rubric" uploadMessage="Upload Rubric!" />
        <UploadButton fileType="csv" uploadMessage="Upload CSV!" />
      </div>
      <div id="left"></div>
    </>
  );
}

export default App;
