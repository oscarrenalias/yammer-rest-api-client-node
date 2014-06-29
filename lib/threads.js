
var util = require('util'),
	YammerAPI = require('./base');

module.exports = YammerThreadsAPI;

function YammerThreadsAPI(config) {
	YammerAPI.call(this, config);
}
util.inherits(YammerThreadsAPI, YammerAPI);

YammerAPI.addMethods({ 
	get: {
		api: function(id) { return("/threads/" + id + ".json"); },
		method: "get"
	}
}, YammerThreadsAPI);
