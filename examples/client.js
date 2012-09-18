var YammerAPIClient = require('../lib/api.js'),
	client = new YammerAPIClient({token:"oauth token"});

client.messages.all({limit: 1}, function(error, data) {
	if(error)
		console.log("There was an error retrieving the data");
	else
		console.log(data);
});