
var util = require('util'),
	YammerAPI = require('./base');

module.exports = YammerMessagesAPI;

function YammerMessagesAPI(config) {
	YammerAPI.call(this, config);
}
util.inherits(YammerMessagesAPI, YammerAPI);

YammerAPI.addMethods({ 
	// these ones don't take any id
	all: {
		api: "/messages.json",
		method: "get"
	},
	sent: {
		api: "/messages/sent.json",
		method: "get"
	},
	received: {
		api: "/messages/received.json",
		method: "get"
	},
	private: {
		api: "/messages/private.json",
		method: "get"
	},
	following: {
		api: "/messages/following.json",
		method: "get"
	},
	in_thread: {
		api: function(id) { return("/messages/in_thread/" + id + ".json") },
		method: "get"
	},
	from_user: {
		api: function(id) { return("/messages/from_user/" + id + ".json") },
		method: "get"
	},
	about_topic: {
		api: function(id) { return("/messages/from_user/" + id + ".json") },
		method: "get"
	},
	in_group: {
		api: function(id) { return("/messages/in_group/" + id + ".json") },
		method: "get"
	},
	liked_by: {
		api: function(id) { return("/messages/liked_by/" + id + ".json") },
		method: "get"
	},
	delete: {
		api: function(id) { return("/messages/" + id) },
		method: "delete"
	},
	create: {
		api: "/messages.json",
		method: "post"
	},
	get: {
		api: function(id) { return("/messages/" + id + ".json") },
		method: "get"
	}
}, YammerMessagesAPI);