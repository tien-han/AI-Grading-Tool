import UploadButton from "./components/fileUpload.jsx";
import AIButton from "./components/submitFiles.jsx";


function App() {
  return (
    <>
      <header className="header">
        <h1>AI Grading Tool</h1>
      </header>
      <div className="split-screen">
        <div className="left">
          <h1>AI Results</h1>
          <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus aliquam bibendum porttitor; diam himenaeos dictum felis lorem. Mauris platea vehicula erat lacus elit quis consequat proin. Velit ornare iaculis mi nibh taciti urna. Ut pretium pretium id quis aliquam. Libero laoreet fames vivamus, morbi parturient integer vulputate! Natoque nam mus id ornare molestie cursus metus. Iaculis dignissim dictum et ullamcorper pellentesque justo.</p>
        </div>
        <div className="right">
          <h2>AI Grading Tool</h2>
          <UploadButton fileType="rubric" uploadMessage="Upload Rubric"/>
          <UploadButton fileType="csv" uploadMessage="Upload CSV"/>
          <AIButton />
        </div>
      </div>
    </>
  );
}

export default App;
