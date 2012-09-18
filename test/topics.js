var YammerTopicsAPI = require('../lib/topics.js'),
	vows = require('vows'),
	assert = require('assert'),
	config = require('./testconfig'),
	client = new YammerTopicsAPI(config)

vows.describe('Yammer groups API').addBatch({
	'when requesting all topics': {
		topic: function() {
			client.list({}, this.callback);
		},
		'we get a list of topics with a least one element': function(error, data) {
			assert.ifError(error);
			assert.isArray(data);
			assert.isTrue(data.length > 0);	
		},
		'and we can retrieve the first one': {
			topic: function(data, error) {				
				client.get(data[0].id, this.callback);
			},
			'successfully': function(error, data) {
				assert.ifError(error);
			}
		}
	}
}).export(module);