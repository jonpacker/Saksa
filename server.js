
// Saksa main server file, should create a new instance of Saksa and run the server with the given config.

var Saksa = require('./lib/saksa');

var server = new Saksa({
	port: 2005,
	name: 'Saksa Test',
	desc: 'This is a test of Saksa'
});