var https = require('https'),
    util = require('util'),
    log = require('winston');

// API modules
var YammerMessagesAPI = require('./messages'),
    YammerTopicsAPI = require('./topics'),
    YammerUsersAPI = require('./users'),
    YammerGroupsAPI = require('./groups');
    YammerNotificationsAPI = require('./notifications');
    YammerThreadsAPI = require('./threads');
    YammerRelationshipsAPI = require('./relationships');

module.exports = YammerAPIClient;

function YammerAPIClient(config) {
    this.config = config;

    // build the API with all the different components
    this.messages = new YammerMessagesAPI(config);
    this.topics = new YammerTopicsAPI(config);
    this.users = new YammerUsersAPI(config);
    this.groups = new YammerGroupsAPI(config);
    this.notifications = new YammerNotificationsAPI(config);
    this.threads = new YammerThreadsAPI(config);
    this.relationships = new YammerRelationshipsAPI(config);
}
