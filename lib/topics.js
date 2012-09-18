var util = require('util'),
    YammerAPI = require('./base');

module.exports = YammerTopicsAPI;

function YammerTopicsAPI(config) {
    YammerAPI.call(this, config);
}
util.inherits(YammerTopicsAPI, YammerAPI);

YammerTopicsAPI.prototype.get = function(id, callback) {      
    this.doGet('/api/v1/topics/' + id + '.json', {}, callback);
}