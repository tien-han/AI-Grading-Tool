import Papa from 'papaparse';

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
 * Checks a file for the ".txt" or ".tsv" extension.
 * 
 * @param {string} fileName name of the file to be checked.
 * @returns boolean: true if ".txt" or ".tsv", false otherwise.
 */
function isTabDelimited(fileName) {
  let extension = fileName.split('.').pop();
  if (extension !== "txt" && extension !== "tsv") {
    return false;
  }
  return true;
}

/**
 * Parses through input rubric and returns an array.
 * 
 * @param {File} file File object containing rubric file.
 */
function parseRubric(file) {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      complete: function(results) {
        resolve(results.data);
      },
      error: function(error) {
        reject(error);
      }
    });
  });
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
  isTabDelimited,
  parseRubric,
  parseStudentQuizzes
};