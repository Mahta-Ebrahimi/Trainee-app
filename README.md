# Project Title

### Trainer app

<br>

## About the Project:
The Trainer mobile app gets some data about the available classes with some details from the [Trainer API](http://localhost:4000) as backend.
In the app, people can log in as users. After login there is a sign up button with the option to leave the classes. 
There is also a page that shows the classes that the user has selected, with the date and time.

<br>

## Technologies
- ##### HTML
- ##### CSS
- ##### JavaScript

<br>

### `Framework`

- ##### React :
The React. js framework is an open-source JavaScript framework and library developed by Facebook.
   It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript. 

<br>

### `Libraries` 
- ##### TailwindCSS : 
Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.


- ##### React Router :
React Router is the most popular routing library in React. Routing is a process in which a user is directed to different pages based on their action or request.

- ##### React icons :
React icons is a great resource for React developers, who can use its customizable SVG icons in their applications.

- #### React rating :
The React Rating UI component allows users to leave a rating in a digestible, visual way.

- #### React multi carousel :
An advanced slideshow component for cycling through images with a selectable number of active items.


- #### Axios :
It is a library which is used to make requests to an API, return data from the API, and then do things with that data in our React application.


<br>

 ### `React Hooks` :
- #### useState :  
 The most common hook is useState. It lets us keep local state in a function component and returns a pair of values: the current state and a function that updates it. The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!(const [schedules, setSchedules] = useState([]);)
 - #### useEffect :
 The useEffect Hook allows to perform side effects in the components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.(useEffect(function, dependency))

 - #### useContext :
 React Context is a way to manage state globally. In order to use the Context in a child component, we need to access it using the useContext Hook. 

 - #### useNavigate :
 useNavigate is a hook that allows to create a function that'll help a user navigate to a particular page (based on an action). We can customize it to redirect the user to the login page or user Dashboard.

 - #### useLocation :
 useLocation is hook that allows to get the current location(or URL) of the web app.

 - #### useParams :
 The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the Route path .

 <br>

## Installation and Setup Instructions

- Clone the repository
- Run npm install ( both in the trainer App and Trainer API.
- Npm start [Trainer API](https://github.com/rts-cmk-opgaver/trainer-api)
- Install libraries in Trainer App
- Npm start (Trainer App)
+ Create folders (Code Splitting-Modules):
   + Pages : Welcome, Home, ClassDetail, Schedules, Search.

      <br>
   + Components: MainRouter, Header, Trainer, Class, BackBTN
       + (*Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.) 
      <br> 
   + Context : Provider
        + (*React context provides data to components no matter how deep they are in the components tree. The context is used to manage global data, e.g. global state, theme, services, user settings, and more.)

        <br>

- The app has been adapted to the screen size of iPhone 12 pro.


    



<br>
<br>
<br>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
