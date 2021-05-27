# 11 Express.js: Note Taker

##

create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.


## Story


AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete


## Getting Started

The application has a a `db.json` file on the back end that will be used to store and retrieve notes using the `fs` module.

The following HTML routes are created:

* `GET /notes` returns the `notes.html` file.

* `GET *`  returns the `index.html` file.

The following API routes were created:

* `GET /api/notes` reads the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` recieves a new note to save on the request body and adds it to the `db.json` file, and then returns the new note to the client.


### Technical Criteria: 

* Satisfies all of the preceding acceptance criteria plus the following:

  * Application front end connects to an Express.js back end.

  * Application back end storenotes with unique IDs in a JSON file.

  * Application is deployed to Heroku.


### Deployment:

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository contains application code.


### Application Quality: 

* Application console is free of errors.


### Repository Quality:

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality README file with description, screenshot, and link to deployed application.


## Heroku link

[https://peaceful-stream-04613.herokuapp.com/]
