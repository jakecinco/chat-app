const express = require('express');
const app = express();
const port = 3001;
// const path = require('path');

var bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const chatAppUsers = require('./api-chatData/userData');

app.get('/', (req, res) => {
	res.send('chat app is working');
});

app.get('/users', (req, res) => res.send(chatAppUsers()));

// app.get('/:userId', (req, res) => {
// 	chatAppUsers.find((user) => {
// 		if (user.id === req.params.userId) {
// 			return res.json(user);
// 		}
// 	});
// 	res.json('no user');
// });

// app.post('/signin', (req, res) => {
// 	res.json('chat app has successfully posted data');
// });

// app.post('/register', (req, res) => {
// 	chatAppUsers.push({
// 		name: req.body.name,
// 		email: req.body.email,
// 		joined: new Date(),
// 		id: '123'
// 	});
// 	res.json(chatAppUsers[chatAppUsers.length - 1]);
// });

// app.delete('/users', (req, res) => {
// 	res.json('chat app has successfully delted user data');
// });

// app.use(express.static(path.join(__dirname, '../../build')));
// app.get('*', function(req, res) {
// 	res.sendFile(path.join(__dirname, '../../build', 'index.html'));
// });

app.listen(port, () => console.log(`chat-app listening on ${port}`));
