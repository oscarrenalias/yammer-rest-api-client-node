
var util = require('util'),
	YammerAPI = require('./base');

module.exports = YammerNotificationsAPI;

function YammerNotificationsAPI(config) {
	YammerAPI.call(this, config);
}
util.inherits(YammerNotificationsAPI, YammerAPI);

YammerAPI.addMethods({ 
	get: {
		api: '/streams/notifications.json',
		method: 'get'
	}
}, YammerNotificationsAPI);
