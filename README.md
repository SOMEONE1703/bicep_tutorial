# Simple Node Web App

A minimal Node.js web application that serves static files and a small API endpoint. Designed for learning, prototyping, and small demos.

## Features
- Lightweight HTTP server (Express or built-in http)
- Serves static HTML/CSS/JS
- Example JSON API endpoint
- Easy to run and extend

## Prerequisites
- Node.js (LTS recommended)
- npm or yarn

## Installation
1. Clone the repo or create a new project folder
2. Install dependencies:
    - npm: `npm install`
    - yarn: `yarn`

## Usage
- Start the server:
  - npm: `npm start`
  - or: `node server.js`
- Open http://localhost:3000 in your browser

## Project structure (suggested)
- package.json
- server.js (or index.js)
- /public
  - index.html
  - styles.css
  - app.js
- /routes (optional)
- /api (optional)

## Development
- Add routes or middleware in server.js
- Serve additional static assets under /public
- Use nodemon for automatic restarts during development

## License
MIT (or choose your preferred license)