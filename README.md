# BSU Nursing Staff Simulation
 BSU CS481 Capstone project 

[![Deployment](https://github.com/cs481-ekh/f21-angels-of-mercy/actions/workflows/deploy.yml/badge.svg)](https://github.com/cs481-ekh/f21-angels-of-mercy/actions/workflows/deploy.yml)
[![Tests](https://github.com/cs481-ekh/f21-angels-of-mercy/actions/workflows/test.yml/badge.svg)](https://github.com/cs481-ekh/f21-angels-of-mercy/actions/workflows/test.yml)

This project is to help BSU nursing students practice staffing resource allocation.

# Website link
https://cs481-ekh.github.io/f21-angels-of-mercy/

# Development Environment Set-up
1. Install Node.js 
2.  npm install
    - npm install will download the node_module packages required for the project.
3. npm build
4. npm start
    - npm start will launch a development environment of the website. 

# Running The Test Suite
1. npm run test
USAGE: a -runs all tests
       f - runs only failed tests
       q - quits the test watch mode
       p - filter by filename regex pattern
       t - filter by a test name regex pattern

# Debugging 

Right click on Chrome web page, click "Inspect", and this will open Chrome Developer Tools. Another way to get here is to click F12 on a Windows computer.

Setting breakpoints in files using Chrome Developer Tools.  click "Source" at the top of Developer Tools, then under "localhost", expand the folder that has the name of your local file path, then find the file you want to debug.

 For example, to set a breakpoint in Scenario.js, expand "localhost" --> expand the file path that is where your code is stored --> expand "src" --> expand "components" --> expand "main", then click on "Scenario.js".  Once the file opens in Chrome Developer Tools, click to the left of a line number to set a break point. Once you start clicking or typing in the web application, if you do something that triggers that breakpoint, the web page will pause and you can step through the code.

 
# Common Error handling
1. If a package is added to the package.json the node_modules on your computer will be out of date.
    - FIX:  In terminal run npm install
2. If the gh-pages branch is accidentaly removed or the git hub page connection is broken.
    - To reconnect the git hub page run npm run deploy. 
    - To re-deploy gh-branch as long as in your CI/Build you have the gh-deploy script connected. Push a changed to the main branch and this will deploy the gh-branch automatically for you. 




