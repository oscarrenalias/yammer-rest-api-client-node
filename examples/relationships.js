// This example show how to get relationships from current user and using params from other users as well
// To get the relationships from a different user than current use params: {user_id:"USER_ID"}
// To create relationships from current user to a new user, set one of the types of relationship as param
// client.relationships.create({params},function(error, data) {
// {subordinate | superior | colleague:"E-MAIL_OF Subordinate, Superior or Colleague "}

var YammerAPIClient = require('../lib/api.js'),
    client = new YammerAPIClient({token:"-->>ADD HERE YOUR OAUTH TOKEN<<--"});

client.relationships.get(function(error, data) {
    if(error)
        console.log("There was an error retrieving the data");
    else
        console.log(data);
});