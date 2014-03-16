var YammerAPIClient = require('../lib/api.js'),
	vows = require('vows'),
	assert = require('assert'),
	config = require('./helper/testconfig'),
	client = new YammerAPIClient(config);

/**
 * Tests the messages API implementation but also using some of the other APIs to 
 * verify the information being retrieved
 */
vows.describe('Yammer messages API').addBatch({
	'when requesting the all company feed': {
		topic: function() {
			client.messages.all({}, this.callback);
		},
		'we get a list of yams with a least one element': function(error, data) {
			assert.ifError(error);
			assert(data.messages.length > 0);
		},
		'and we can request more information about the first yam': {
			topic: function(data, error) {
				client.messages.get(data.messages[0].id, this.callback);
			},
			"and it works": function(error, data) {
				assert.ifError(error);
			}
		}
	},
	'when requesting only one the followed messages': {
		topic: function() {
			client.messages.following({limit: 1}, this.callback);
		},
		'we receive only one yam': function(error, data) {
			assert.ifError(error);
			assert.equal(data.messages.length, 1);
		}
	},
	'when requesting the messages in a group': {
		topic: function() {
			client.groups.list(this.callback);
		},
		'then retrieve the details of the first one': {
			topic: function(data, error) {
				client.messages.in_group(data[0].id, this.callback);
			},
			'and verify that it works': function(error, data) {
				assert.ifError(error);
			}
		}
	},
	'when requesting the messages liked by a user': {
		topic: function() {
			client.users.list({limit: 1}, this.callback);
		},
		'then retrieve the details of the first one': {
			topic: function(data, error) {
				client.messages.liked_by(data[0].id, this.callback);
			},
			'and verify that it works': function(error, data) {
				assert.ifError(error);
				//assert(data.messages.length > 0);
			}
		}
	}
}).export(module);