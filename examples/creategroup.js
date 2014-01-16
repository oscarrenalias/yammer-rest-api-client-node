//
// This example will create a new group in your network.
// Keep in mind that the groups API is currently not public or documented at https://developer.yammer.com/restapi so:
// 1) use it at your own risk, 
// 2) it may break without notice,
// 3) I have no idea of which parameters it needs beyond 'name'
//
var YammerAPIClient = require('../lib/api.js'),
    client = new YammerAPIClient({token:"-->>ADD HERE YOUR OAUTH TOKEN<<--"});

client.groups.create({name: "NewTestGroupCreatedFromTheApi"}, function(error, data) {
    if(error)
        console.log("There was an error creating the group");
    else
        console.log(data);
});