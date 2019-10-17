
Front-end libraries
[npx create-react-app]
[npm install tachyons] (installs tachyons)

Back-end dependencies and libraries
1. [npm install node -S]  (adds node.js)
2. [npm install nodemon -S] (adds hot loading of backend server with nodemon)
3. [npm install express -S] (install express midware - ajax and body-parser inbuilt)
4. [npm install request-promise -S] [npm install request] (sets up back end API to get methods of request-promise from ES-6)
5. [npm install cors] enables cross-origin-resource-sharing, prevents resource blocking


CONNECT FRONT END AND BACK END
[npm install npm-run-all]

[npm run build]
Modify scripts  
    "scripts": {
    "start": "npm-run-all -s build start-backend",
    "start-frontend": "react-scripts start",
    "start-backend": "nodemon src/back-end/app.js",
    "start-dev": "npm-run-all -p start-frontend start-backend",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
Add proxy just above es lint and below scripts
 "proxy": "http://localhost:3001",
  "eslintConfig": {
    "extends": "react-app"
  },



, 

 // "dev": "nodemon index.js",


5   [npm install dotenv-webpack –D] (installs the env files and webpack)