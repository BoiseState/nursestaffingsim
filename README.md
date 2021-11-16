# BSU Inpatient Nurse Staffing Simulation

[![Deployment](https://github.com/BoiseState/nursestaffingsim/actions/workflows/deploy.yml/badge.svg)](https://github.com/BoiseState/nursestaffingsim/actions/workflows/deploy.yml)
[![Tests](https://github.com/BoiseState/nursestaffingsim/actions/workflows/test.yml/badge.svg)](https://github.com/BoiseState/nursestaffingsim/actions/workflows/test.yml)

BSU CS481 Capstone project

Authors: Becka Seevers, Emma Lytle, Lih Wei Liang

Sponsor: Dr. Renee Walters - reneewalters@boisestate.edu

This project is to help BSU nursing students practice staffing resource allocation.

# Website link
https://boisestate.github.io/nursestaffingsim/

# Overview
This project uses ReactJS to build the application. ReactJS is a JavaScript library that is used to build fast and interactive user interfaces for web and mobile applications. It is an open-source, component-base, front-end library that is only responsible for the application’s view layer.  To build the development environment the following steps are needed:

To learn more visit reactjs.org.
# Development Environment Setup
1. Install Node.js found here: nodejs.org
2. `npm install`
- npm install will download the node_modules packages required for the project.
3. `npm run build`
- npm run build will download a build folder for the project
4. `npm start`
- npm start will start the development server: http://localhost:3000/. This provides a way to see the changes you make and do some manual testing before publishing the changes to main. 

# Deployment 
For this project, we deployed our site with github pages. 

To do that, you enable github pages in the repo Settings -> Pages 

Initially, it will have the Source of your website on NONE. After following the deployment steps, the source will be gh-pages. In our case, we are using a gh-pages branch that contains the stand alone contents of our website (i.e. The root folder that contains the index.html and the css styles). If in the future there was a desire to change where the website is hosted, all one has to do is take a copy of the gh-pages branch. 

Once the github pages setting is turned on, you have to include it in your package.json.

** Note after adding to your package.json you will have to update your node_modules folder by removing node_modules (run `rm -rf node_modules package-lock.json`) and then reinstall it by running `npm install`.

Then, set up the gh-pages build:
`"deploy": "gh-pages -d build"`

This will finish hooking up the requirements for the github page. 
The final step is to run: 

`npm run deploy`

For more information and steps on how to include gh-pages in deploy.yml visit: https://medium.com/swlh/deploy-create-react-app-to-github-pages-using-github-actions-4e95ae7fd65f

NOTE:
The ACTIONS_DEPLOY_KEY key/secret pair was created with beckaseevers@u.boisestate.edu email. If you need to change this key, which is needed for running the deployment to gh-pages, then you will have to follow this [!documentation](https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-create-ssh-deploy-key).

# Running The Built in React Test Suite
1. `npm run test`

USAGE:

       a -runs all tests
       f - runs only failed tests
       q - quits the test watch mode
       p - filter by filename regex pattern
       t - filter by a test name regex pattern
For example, in our coding process, we used `npm run test a` during development and it is used in the test action workflow.

# Debugging Using Developer Tools
Right click on web page, click "Inspect", and this will open Developer Tools. Another way to get here is to click F12 on a Windows computer.

### Setting breakpoints in files using Developer Tools
Click "Source" at the top of Developer Tools, then under "localhost", expand the folder that has the name of your local file path, then find the file you want to debug.

For example, to set a breakpoint in Scenario.js, expand "localhost" --> expand the file path that is where your code is stored --> expand "src" --> expand "components" --> expand "main", then click on "Scenario.js".  Once the file opens in Developer Tools, click to the left of a line number to set a break point. Once you start clicking or typing in the web application, if you do something that triggers that breakpoint, the web page will pause and you can step through the code.
 
# Common Error handling
1. If a package is added to the package.json the node_modules on your computer will be out of date.
    - FIX:  Delete the node_modules folder package-lock.json and then run `npm install`
2. If the gh-pages branch is accidentally removed or the git hub page connection is broken.
    - To reconnect the git hub page run `npm run deploy`. 
    - To re-deploy gh-branch as long as in your CI/Build you have the gh-deploy script connected. Push a change to the main branch and this will deploy the gh-branch automatically for you. 

# Resources
- React-Bootstrap documentation: https://react-bootstrap.github.io/getting-started/introduction/
- VS Code extension: ES7 React/Redux/GraphQL/React-Native snippets



