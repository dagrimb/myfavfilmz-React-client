# myfavfilmz-client

myfavfilmz is a the client-side of a Single Page Application built on the MERN stack, using the React.js library for the User Interface. The API was for built with Node.js and Express and the database with MongoDB (for more information regarding this side of the application, please visit https://github.com/dagrimb/myfavfilmz-api).

This application exists to allow movie fans the ability to register for an account and create a list of their favorite movies. Users are also able to find out more about these favorite movies, such as details about a movie's genre, director and score on Rotten Tomatoes. The API's endpoints and corresponding structure allows the following user behavior (with components views that can be found in the "src/components" folder in parentheses):
  * New users are able to register for a new account with a username, password, email address and birthday (RegistrationView)
  * Existing users are able to log into their accounts with their username and password (LoginView) to do the following: 
    * Search and View a list of all movies in the movies collection with the ability to add or remove movies to/from their list of favorites from this view (MoviesList/MovieCard)
    * Navigate to appropriate page (MovieView) to view the following information:
      * Movie Synopsis Details (MovieView): A brief synopsis of the movie, what year it was released, and it's rating on Rotten Tomatoes.
      * Movie Director Details (DirectorView): A brief bio, birth year, death year (if applicable) of the movie's director
      * Movie Genre Details (GenreView): A brief description of the movie's genre
    * Navigate to their user profile via a link on the user navigation bar (NavigationBar) in order to do the following:
      * View their existing user information (ProfileView) as well as the movies the movies in their list of favorites (FaveMovies)
      * Remove movies from their list of favorites (FaveMovies)
      * Edit the afforementioned user information via a form or dialog (ProfileEdit)
      * Delete their account (ProfileEdit)
  * **Note**: These are all rendered by the root DOM element and the MainView component
 
<img src="https://user-images.githubusercontent.com/74441727/155784983-f811e586-b07b-4c8d-98a7-c4f51522e939.png" width=1000>

TECHNOLOGIES USED
* React.js: a popular component-based, declarative, user-friendly, easy-to-maintain JavaScript UI library used to work with well with data via server-side endpoints with MVC (Model-View-Controller) architecture by housing its data and "State" and "Props" (please start with https://reactjs.org/ for more information on this library).
  * It uses JSX, a JavaScript extension, to enable HTML to work together with JavaScript code. All React elements are JSX elements and all components that contain React logic have a .jsx extension.
  * React Bootstrap: a React-specific offshoot of vanilla Bootstrap.js that, like React, is component-based, providing such interactive UI abilities and gizmos as cards, dropdowns, forms, grids, modals, pagination styling and responsiveness.
  * React Router: for enabling routing for navigation between component views when necessary
  * React Redux: a React library used to manage and centralize state and make logic easier to test, minimizing complexity by making state updates to the store using actions and reducers (for more information, please see: https://react-redux.js.org/)
* Parcel: the used for transpiling and building everything in the application
* Babel: transpiles JSX into JavaScript
* Axios library: to perform AJAX operations

SETTING UP THE DEVELOPMENT ENVIRONMENT: What you will need
* A computer with a web browser (ideally Google Chrome so, as someone how may like to look under the hood of the application, one can take advantage of the React and React Redux Developer tools Google has made available).
* Wifi or a LAN connection
* A terminal (MacOS) or Command Line Interface (CLI, for PC users).
* Code Editor (if you are to engage and experiment with the code on your own)
  * Recommended: Visual Studio Code (one of the best to use with React)

DEPENDENCIES/LIBRARIES NEEDED (Note: This is not an exhaustive list of dependencies. Please refer to the **package.lock.json"** for a detailed list of dependencies in order to re-build the app)
* Babel: transpiles JSX into JavaScript
* Parcel: for transpiling and bundling everything in the application (it is what instructs Babel to carry this out). Parcel makes things organized and readable by taking the seprate component files that the JSX is written in and bundles them to one JavaScript file (the .js file in the "dist" folder).

WHAT YOUR **package.json** SHOULD LOOK LIKE

{
  "name": "myfavfilmz-client",
  "version": "1.0.0",
  "description": "",
  "homepage": "https://dagrimb.github.io/myfavfilmz-client",
  "scripts": {
    "dev": "parcel src/index.html"
  },
  "dependencies": {
    "axios": "^0.21.1",
    "bootstrap": "^4.6.0",
    "postcss": "^8.2.15",
    "prop-types": "^15.7.2",
    "react": "^16.14.0",
    "react-bootstrap": "^1.5.2",
    "react-dom": "^16.14.0",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-router-redux": "^5.0.0-alpha.9",
    "redux": "^4.1.0",
    "redux-devtools-extension": "^2.13.9",
    "redux-form": "^8.3.7",
    "redux-promise": "^0.6.0",
    "redux-thunk": "^2.3.0"
  },
  "devDependencies": {
    "@parcel/transformer-sass": "^2.0.0-beta.2",
    "parcel": "^2.0.0-beta.2"
  },
  "default": "src/index.html",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/dagrimb/myfavfilmz-client.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/dagrimb/myfavfilmz-client/issues"
  }
}

DOWNLOADS/INSTALATIONS (to avoid issues, please follow this guide in the specific order laid out)
* Git
  * If you are using Windows 8.1 or higher, please install Git Bash 
* Creating your package.json file: type the **npm init** command in the main project (i.e. "myfavfilmz-client") directory
* Parcel
  * Should be installed globally so that you can use it for future React projects (if you have already installed it for previous React projects, please see information about checking the version below to see if you need to update yours. If you have the correct version installed globally you will *not* need to re-install it): **npm install -g parcel@next**
  * To check what version you have installed, run the following command: **parcel --version**. If you do not have have version 2 installed, then please do to avoid incompatibility errors. Please see https://docs.google.com/document/d/1RbFKYM3DaCm5zXSydJtpfcJBjXle7EbeGYxelFDl7os/edit for instructions.
* React: in the myfavfilmz-client project folder in your terminal, run the following commands to install dependencies and packages
  * React & React DOM: **npm install --save react react-dom**
  * React Router: **yarn add react-router-dom**
  * React Bootstrap: **npm install --save react-bootstrap**
  * React Redux: **npm install redux --save**
  * React Redux Devloper Tools: **npm install --save redux-devtools-extension**
* Axios: **npm install axios --save**
* Prop-Types: **npm install --save prop-types**

TO RUN THE PROJECT
* Run the client application using parcel: **myfavfilmz-client/src/index.html** (if this does not work, please try **npm run dev**)
  * index.html serves as the entry point of the application

Built By: David Grimberg

