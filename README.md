# Project_MEANskills
A web application based off of the MEAN stack that matches users with classes and skills, helping you find the optimal project team members

---

## Setup and Dependencies
This project was built in the Ubuntu Xenial 16.04 LTS Linux environment, and was built on
- Node.js v8.9.1
- ExpressJS NPM package v4.16.2
- Body-Parser NPM package v1.18.2
- JQuery v1.12.4
- MongoDB Official Driver NPM package v2.2.33

#### On Linux/Mac
  - You can acquire **Node.js** from *nodejs.org* or through the command line using *apt-get*. Verify installation using *node -v* on command line.
  - To acquire the other packages, you will need **npm** (the Node Package Manager), which comes pre-installed with Node.js. To verify its installation, you can run *npm -v* on command line.
  - Install required Node.js Packages (all listed in package.json under 'dependencies'):
  ```
  npm install
  ```
  - Install MongoDB locally on you machine (follow the relevant installation instructions on MongoDB's website)

#### On Windows
  - You can install **Node.js** directly from their website using their installer. Afterwards, you can perform the same Linux/Mac verification and package installation steps (displayed above) by using Windows command prompt or PowerShell

---

## Application Execution
#### On Linux/Mac/Windows
  To run the server on Linux/Mac/Windows command line, you can use *node server.js* in the project's root directory. It runs the webserver on port 8080 by default. The server also checks that your MongoDB server is online before running, else it throws an error and fails startup. Make sure you have started your MongoDB server (see MongoDB's website for installation instructions relevant to your system) _**before**_ running server.js.

  Once this is done, you may simply pop open your favorite web browser and enter "localhost:8080" (or whichever port you launched the server in), and the webpage should be properly displayed.
  
---

## Directory Structure
#### */*
  - This directory is the project root directory, and contains the following files and folders.
    1. /log/
    1. /public/
    1. /server.js
    1. /util/
#### */log/*
  - This directory contains log files generated by the server while it is running.
#### */public/*
  - This directory contains all web pages and files to be served by server.js upon request, and contains the following:
    1. /css/ - webpage css directory
    1. /js/ - webpage javascript directory
    1. /index.html - login/front-facing portal page
  - Any added HTML files can go directly in /public
#### */server.js*
  - This file comprises the MEAN stack webserver that will be serving all requests with relevant endpoints.
#### */util/*
  - This directory contains various utility files for server.js, and includes
    1. settings.js - file containing core server settings
    1. logger.js - a server utility that allows server.js to log various events to logfiles in the /log/ directory
    1. route_handlers.js - a collection of endpoint handler callbacks to service the different requests coming to the server for various endpoints.

---

## Using the MEANserver
#### Endpoint Creation
  - Endpoints are declared in **server.js**. To create an endpoint having a URI of "*/someEndpoint*", the express.js **app.get()** or **app.post()** methods can be used (depending on your desired request type). By using one of these methods, you can effectively associate an endpoint name (i.e. "*/someEndpoint*") with a handler function to service any requests to it. The available handler functions are imported from the **handle_map** object within **route_handlers.js**. Let's assume that you expect this endpoint to receive POST requests. Therefore, after creating a handler function "*someEndpointHandler*" in the **handle_map** to service your request, associating it is simply done in **server.js** using the line
  ```javascript
  app.post("/someEndpoint", handles.someEndpointHandler);
  ```
#### Adding Webpages
  - You can add new webpages to the server by first assigning an endpoint to serve the page (see the **Endpoint Creation** section for more details). Afterwards, you can place your webpage files in the relevant sections of the **/public** directory.

---

## Stable Endpoint Map
#### Description
  - This section lists and describes the **stable** endpoints (i.e. whose functions and endpoint names are no longer subject to change by much). All webpages within the server can use these endpoints to perform their designated functions.

#### Endpoints
###### "/" - Root
  - Serves requests going out to the server root (i.e. localhost:8080, if using default settings)

###### "/login" - Service Login
  - This endpoint services any login POST requests and expects the {TBD} JSON object to be passed via the request header's data section. This can be done using **utility.js**'s **post()** function (or JQuery.ajax() if you know how to use it).

###### "/writeNewDoc"
  - This endpoint services POST requests to write a new document to a given collection in the database.
  
###### "/findCollections"
  - This endpoint services POST requests to acquire a list of collections from the database

###### "/findDoc"
  - This endpoint services POST requests to acquire a list of documents from a given database collection that match given search criteria

###### "/deleteOneDoc"
  - This endpoint services POST requests to remove (at most) one document from a given database collection that matches given search criteria

###### "/deleteManyDocs"
  - This endpoint services POST requests to remove all documents from a given database collection that matches given search criteria

###### "updateOneDoc"
  - This endpoint services POST requests to update (at most) one document from a given database collection that matches given search criteria

---

## Release Notes
- Currently working on increasing the depthf of all endpoint description details
