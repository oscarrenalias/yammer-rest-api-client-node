var YammerTopicsAPI = require('../lib/topics.js'),
	vows = require('vows'),
	assert = require('assert'),
	config = require('./helper/testconfig'),
	client = new YammerTopicsAPI(config);

var yammer = nock('https://www.yammer.com')
              .get('/api/v1/topics/1.json?')
              .reply(200, {
                "type": "topic",
                "id": 1,
                "name": "Efficiency",
                "normalized_name": "efficiency",
                "permalink": "efficiency",
                "url": "https://www.yammer.com/api/v1/topics/1",
                "web_url": "https://www.yammer.com/myob.com/topics/1",
                "references": [],
                "expert_referents": []
              });

vows.describe('Yammer topics API').addBatch({
  'gets a topic': {
    topic: function(data, error) {        
      client.get(1, this.callback);
    },
    'successfully': function(error, data) {
      assert.equal(data.type, 'topic');
    }
  }
}).export(module);