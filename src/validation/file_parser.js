/**
 * Checks a file for the ".csv" extension.
 * 
 * @param {string} fileName name of the file to be checked.
 * @returns boolean: true if ".csv", false otherwise.
 */
function isCsv(fileName) {
  let extension = fileName.split('.').pop();
  if (extension !== "csv") {
    return false;
  }
  return true;
}

/**
 * Parses through input rubric, breaking
 * it down into editable pieces.
 * 
 * @param {string} filePath path to file containing rubric.
 */
function parseRubric(filePath) {
  // Needs to break down the rubric into editable pieces
}

/**
 * Reads through a CSV file representing student quiz responses and parses
 * relevant information to feed to the AI Model.
 *
 * @param {File} file the uploaded CSV file.
 * @returns {JSON} a JSON file that can be displayed on the front end.
 */
function parseStudentQuizzes(file) {
  console.log(file)
  // Create document object/list
  // Create a student quiz response object
  // Read through each line in the document
  const fileReader = new FileReader();

  fileReader.readAsText(file);

  // Pull out headers
  // For each row, instantiate and hydrate a student quize response object

  return
}

export {
  isCsv,
  parseStudentQuizzes
};