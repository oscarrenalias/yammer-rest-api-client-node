var util = require('util'),
    YammerAPI = require('./base');

module.exports = YammerGroupsAPI;

function YammerGroupsAPI(config) {
    YammerAPI.call(this, config);
}
util.inherits(YammerGroupsAPI, YammerAPI);

YammerAPI.addMethods({ 
	list: {
		api: "/groups.json",
		method: "get"
	},
	get: {
		api: function(id) { return("/groups/" + id + ".json") }, 
		method: "get"
	},
	create: {
		api: "/groups",
		method: "post"
	},
	update: {
		api: function(id) { return("/groups/" + id) },
		method: "put"
	}
}, YammerGroupsAPI);