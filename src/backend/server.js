const express = require('express');
const app = express();
const port = 3000;

// const getUserData = require('../api-chatData/userData.js');
// app.get('/api-chatData/sign-in', (req, res) => res.send(getUserData()));

app.listen(port, () => console.log(`chat-app listening on ${port}`));
