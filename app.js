const 	express = require('express'),
	path = require('path');

const server_dir = path.join(__dirname, 'public');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(server_dir));

app.listen(port, () => console.log(`Server started at http://18.219.201.144:${port}`));
