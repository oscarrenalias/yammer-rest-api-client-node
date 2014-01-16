var https = require('https'),
    util = require('util'),
    log = require('winston');

// API modules
var YammerMessagesAPI = require('./messages'),
    YammerTopicsAPI = require('./topics'),
    YammerUserAPI = require('./user'),
    YammerGroupsAPI = require('./groups');
    YammerNotificationsAPI = require('./notifications');

module.exports = YammerAPIClient;

function YammerAPIClient(config) {
    this.config = config;

    // build the API with all the different components
    this.messages = new YammerMessagesAPI(config);
    this.topics = new YammerTopicsAPI(config);
    this.users = new YammerUserAPI(config);
    this.groups = new YammerGroupsAPI(config);
    this.notifications = new YammerNotificationsAPI(config);
}
