var YammerTopicsAPI = require('../lib/topics.js'),
	vows = require('vows'),
	assert = require('assert'),
	config = require('./helper/testconfig'),
	client = new YammerTopicsAPI(config)

//deleted this test as the topics api has not get all. will need use search to achieve
//something similar