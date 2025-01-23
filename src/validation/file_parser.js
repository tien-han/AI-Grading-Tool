import {  QuestionResponse, StudentQuiz } from './classes.js'
import Papa from 'papaparse'

/**
 * Checks a file for the ".csv" extension.
 * 
 * @param {string} fileName name of the file to be checked.
 * @returns boolean: true if ".csv", false otherwise.
 */
function isCsv(fileName) {
  let extension = fileName.split('.').pop()
  if (extension !== 'csv') {
    return false
  }
  return true
}

/**
 * Checks a file for the ".txt" or ".tsv" extension.
 * 
 * @param {string} fileName name of the file to be checked.
 * @returns boolean: true if ".txt" or ".tsv", false otherwise.
 */
function isTabDelimited(fileName) {
  let extension = fileName.split('.').pop()
  if (extension !== "txt" && extension !== "tsv") {
    return false
  }
  return true
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
        resolve(results.data)
      },
      error: function(error) {
        reject(error)
      }
    })
  })
}

/**
 * Reads through a CSV file representing student quiz responses and parses
 * relevant information to feed to the AI Model.
 *
 * @param {File} file the uploaded CSV file.
 * @returns {JSON} a JSON file that can be displayed on the front end.
 */
function parseStudentQuizzes(file) {
  // Create document object/list
  let quiz = []
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function(results) {
        // Filter the headers so that we only get the quiz questions
        const headers = []
        for (const header of results.meta['fields']) {
          if (header.includes(':')) {
            headers.push(header)
          }
        }

        const allRows = results.data

        // For each row, if a column is a student's response to a question,
        // create a Question Response object to send to the model.
        for (const row of allRows) {
          // Collect all student quiz responses
          let studentResponses = []

          // Since a row is an object, we can use the headers as keys to get the
          // student's response.
          for (const header of headers) {
            const quizResponse = new QuestionResponse(header, row[header])
            studentResponses.push(quizResponse)
          }

          studentResponses = new StudentQuiz(studentResponses)
          quiz.push(studentResponses)
        }
        resolve(results.data)
      },
      error: function(error) { //Executed after file parsing is completed
        reject(error)
      }
    })
  })
}

export {
  isCsv,
  isTabDelimited,
  parseRubric,
  parseStudentQuizzes
}