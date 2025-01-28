# AI-Grading-Tool :robot:📝

This should be a living document! If you encounter problems or missing instructions, please add them to this document in a PR.

## Table of Contents

1. [About the Project](#about-the-project)
2. [Local Development](#local-development)
3. [Style Guide](#style-guide)

## About the Project

This repository holds the code written by the team TLDC (Tien Han, Lois Lanctot, Dhiyaa Nazim, Giovan Cervantes) for Green River College's course SDEV 485 (Software Development Capstone 1) for Winter 2025.

**Tech stack**:

- [Node.js](https://nodejs.org/en): Backend (JS)
  - [Express.js](https://expressjs.com/): API routes
  - [nodemon](https://www.npmjs.com/package/nodemon): Auto restart node app
  - [dotenv](https://www.npmjs.com/package/dotenv): Load environment variables
  - [cors](https://www.npmjs.com/package/cors): Provides middleware
  - [groq-sdk](https://www.npmjs.com/package/groq-sdk): Access to Groq API
  - [React.js](https://react.dev/): Frontend (UI components, JS, HTML, CSS)
  - [Vite](https://vite.dev/): frontend build tool
  - [papaparse](https://www.papaparse.com/): javascript parsing package for csv files

## Local Development Environment Setup

1. Clone the project repository locally.
   `git clone https://github.com/tien-han/AI-Grading-Tool.git`
2. Have the package manager `npm` installed ([npm](https://www.npmjs.com/)).
3. In the terminal/command line, navigate to the frontend folder and install all frontend dependencies with `npm install`.
4. Within the same frontend folder, run the project with `npm run dev`.
5. In the terminal/command line, navigate to the backend folder and install all backend dependencies with `npm install`.
6. Within the `backend` folder, rename the file `config.env.example` to `config.env` and enter in the Groq API key. Note: Please request the key from a team member.
7. Within the backend folder, use the `npm run dev` command to run the app backend locally.

## Style Guide

This section is to ensure consistency when adding code to the project.
** TBD BY TEAM **

### Project Structure

- Folder Structure
- Naming files/directories

### Code Formatting

- Documentation
- Variable naming
- Function naming
