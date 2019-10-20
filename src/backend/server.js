const express = require('express');
const app = express();
const port = 3001;
const path = require('path');

app.get('/', (req, res) => {
	res.send('chat app is working');
});

app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => console.log(`chat-app listening on ${port}`));
