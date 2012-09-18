var util = require('util'),
	assert = require('assert'),
    YammerAPI = require('./base');

module.exports = YammerUserAPI;

function YammerUserAPI(config) {
    YammerAPI.call(this, config);
}
util.inherits(YammerUserAPI, YammerAPI);

YammerAPI.addMethods({ 
    list: {
        api: "/users.json",
        method: "get"
    },
    get: {
        api: function(id) { return("/users/" + id + ".json") }, 
        method: "get"
    },
    create: {
        api: "/topics.json",
        method: "post"
    },
    delete: {
        api: function(id) { return("/users/" + id + ".json")},
        method: "delete"
    },
    update: {
        api: function(id) { return("/users/" + id + ".json")},
        method: "put"
    },
    networks: {
        api: "/networks/current.json",
        method: "get"
    },
    current: {
        api: "/users/current.json",
        method: "get"
    }
}, YammerUserAPI);

YammerUserAPI.prototype.by_email = function(email, callback) {      
    this.doGet(this.baseUrl + '/users/by_email.json', { "email": email }, callback);    
}