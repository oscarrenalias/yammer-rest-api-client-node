var YammerGroupsAPI = require('../lib/groups.js'),
	vows = require('vows'),
	assert = require('assert'),
	config = require('./helper/testconfig'),
	groupsClient = new YammerGroupsAPI(config)

vows.describe('Yammer groups API').addBatch({
	'when requesting all groups': {
		topic: function() {
			groupsClient.list({}, this.callback);
		},
		'we get a list of groups with a least one element': function(error, data) {
			assert.ifError(error);
			assert.isArray(data);
			assert.isTrue(data.length > 0);	
		},
		'and we can retrieve the first one': {
			topic: function(data, error) {				
				groupsClient.get(data[0].id, this.callback);
			},
			'successfully': function(error, data) {
				assert.ifError(error);
			}
		}
	}
}).export(module);