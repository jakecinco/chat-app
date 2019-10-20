const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;
const path = require('path');

app.use(bodyParser.json);

const chatAppUsers = require('./api-chatData/userData');
app.get('/', (req, res) => {
	res.send('chat app is working');
});

app.get('/users', (req, res) => res.send(chatAppUsers()));

app.post('/signin', (req, res) => {
	res.json('chat app has successfully posted data');
});

app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => console.log(`chat-app listening on ${port}`));
