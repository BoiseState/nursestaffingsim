# BSU Nursing Staff Simulation

[![Deployment](https://github.com/cs481-ekh/f21-angels-of-mercy/actions/workflows/deploy.yml/badge.svg)](https://github.com/cs481-ekh/f21-angels-of-mercy/actions/workflows/deploy.yml)
[![Tests](https://github.com/cs481-ekh/f21-angels-of-mercy/actions/workflows/test.yml/badge.svg)](https://github.com/cs481-ekh/f21-angels-of-mercy/actions/workflows/test.yml)

BSU CS481 Capstone project 

This project is to help BSU nursing students practice staffing resource allocation.

# Website link
https://cs481-ekh.github.io/f21-angels-of-mercy/

# Overview
This project uses React JS to build the application. React JS is a JavaScript library that is used to build fast and interactive user interfaces for web and mobile applications. It is an open-source, component-base, front-end library that is only responsible for the application’s view layer.  To build the development environment the following steps are needed.

To learn more visit: reactjs.org
# Development Environment Set-up
1. Install Node.js found here: nodejs.org
2.  npm install
 - npm install will download the node_module packages required for the project.
3. npm run build
- npm run build will download a build folder for the project
4. npm start
 - npm start will start the development server: http://localhost:3000/. This provides a way to see the changes you make and do some manual testing before publishing the changes to main. 

# Running The Built in React Test Suite
1. npm run test


USAGE:

       a -runs all tests
       f - runs only failed tests
       q - quits the test watch mode
       p - filter by filename regex pattern
       t - filter by a test name regex pattern

# Debugging Using Developer Tools

Right click on web page, click "Inspect", and this will open Developer Tools. Another way to get here is to click F12 on a Windows computer.

Setting breakpoints in files using Developer Tools.  click "Source" at the top of Developer Tools, then under "localhost", expand the folder that has the name of your local file path, then find the file you want to debug.

For example, to set a breakpoint in Scenario.js, expand "localhost" --> expand the file path that is where your code is stored --> expand "src" --> expand "components" --> expand "main", then click on "Scenario.js".  Once the file opens in Developer Tools, click to the left of a line number to set a break point. Once you start clicking or typing in the web application, if you do something that triggers that breakpoint, the web page will pause and you can step through the code.
 
# Common Error handling
1. If a package is added to the package.json the node_modules on your computer will be out of date.
    - FIX:  Delete the node_modules folder and then run npm install
2. If the gh-pages branch is accidentally removed or the git hub page connection is broken.
    - To reconnect the git hub page run npm run deploy. 
    - To re-deploy gh-branch as long as in your CI/Build you have the gh-deploy script connected. Push a changed to the main branch and this will deploy the gh-branch automatically for you. 

# Resources
-	React-Bootstrap documentation: https://react-bootstrap.github.io/getting-started/introduction/

- VS Code extention: ES7 REact/Redux/GraphQL/React-Native snippets





