var YammerUserAPI = require('../lib/user.js'),
	vows = require('vows'),
	assert = require('assert'),
	config = require('./helper/testconfig'),
	userClient = new YammerUserAPI(config)

vows.describe('Yammer users API').addBatch({
	'when requesting all users': {
		topic: function() {
			userClient.list({}, this.callback);
		},
		'we get a list of users with a least one element': function(error, data) {
			assert.ifError(error);
			assert(data.length > 0);
		},
		'and we can request more information about the first one': {
			topic: function(data, error) {
				userClient.get(data[0].id, this.callback);
			},
			"and it works": function(error, data) {
				assert.ifError(error);
			}
		}
	},
	'retrieving information about the currently logged in user': {
		topic: function() {
			userClient.current(this.callback);
		},
		'works': function(error, data) {
			assert.ifError(error);
		}
	},
	'retrieving information about the networks accessible by the current user': {
		topic: function() {
			userClient.networks(this.callback);
		},
		'works': function(error, data) {
			assert.ifError(error);
		}
	}
}).export(module);