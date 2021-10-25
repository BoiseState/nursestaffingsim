# BSU Nursing Staff Simulation
 BSU CS481 Capstone project 

[![Deployment](https://github.com/cs481-ekh/f21-angels-of-mercy/actions/workflows/deploy.yml/badge.svg)](https://github.com/cs481-ekh/f21-angels-of-mercy/actions/workflows/deploy.yml)
[![Tests](https://github.com/cs481-ekh/f21-angels-of-mercy/actions/workflows/test.yml/badge.svg)](https://github.com/cs481-ekh/f21-angels-of-mercy/actions/workflows/test.yml)

This project is to help BSU nursing students practice staffing resource allocation.

# Development Environment Set-up
1. Install Node.js 
2.  npm install
    - npm install will download the node_module packages required for the project.
3. npm build
4. npm start
    - npm start will launch a development environment of the website. 

# Running The Test Suite
1. npm run test

# Common Error handling
1. If a package is added to the package.json the node_modules on your computer will be out of date.
    - FIX:  In terminal run npm install
2. If the gh-pages branch is accidentaly removed or the git hub page connection is broken.
    - To reconnect the git hub page run npm run deploy. 
    - To re-deploy gh-branch as long as in your CI/Build you have the gh-deploy script connected you just have to push a changed to the main branch and this will deploy the gh-branch automatically for you. 

