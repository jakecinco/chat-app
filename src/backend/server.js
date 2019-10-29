const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
//var cors = require('cors');

//Require mongoose instead of MongoClient for this project. Easier to understand Schemas
const mongoose = require('mongoose');
const Chat = require('./schema');


//Require socket.io using variable name client
const client = require('socket.io').listen(port).sockets;

//Location of our DB, this database 'chat-app' will be created if not already in local drive
const chatDB = 'mongodb://localhost:27017/chatDB';

//Connect server to database
//mongoose.connect(chatDB, {useNewUrlParser: true});

//Parses the request body to a readable json format
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json);

//Connect to mongoDB - backend server to database
mongoose.connect(chatDB, {useNewUrlParser: true}, function(err, db){
	if(err) {
		throw err;
	}
	console.log('Connected to MongoDB...');

	//Connect to Socket.io
	client.on('connection', function(socket){
		let chat = db.collection('chats');

		//Create function to send status
		sendStatus = function(stat){
			socket.emit(stat);
		}

		//Get chats from mongo collections. Look at socket.io documentation
		chat.find().limit(100).sort({_id:1}).toArray(function(err, res){
			if(err){
				throw err;
			}
			//Emit the messages
			socket.emit('output', res);
		});

		//Handle input events
		socket.on('input', function(data){
			let name = data.name;
			let message = data.message;

			//Check for name and message
			if(name == '' || message == ''){
				//Send error status
				sendStatus('Please enter a name and message');
			} else {
				//Insert message
				chat.insert({name: name, message: message}, function(){
					client.emit('output', [data]);

					//Send status object
					sendStatus({
						message: 'Message sent',
						clear: true
					});
				});
				
			}
		});
		// Handle clear
		socket.on('clear', function(data){
			//Remove all chat from collection
			chat.remove({}, function(){
				//Emit cleared
				socket.emit('Cleared')
			});
		})
	});
});

//app.use(cors());


//const chatAppUsers = require('./api-chatData/userData');

// app.get('/', (req, res) => {
//  	res.send('chat app is working');
//  });

// app.get('/users', (req, res) => res.send(chatAppUsers()));

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

//app.listen(port, () => console.log(`chat-app listening on ${port}`));
