# Memories Project

## Description
- This is a simple web app that allows any user to upload photos and a short description of their favorite memories for friends and family to see. This project is intended to be used for learning purposes only. It was created by coding along with Javascript Mastery's Full Stack MERN course on YouTube.

## Technologies
- React
- Redux
- Express
- Node
- MongoDB
- Mongoose
- Material UI

## Installation
Create a project directory

`mkdir project-name`

Enter the project directory

`cd project-name`

Clone the repository

`git clone https://github.com/Personal-Library/jm-memories-proj.git`

Change into server directory

`cd server`

Install dependencies for server side

`npm install`

Leave server directory, change into client directory

`cd ..`

`cd client`

Install dependencies for client side

`npm install`

Start either client or server side with the following

`npm start`

## Notes
- If running on your own machine, make sure to adjust the client side url at /client/api/index.js to the port that you will be running the backend on.
- Server side is set to run on port 5000 by default. In the .env, make sure to include the URI to your MongoDB cluster, with your specificed username/key.

## Usage
The user will be able to submit photos and a short description of various memories, and have them stored on the database for viewing at any time.

## Contributing
This project is no longer being maintained. You are welcome to modify and distribute any versions as you please. Or follow along at with Javascript Mastery's code along by [clicking here](https://www.youtube.com/watch?v=ngc9gnGgUdA)

## License
MIT License
