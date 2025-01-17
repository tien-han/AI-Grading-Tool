
/**
 * Checks a file for the ".csv" extension.
 * 
 * @param {string} fileName name of the file to be checked.
 * @returns boolean: true if ".csv", false otherwise.
 */
function isCsv(fileName) {
    let extension = fileName.split('.').pop();
    if(extension !== "csv") {
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

export {
    isCsv
};